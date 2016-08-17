import React from 'react';
import {connect} from 'react-redux';

/*Components*/
import lang from '../../utils/lang';
import {arrangeType} from '../../utils/constants';
import InfoTab from './InfoTab';
import CodesTab from './CodesTab';
import Lyrics from './Lyrics';

/*Actions*/
import {
	changePage
} from '../../actions/actions';

const mapStateToProps = (state) => {
	return {
		songInfo: state.songInfo
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		returnToSearch: () => dispatch(changePage('searchResults'))
	}
}

/*Material*/
import {Tabs, Tab} from 'material-ui/Tabs';
import CircularProgress from 'material-ui/CircularProgress';
import IconButton from 'material-ui/IconButton';

class SongInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tabState: 'info'
		};
	}

	tabChange(value) {
    this.setState({
      tabState: value,
    });
  };

  contentSwitch(value) {
  	switch (value) {
			case 'info':
				return (
					<InfoTab {...this.props.songInfo.data.results} language={this.props.language} />
				);

			case 'codes':
				return (
					<CodesTab
						songName={this.props.songInfo.data.results.songName}
						joysoundAplList={this.props.songInfo.data.results.joysoundAplList} 
						homeAplList={this.props.songInfo.data.results.homeAplList}
						language={this.props.language} 
					/>
				)

			case 'lyrics':
				return (
					<Lyrics 
						songName={this.props.songInfo.data.results.songName}
						artistName={this.props.songInfo.data.results.artistName}
						lyrics={this.props.songInfo.data.results.lyrics}
						convertedLyrics={this.props.songInfo.data.results.convertedLyrics}
					/>
				)

			default:
				return (
					<InfoTab {...this.props.songInfo.data.results} language={this.props.language} />
				)
		}
  }

	render() {
		let {songInfo, language, returnToSearch} = this.props;
		return (
			<div>
				<div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#00BCD4'}}>
					<IconButton
						id="songInfo-backbutton"
						onTouchTap={() => returnToSearch()}
						iconClassName="material-icons"
					>
						arrow_back
					</IconButton>

					<Tabs 
						style={{width: '75%'}}
						value={this.state.value}
						open={this.state.tabState}
						onChange={(value) => this.tabChange(value)}
					>
						<Tab
							label={lang[language].songInfo.info}
							value="info"
						/>
						<Tab
							label={lang[language].songInfo.codes}
							value="codes"
						/>
						
						<Tab
							label={lang[language].songInfo.lyrics}
							value="lyrics"
						/>
					</Tabs>

					<IconButton
						id="songInfo-morebutton"
						onTouchTap={() => null}
						iconClassName="material-icons"
					>
						more_vert
					</IconButton>
				</div>
				{(songInfo.isValid) ? this.contentSwitch(this.state.tabState) : <div style={{height: 'calc(100vh - 224px)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><CircularProgress size={2} /></div>}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SongInfo)

