import {
	TOGGLE_DRAWER,
} from '../actions/actions';

const drawer = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_DRAWER:
			return !state

		default:
			return state
	}
}

export default drawer