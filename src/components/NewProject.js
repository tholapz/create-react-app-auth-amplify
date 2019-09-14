import React from 'react';
import { v4 as uuid } from 'uuid';
import { graphql } from 'react-apollo';
import { createProject } from "../graphql/mutations";

export const NewProject = () => {
  const [project, setProject] = React.useState({name:'' });
  const _onChangeName = ({target}) => {
    const _project = project;
    _project.name = target.value;
    setProject(_project);
  };
  return (
    <div>
      <h1>Create a project</h1>
      <form>
        <div className="field required">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={project.name} onChange={_onChangeName}/>
        </div>
      </form>
    </div>
  )
}