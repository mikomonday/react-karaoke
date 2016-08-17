import React from 'react';
import {arrangeType} from '../../utils/constants';

/*Components*/
import lang from '../../utils/lang';

/*Material*/
import {ListItem} from 'material-ui/List';
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

/*Styles*/
const styles = {
	//Overwrite Popover styles
	popover: {
		width: '100%',
		maxWidth: '600px'
	},
	//Overwrite Divider styles
	divider: {
		width: '80%',
		marginTop: '1%',
		marginBottom: '1%',
		marginLeft: '10%'
	},
	chipIcon: {
		backgroundColor: ''
	},
	chip: {
		margin: '4px'
	},
	chipWrapper: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	//Overwrite CardText padding
	detailsText: {
		paddingTop: '1%',
		paddingBottom: '1%'
	},
	detailsWrapper: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	}
}

class SongResult extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			anchorEl: {}
		};
	}

	handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
  	event.preventDefault();

    this.setState({
      open: false,
    });
  }

  filterFavorites(naviGroupId, favSongArr) {
  	return favSongArr.some((elem) => elem.naviGroupId === naviGroupId)
  }

  render() {
  	let {
  		naviGroupId,
  		songName,
  		lyricist,
  		composer,
  		artistName,
  		artistId,
  		serviceTypeList,
  		tieup,
  		tieupId,
  		songinfo,
  		songinfoId,
  		imageUrlSm
  	} = this.props.data;
  	let language = this.props.language;

  	return (
  		<div>
				<ListItem
					onTouchTap={this.handleTouchTap.bind(this)}
					primaryText={songName}
					secondaryText={artistName}
					leftAvatar={(imageUrlSm == '') ? <Avatar>♪</Avatar>　: <Avatar src={imageUrlSm} />}
					rightIconButton={(this.filterFavorites(naviGroupId, this.props.user.favSongs)) ? 
						<IconButton
							iconClassName="material-icons" 
							onTouchTap={() => {this.props.removeSongFavorite(naviGroupId); console.log(this.props.user.favSongs)}}
						>
							{'star'}
						</IconButton>
						:
						<IconButton
							iconClassName="material-icons" 
							onTouchTap={() => {this.props.addSongFavorite(this.props.data); console.log(this.props.user.favSongs)}}
						>
							{'star_border'}
						</IconButton>
					}
				/>
				<Divider />
				<Popover
					style={styles.popover}
					open={this.state.open && (serviceTypeList.length != 0)}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{vertical: 'top', horizontal: 'left'}}
					targetOrigin={{vertical: 'top', horizontal: 'left'}}
					useLayerForClickAway={true}
					onRequestClose={this.handleRequestClose.bind(this)}
				>
					<Card className="songResult-songcard">
						<CardHeader 
								title={songName} 
								subtitle={artistName}
								avatar={(imageUrlSm == '') ? <Avatar>♪</Avatar>　: <Avatar src={imageUrlSm} />}

						/>

						<CardText
							hidden={(tieup == '') && (songinfo == '')}
						>
					 		<div><span style={{fontWeight: 'bold', wordWrap: 'normal'}}>{tieup}</span></div>
					 		<div><span style={{wordWrap: 'normal'}}>{songinfo}</span></div>
					 	</CardText>

						<Divider style={styles.divider} />

						<CardText
							className="songResult-songcodes" 
							style={styles.chipWrapper}
							children={serviceTypeList.map((elem) => {
								return (
									<Chip className="songResult-chip" style={styles.chip} key={elem.serviceSelSongNo}>
										<Avatar icon={<FontIcon className="material-icons">{arrangeType[elem.arrangeType].icon}</FontIcon>} /> 
										{arrangeType[elem.arrangeType].subtext + ': ' + elem.serviceSelSongNo}
									</Chip>
								)
							})} 
						/>

						<CardActions style={{textAlign: 'right' }}>
							<RaisedButton 
								label={lang[language].searchResults.moreInfo}
								onTouchTap={() => this.props.songInfoFetch(naviGroupId)}
							/>
						</CardActions>
					</Card>

				</Popover>
			</div>
  	)
  }
}

export default SongResult