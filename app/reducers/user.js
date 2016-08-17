import {
	ADD_SONG_FAVORITE,
	REMOVE_SONG_FAVORITE
} from '../actions/actions';

const user = (state = {
	name: 'Account Name',
	userType: 'User',
	favSongs: [],
	favArtists: [],
	playlists: [],
	settings: {}
}, action) => {
	switch (action.type) {

		case ADD_SONG_FAVORITE:
			return {
				...state,
				favSongs: [
					...state.favSongs,
					action.songData
				]
			}

		case REMOVE_SONG_FAVORITE:
			let target = state.favSongs.findIndex((elem) => elem.naviGroupId === action.naviGroupId);
			return {
				...state,
				favSongs: [
					...state.favSongs.slice(0, target),
					...state.favSongs.slice(target + 1)
				]
			}
		default:
			return state
	}
}

export default user