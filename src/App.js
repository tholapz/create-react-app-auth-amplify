import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient, { defaultDataIdFromObject } from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import {HOC} from './components/Gantt/GraphGantt';
import Toolbar from './components/Toolbar';
import MessageArea from './components/MessageArea';
import './App.css';
Amplify.configure(aws_exports)

const client = new AWSAppSyncClient({
  url: aws_exports.aws_appsync_graphqlEndpoint,
  region: aws_exports.aws_appsync_region,
  auth: {
    type: aws_exports.aws_appsync_authenticationType,
    apiKey: aws_exports.aws_appsync_apiKey,
  },
  cacheOptions: {
    dataIdFromObject: (obj) => {
      let id = defaultDataIdFromObject(obj);

      if (!id) {
        const { __typename: typename } = obj;
        switch (typename) {
          case 'Comment':
            return `${typename}:${obj.commentId}`;
          default:
            return id;
        }
      }

      return id;
    }
  }
});



class App extends Component {
  state = {
    currentZoom: 'Days',
    messages: [],
  };

  addMessage(message) {
    const maxLogLength = 5;
    const newMessate = { message };
    const messages = [
      newMessate,
      ...this.state.messages
    ];

    if (messages.length > maxLogLength) {
      messages.length = maxLogLength;
    }
    this.setState({ messages });
  }

  logDataUpdate = (type, action, item, id) => {
    let text = item && item.text ? ` (${item.text})` : '';
    let message = `${type} ${action}: ${id} ${text}`;
    if (type === 'link' && action !== 'delete') {
      message += ` ( source: ${item.source}, target: ${item.target} )`;
    }
    this.addMessage(message);
  }

  handleZoomChange = (zoom) => {
    this.setState({
      currentZoom: zoom
    });
  }

  render() {
    const { currentZoom, messages } = this.state;
    return (
      <ApolloProvider client={client}>
    <Rehydrated>
      <div>
        <div className="zoom-bar">
          <Toolbar
            zoom={currentZoom}
            onZoomChange={this.handleZoomChange}
          />
        </div>
        <div className="gantt-container">
          <HOC
            zoom={currentZoom}
            onDataUpdated={this.logDataUpdate}
          />
        </div>
        <MessageArea
          messages={messages}
        />
      </div>
      </Rehydrated>
      </ApolloProvider>
    );
  }
}

export default withAuthenticator(App, true);