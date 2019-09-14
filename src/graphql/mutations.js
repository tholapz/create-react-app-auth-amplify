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
export const createGantt = `mutation CreateGantt($input: CreateGanttInput!) {
  createGantt(input: $input) {
    id
    text
    start_date
    duration
    progress
    project
  }
}
`;
export const updateGantt = `mutation UpdateGantt($input: UpdateGanttInput!) {
  updateGantt(input: $input) {
    id
    text
    start_date
    duration
    progress
    project
  }
}
`;
export const deleteGantt = `mutation DeleteGantt($input: DeleteGanttInput!) {
  deleteGantt(input: $input) {
    id
    text
    start_date
    duration
    progress
    project
  }
}
`;
