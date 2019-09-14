/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    title
  }
}
`;
export const listProjects = `query ListProjects(
  $filter: TableProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
    }
    nextToken
  }
}
`;
export const getLink = `query GetLink($id: ID!) {
  getLink(id: $id) {
    id
    source
    target
    type
  }
}
`;
export const listLinks = `query ListLinks(
  $filter: TableLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      source
      target
      type
    }
    nextToken
  }
}
`;
export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    text
    start_date
    duration
    progress
    project
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: TableTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      start_date
      duration
      progress
      project
    }
    nextToken
  }
}
`;
