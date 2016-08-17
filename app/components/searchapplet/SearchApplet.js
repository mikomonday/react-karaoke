import React from 'react';
import {connect} from 'react-redux';

/*Components*/
import lang from '../../utils/lang';

/*Actions*/
import {
	changeSearchTerms,
	changeSearchMode,
	searchFetch
} from '../../actions/actions';

const mapStateToProps = (state) => {
	return {
		language: state.language,
		searchBar: state.searchBar
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeTerms: (terms) => dispatch(changeSearchTerms(terms)),
		changeMode: (mode) => dispatch(changeSearchMode(mode)),
		searchFetch: (terms, mode) => dispatch(searchFetch(terms, mode))
	}
}

/*Material*/
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

/*Style*/
const styles = {
	modeField: {
		top: '2px'
	},
}

class SearchApplet extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(terms, mode) {
		this.props.changeTerms(terms);
		this.props.searchFetch(terms, mode);
	}

	render() {
		let {searchBar, language} = this.props;
		return (
			<Dialog
				id="searchapplet"
				modal={true}
				autoDetectWindowHeight={false}
				title={lang[language].searchApplet.title}
				open={this.props.dialog == 'search'}
				actions={
					<div>
						<FlatButton
							id="searchapplet-cancelbutton"
							label={lang[language].searchApplet.cancel}
							onTouchTap={() => this.props.clearDialog()}
						/>
						<FlatButton
							id="searchapplet-submitbutton"
							label={lang[language].searchApplet.submit}
							primary={true}
							onTouchTap={() => this.handleSubmit(document.getElementById('searchapplet-keywordfield').value, searchBar.mode) /*callemall/material-ui/issues/3394*/}
						/>
					</div>
				}
			>
			<TextField
					id="searchapplet-keywordfield"
					floatingLabelText={lang[language].searchApplet.searchField}
				/>
				<SelectField
					id="searchapplet-modefield"
					autoWidth={false}
					value={searchBar.mode}
					onChange={(e, i, value) => this.props.changeMode(value)}
					style={styles.modeSelectField}
				>
					<MenuItem value={'compound'} primaryText={lang[language].searchApplet.compound} />
					<MenuItem value={'song'} primaryText={lang[language].searchApplet.song} />
					<MenuItem value={'artist'} primaryText={lang[language].searchApplet.artist} />
					<MenuItem value={'tieup'} primaryText={lang[language].searchApplet.tieup} />
				</SelectField>
			</Dialog>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchApplet)