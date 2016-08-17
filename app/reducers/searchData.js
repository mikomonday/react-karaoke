/*Actions*/
import {
	INVALIDATE_SEARCH,
	REQUEST_SEARCH,
	RECEIVE_SEARCH
} from '../actions/actions';

const searchData = (state = {
	isFetching: false,
	isValid: false,
	terms: '',
	mode: '',
	data: {},
	fetchTime: 'never'
}, action) => {
	switch (action.type) {
		case INVALIDATE_SEARCH:
			return {
				...state,
				isValid: false,
				data: {}
			}

		case REQUEST_SEARCH:
			return {
				...state,
				isFetching: true
			}

		case RECEIVE_SEARCH:
			return {
				...state,
				isFetching: false,
				isValid: true,
				data: action.data,
				terms: action.terms,
				mode: action.mode,
				fetchTime: action.time
			}

		default:
			return state;
	}
}

export default searchData