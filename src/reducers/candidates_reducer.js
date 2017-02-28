import { FETCH_CANDIDATES, APROVE_CANDIDATE, REJECT_CANDIDATE } from '../actions';

const INITIAL_STATE = { next_candidates: null, approved_list: [], rejected_list: [] };

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case FETCH_CANDIDATES:
      return {...state, next_candidates: action.payload, current_candidate: action.payload[0] }
    case APROVE_CANDIDATE:
      let aprove = state.next_candidates.slice(1);
      return {...state, approved_list: state.approved_list.concat(action.payload),
            next_candidates: aprove,
            current_candidate: aprove[0] }

    case REJECT_CANDIDATE:
      let reject = state.next_candidates.slice(1);
        return {...state, rejected_list: state.rejected_list.concat(action.payload),
          next_candidates: reject,
          current_candidate: reject[0] }
  }

  return state;
}
