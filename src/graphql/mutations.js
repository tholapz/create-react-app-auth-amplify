/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    title
  }
}
`;
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    id
    title
  }
}
`;
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
    id
    title
  }
}
`;
export const createLink = `mutation CreateLink($input: CreateLinkInput!) {
  createLink(input: $input) {
    id
    source
    target
    type
  }
}
`;
export const updateLink = `mutation UpdateLink($input: UpdateLinkInput!) {
  updateLink(input: $input) {
    id
    source
    target
    type
  }
}
`;
export const deleteLink = `mutation DeleteLink($input: DeleteLinkInput!) {
  deleteLink(input: $input) {
    id
    source
    target
    type
  }
}
`;
export const createTask = `mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    text
    start_date
    duration
    progress
    project
  }
}
`;
export const updateTask = `mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
    id
    text
    start_date
    duration
    progress
    project
  }
}
`;
export const deleteTask = `mutation DeleteTask($input: DeleteTaskInput!) {
  deleteTask(input: $input) {
    id
    text
    start_date
    duration
    progress
    project
  }
}
`;
