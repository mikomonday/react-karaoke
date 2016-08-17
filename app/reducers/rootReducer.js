import {combineReducers} from 'redux';
import {responsiveStateReducer} from 'redux-responsive';

/*Reducers*/
import drawer from './drawer';
import searchBar from './searchBar';
import searchData from './searchData';
import songInfo from './songInfo';
import language from './language';
import logs from './logs';
import session from './session';
import user from './user';

const rootReducer = combineReducers({
	browser: responsiveStateReducer,
	drawer,
	searchBar,
	searchData,
	songInfo,
	language,
	session,
	user,
	logs
});

export default rootReducer