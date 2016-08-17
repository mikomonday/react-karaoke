/*Actions*/
import {
	INVALIDATE_SONGINFO,
	REQUEST_SONGINFO,
	RECEIVE_SONGINFO
} from '../actions/actions';

const songInfo = (state = {
	isFetching: false,
	isValid: false,
	data: {},
	fetchTime: 'never'
}, action) => {
	switch (action.type) {
		case INVALIDATE_SONGINFO:
			return {
				...state,
				isValid: false,
				data: {}
			}

		case REQUEST_SONGINFO:
			return {
				...state,
				isFetching: true
			}

		case RECEIVE_SONGINFO:
			return {
				...state,
				isFetching: false,
				isValid: true,
				data: action.data,
				fetchTime: action.time
			}

		default:
			return state
	}
}

export default songInfo