import {
	CHANGE_PAGE,
	CHANGE_DIALOG,
	CLEAR_DIALOG,
	GO_BACK
} from '../actions/actions';

const session = (state = {
	page: 'home',
	dialog: '',
	history: [],
}, action) => {
	switch (action.type) {

		case CHANGE_PAGE:
			return {
				...state,
				page: action.page,
				history: [...state.history, state.page]
			}

		case CHANGE_DIALOG:
			return {
				...state,
				dialog: action.dialog
			}

		case CLEAR_DIALOG:
			return {
				...state,
				dialog: ''
			}

		case GO_BACK:
			return {
				...state,
				page: state.history[state.history.length - 1],
				history: state.history.slice(0,-1)
			}

		default:
			return state
	}
}

export default session; 