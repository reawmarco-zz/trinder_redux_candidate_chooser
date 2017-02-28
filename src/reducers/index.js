import { combineReducers } from 'redux';
import CandidatesReducer from './candidates_reducer'

const rootReducer = combineReducers({
  candidates: CandidatesReducer
});

export default rootReducer;
