/*Actions*/
import {
	CHANGE_LANGUAGE
} from '../actions/actions';

const language = (state = 'en', action) => {
	switch (action.type) {
		case CHANGE_LANGUAGE:
			return action.language
			
		default:
			return state;
	}
}

export default language