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
export const getGantt = `query GetGantt($id: ID!) {
  getGantt(id: $id) {
    id
    text
    start_date
    duration
    progress
    project
  }
}
`;
export const listGantts = `query ListGantts(
  $filter: TableGanttFilterInput
  $limit: Int
  $nextToken: String
) {
  listGantts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
