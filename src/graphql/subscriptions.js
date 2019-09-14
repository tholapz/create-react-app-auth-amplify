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
export const onCreateLink = `subscription OnCreateLink($id: ID, $source: ID, $target: ID, $type: String) {
  onCreateLink(id: $id, source: $source, target: $target, type: $type) {
    id
    source
    target
    type
  }
}
`;
export const onUpdateLink = `subscription OnUpdateLink($id: ID, $source: ID, $target: ID, $type: String) {
  onUpdateLink(id: $id, source: $source, target: $target, type: $type) {
    id
    source
    target
    type
  }
}
`;
export const onDeleteLink = `subscription OnDeleteLink($id: ID, $source: ID, $target: ID, $type: String) {
  onDeleteLink(id: $id, source: $source, target: $target, type: $type) {
    id
    source
    target
    type
  }
}
`;
export const onCreateTask = `subscription OnCreateTask(
  $id: ID
  $text: String
  $start_date: AWSDate
  $duration: Int
  $progress: Float
) {
  onCreateTask(
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
export const onUpdateTask = `subscription OnUpdateTask(
  $id: ID
  $text: String
  $start_date: AWSDate
  $duration: Int
  $progress: Float
) {
  onUpdateTask(
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
export const onDeleteTask = `subscription OnDeleteTask(
  $id: ID
  $text: String
  $start_date: AWSDate
  $duration: Int
  $progress: Float
) {
  onDeleteTask(
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
