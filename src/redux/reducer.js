import projectsReducer from './projectsReducer'
import audioReducer from './audioReducer'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
    projects: projectsReducer,
    audios: audioReducer
})