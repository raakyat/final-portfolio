const initialState = {
    audios: []
}
    
const audioReducer = (state=initialState, action) => {
    switch (action.type){
    case "SET_AUDIO":
        return {...state, audios: action.payload}
    default:
        return {...state}
    }
}
  
  export default audioReducer
  