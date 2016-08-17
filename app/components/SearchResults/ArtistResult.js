import React from 'react';
import {arrangeType} from '../../utils/constants';

/*Components*/
import lang from '../../utils/lang';

/*Material*/
import {ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

class ArtistResult extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			anchorEl: {}
		};
	}

  render() {
  	let {
  		artistName,
  		artistId
  	} = this.props.data;
  	let language = this.props.language;

  	return (
			<ListItem
				primaryText={artistName}
				secondaryText={' '}
				rightIcon={<FontIcon className="material-icons">navigate_next</FontIcon>}
			/>
		)
  }
}

export default ArtistResult

/*

  	return (
  		<div>
				<ListItem
					onTouchTap={this.handleTouchTap.bind(this)}
					primaryText={songName}
					secondaryText={artistName}
					leftAvatar={(imageUrlSm == '') ? <Avatar>♪</Avatar>　: <Avatar src={imageUrlSm} />}
					rightIconButton={
						<IconMenu
							iconButtonElement={
								<IconButton
									iconClassName="material-icons" 
									tooltip={lang[language].searchResults.actions}
									
								>
									more_horiz
								</IconButton>
							}
							useLayerForClickAway={true}
							anchorOrigin={{vertical: 'center', horizontal: 'left'}}
							targetOrigin={{vertical: 'top', horizontal: 'right'}}
						>
							<MenuItem primaryText="Search Artist" />
						</IconMenu>
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
								onTouchTap={() => songInfoFetch(naviGroupId)}
							/>
						</CardActions>
					</Card>

				</Popover>
			</div>
  	)

 */