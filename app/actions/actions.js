import axios from 'axios';

export const UPDATE_LOG = 'UPDATE_LOG';
export const updateLog = (logType, log) => {
	return {
		type: UPDATE_LOG,
		logType,
		log
	}
}

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const changeLanguage = (language) => {
	return {
		type: CHANGE_LANGUAGE,
		language
	}
}

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const changePage = (page) => {
	return {
		type: CHANGE_PAGE,
		page
	}
}

export const CHANGE_DIALOG = 'CHANGE_DIALOG';
export const changeDialog = (dialog) => {
	return {
		type: CHANGE_DIALOG,
		dialog
	}
}

export const CLEAR_DIALOG = 'CLEAR_DIALOG';
export const clearDialog = () => {
	return {
		type: CLEAR_DIALOG,
	}
}

export const GO_BACK = 'GO_BACK';
export const goBack = () => {
	return {
		type: GO_BACK
	}
}

export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const toggleSearch = () => {
	return {
		type: TOGGLE_SEARCH
	}
}

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const toggleDrawer = () => {
	return {
		type: TOGGLE_DRAWER
	}
}

export const CHANGE_SEARCH_TERMS = 'CHANGE_SEARCH_TERMS';
export const changeSearchTerms = (terms) => {
	return {
		type: CHANGE_SEARCH_TERMS,
		terms
	}
}

export const CHANGE_SEARCH_MODE = 'CHANGE_SEARCH_MODE';
export const changeSearchMode = (mode) => {
	return {
		type: CHANGE_SEARCH_MODE,
		mode
	}
}

/*Search Actions*/
export const INVALIDATE_SEARCH = 'INVALIDATE_SEARCH';
export const invalidateSearch = () => {
	return {
		type: INVALIDATE_SEARCH
	}
}

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const requestSearch = () => {
	return {
		type: REQUEST_SEARCH
	}
}

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const receiveSearch = (terms, mode, data, time) => {
	return {
		type: RECEIVE_SEARCH,
		terms,
		mode,
		data,
		time
	}
}

export const searchFetch = (terms, mode) => {
	return (dispatch) => {
		let startTime = new Date().getTime(); //Start fetch time
		dispatch(invalidateSearch()); //Invalidate current search results
		dispatch(clearDialog());
		dispatch(changePage('searchResults')); //Change to results page
		dispatch(requestSearch()); //Flag isFetching
		axios({
			method: 'GET',
			url: '../php/search.php',
			params: {
				terms,
				mode
			},
			dataType: 'json'
		}).then(response => {
			let endTime = new Date().getTime();
			dispatch(receiveSearch(terms, mode, response.data, (endTime - startTime) + 'ms')); //Received Search Data
		}).catch(error => {
			console.log('Search Query Error - ' + error);
		})
	}
}

/*Song Info Actions*/
export const INVALIDATE_SONGINFO = 'INVALIDATE_SONGINFO';
export const invalidateSongInfo = () => {
	return {
		type: INVALIDATE_SONGINFO
	}
}

export const REQUEST_SONGINFO = 'REQUEST_SONGINFO';
export const requestSongInfo = () => {
	return {
		type: REQUEST_SONGINFO
	}
}

export const RECEIVE_SONGINFO = 'RECEIVE_SONGINFO';
export const receiveSongInfo = (data, time) => {
	return {
		type: RECEIVE_SONGINFO,
		data,
		time
	}
}

export const songInfoFetch = (songId) => {
	return (dispatch) => {
		let startTime = new Date().getTime();
		dispatch(invalidateSongInfo());
		dispatch(changePage('songInfo'));
		dispatch(requestSongInfo());
		axios({
			method: 'GET',
			url: '../php/songInfo.php',
			params: {
				songId
			},
			responseType: 'json',
			timeout: 5000
		}).then(response => {
			let endTime = new Date().getTime();
			dispatch(receiveSongInfo(response.data, (endTime - startTime) + 'ms'));
			//console.log('Song Info - Joysound API Response:');
			//console.log(response.data);
			//console.log('"'+ songId +'" Fetch Time: ' + (endTime - startTime) + 'ms');
		}).catch(error => {
			console.log('Song Info Query Error - ' + error);
		})
	}
}

export const createUser = (username, password, email) => {
	return (dispatch) => {
		let config = {
			responseType: 'json',
			timeout: 5000
		};

		axios.post(
			'../php/createAccount.php',
			'username=' + username + '&password=' + password + '&email=' + email,
			config
		).then(response => {
			let endTime = new Date().getTime();
			dispatch(updateLog('createAccount', response.data.log));
		}).catch(error => {
			console.log('Create Account Error: ' + error);
		})
	}
}

export const ADD_SONG_FAVORITE = 'ADD_SONG_FAVORITE';
export const addSongFavorite = (songData) => {
	return {
		type: ADD_SONG_FAVORITE,
		songData
	}
}

export const REMOVE_SONG_FAVORITE = 'REMOVE_SONG_FAVORITE';
export const removeSongFavorite = (naviGroupId) => {
	return {
		type: REMOVE_SONG_FAVORITE,
		naviGroupId
	}
}