const clearProject = {
    id: null,
    name: "",
    logo: "",
    description: "",
    github: "",
    demo: "",
    technologies: "",
  }
  
  const initialState = {
      projects: [],
      selectedProject: clearProject,
      display: false
  }
    
  const projectsReducer = (state=initialState, action) => {
      switch (action.type){
        case "SET_PROJECTS":
          return {...state, projects: action.payload}
        case "SET_SELECTED_PROJECT":
          return {...state, selectedProject: action.payload}
        case "RESET_PROJECT":
          return {...state, selectedProject: clearProject}
        default:
          return {...state}
      }
  }
  
  export default projectsReducer
  