/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = `subscription OnCreateProject($id: ID, $title: String) {
  onCreateProject(id: $id, title: $title) {
    id
    title
  }
}
`;
export const onUpdateProject = `subscription OnUpdateProject($id: ID, $title: String) {
  onUpdateProject(id: $id, title: $title) {
    id
    title
  }
}
`;
export const onDeleteProject = `subscription OnDeleteProject($id: ID, $title: String) {
  onDeleteProject(id: $id, title: $title) {
    id
    title
  }
}
`;
export const onCreateGantt = `subscription OnCreateGantt(
  $id: ID
  $text: String
  $start_date: AWSDateTime
  $duration: Int
  $progress: Float
) {
  onCreateGantt(
    id: $id
    text: $text
    start_date: $start_date
    duration: $duration
    progress: $progress
  ) {
    id
    text
    start_date
    duration
    progress
    project
  }
}
`;
export const onUpdateGantt = `subscription OnUpdateGantt(
  $id: ID
  $text: String
  $start_date: AWSDateTime
  $duration: Int
  $progress: Float
) {
  onUpdateGantt(
    id: $id
    text: $text
    start_date: $start_date
    duration: $duration
    progress: $progress
  ) {
    id
    text
    start_date
    duration
    progress
    project
  }
}
`;
export const onDeleteGantt = `subscription OnDeleteGantt(
  $id: ID
  $text: String
  $start_date: AWSDateTime
  $duration: Int
  $progress: Float
) {
  onDeleteGantt(
    id: $id
    text: $text
    start_date: $start_date
    duration: $duration
    progress: $progress
  ) {
    id
    text
    start_date
    duration
    progress
    project
  }
}
`;
