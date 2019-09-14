import React from 'react';
import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient, { defaultDataIdFromObject } from "aws-appsync";
import appSyncConfig from "../../aws-exports";
import { Rehydrated } from "aws-appsync-react";
import Gantt from '.';

// static data for our gantt chart
const data = {
  data: [
    { id: 1, text: 'Task #1', start_date: '2019-04-15', duration: 3, progress: 0.6 },
    { id: 2, text: 'Task #2', start_date: '2019-04-18', duration: 3, progress: 0.4 }
  ],
  links: [
    { id: 1, source: 1, target: 2, type: '0' }
  ]
};

export const GraphGantt = (props) => {
  return <Gantt {...props} tasks={data}/>
}

const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey,
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


export const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <GraphGantt />
    </Rehydrated>
  </ApolloProvider>
);