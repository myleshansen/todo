const TodoList = () => {
  let projects = [];
  const addProject = (project) => {
    projects.push(project);
  };

  const getProjects = () => projects;

  return { addProject, getProjects };
};

export { TodoList };
