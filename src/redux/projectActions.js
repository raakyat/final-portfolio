const API = "http://localhost:3000"

export const setProjects = () => {
  return dispatch => {
    fetch(API + "/projects")
    .then(res => res.json())
    .then(data => dispatch({
      type: "SET_PROJECTS",
      payload: data
    })
  )}
}

export const setSelectedProject = (id) => {
  return dispatch => {
    fetch(API + "/projects/" + id)
    .then(res => res.json())
    .then(project => dispatch({
      type: "SET_SELECTED_PROJECT",
      payload: project
    })
  )}
}

export const resetProject = () => ({type: "RESET_PROJECT"})