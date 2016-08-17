/*Actions*/
import {
	TOGGLE_SEARCH,
	CHANGE_SEARCH_TERMS,
	CHANGE_SEARCH_MODE,
} from '../actions/actions';

const searchBar = (state = {
	open: false,
	terms: '',
	mode: 'song'
}, action) => {
	switch (action.type) {
		case TOGGLE_SEARCH:
			return {
				...state,
				open: !state.open
			}

		case CHANGE_SEARCH_TERMS:
			return {
				...state,
				terms: action.terms
			}

		case CHANGE_SEARCH_MODE:
			return {
				...state,
				mode: action.mode
			}
			
		default:
			return state
	}
}

export default searchBar;