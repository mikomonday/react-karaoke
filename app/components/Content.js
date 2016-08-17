import React from 'react';
import {connect} from 'react-redux';

/*Components*/
import CreateAccount from './Account/CreateAccount';
import SearchApplet from './searchapplet/SearchApplet';
import Home from './Home/Home';
import SearchResults from './SearchResults/SearchResults';
import SongInfo from './SongInfo/SongInfo';

/*Actions*/
import {
	clearDialog,
	createUser
} from '../actions/actions';

const mapStateToProps = (state) => {
	return {
		session: state.session,
		language: state.language,
		logs: state.logs
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clearDialog: () => dispatch(clearDialog()),
		createUser: (username, password, email) => dispatch(createUser(username, password, email)),
	}
}

class Content extends React.Component {
	constructor(props) {
		super(props)
	}

	handlePage(page) {
		switch (page) {
			case 'home':
				return <Home language={this.props.language} />
			case 'searchResults':
				return <SearchResults language={this.props.language} />
			case 'songInfo':
				return <SongInfo language={this.props.language} />
			default:
				return <Home />
		}
	}

	render() {
		return (
			<div>
	      <SearchApplet dialog={this.props.session.dialog} clearDialog={this.props.clearDialog} language={this.props.language} />
	      <CreateAccount dialog={this.props.session.dialog} clearDialog={this.props.clearDialog} language={this.props.language} logs={this.props.logs} createUser={this.props.createUser} />
				{this.handlePage(this.props.session.page)}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)