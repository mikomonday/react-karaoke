import {
	CHANGE_PAGE,
} from '../actions/actions';

const history = (state = [], action ) => {
	switch (action.type) {
		case CHANGE_PAGE:
			return [...state,action.page]

		case GO_BACK:
			return [...state].slice(-1, 1)

		default:
			return state
	}
}

export default history