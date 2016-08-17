import {
	UPDATE_LOG
} from '../actions/actions';

const logs = (state = {
	createAccount: ''
}, action) => {
	switch (action.type) {
		case UPDATE_LOG:
			return {
				...state,
				[action.logType]: action.log
			}

		default:
			return state
	}
}

export default logs