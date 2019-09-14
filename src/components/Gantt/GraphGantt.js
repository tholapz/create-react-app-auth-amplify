import React from 'react';
import Gantt from '.';
import gql from "graphql-tag";
import { graphql, compose, withApollo } from "react-apollo";
import { listTasks } from "../../graphql/queries";

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
  const tasks = {data: props.tasks, links: data.links};

  return <Gantt {...props} tasks={tasks}/>
}


export const HOC = withApollo(compose(
  graphql(
    gql(listTasks), {
      options: {
        fetchPolicy: 'cache-first',
      },
      props: ({ data: { listTasks = { items: [] } } }) => ({
        tasks: listTasks.items
    })
    }
  )
)(GraphGantt))