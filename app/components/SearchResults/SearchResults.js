import React from 'react'
import {connect} from 'react-redux';

/*Components*/
import SongResult from './SongResult';
import ArtistResult from './ArtistResult';

/*Actions*/
import {
	songInfoFetch,
	addSongFavorite,
	removeSongFavorite
} from '../../actions/actions';

const mapStateToProps = (state) => {
	return {
		searchData: state.searchData,
		user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		songInfoFetch: (naviGroupId) => dispatch(songInfoFetch(naviGroupId)),
		addSongFavorite: (songData) => dispatch(addSongFavorite(songData)),
		removeSongFavorite: (naviGroupId) => dispatch(removeSongFavorite(naviGroupId))
	}
}

/*Material*/
import {List} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';

class SearchResults extends React.Component {
	constructor(props) {
		super(props)
	}

	resultsSwitch(results) {
		let {props} = this;
		switch (this.props.searchData.mode) {
				case 'song':
					return (
						results.map(function(elem, ind) {
							return (
								<SongResult 
									user={props.user}
									language={this} 
									data={elem} 
									key={ind} 
									songInfoFetch={props.songInfoFetch} 
									addSongFavorite={props.addSongFavorite}
									removeSongFavorite={props.removeSongFavorite}
								/>
							)
						}, this.props.language)
					)
				case 'artist':
					return (
						results.map(function(elem, ind) {
							return (<ArtistResult language={this} data={elem} key={ind} />)
						}, this.props.language)
					)
				case 'tieup':
				default:
			}
	}


	render() {
		let {language, mode, searchData} = this.props;
		if (searchData.isValid) {
			return (
				<List 
					style={{paddingTop: '0px'}} 
					children={this.resultsSwitch(searchData.data.results)}
				/>
			)
		} else {
			return (
				<div style={{height: 'calc(100vh - 128px)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
					<CircularProgress size={2} />
				</div>
			)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)

/*
						<List
							style={{paddingTop: '0px'}}
							children={
								searchData.data.results.map(function(elem, ind) {
									return (<SongResult language={this} data={elem} key={ind} />)
								}, language)
							}
						/>
						*/