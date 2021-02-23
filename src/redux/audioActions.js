const API = "http://localhost:3000"

export const setAudio = () => {
  return dispatch => {
    fetch(API + "/audios")
    .then(res => res.json())
    .then(data => dispatch({
      type: "SET_AUDIO",
      payload: data
    })
  )}
}
