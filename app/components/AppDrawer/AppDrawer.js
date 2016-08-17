import React from 'react';
import {connect} from 'react-redux';

/*Components*/
import Image from '../Image';

/*Actions*/
import {
	toggleDrawer,
  changePage
} from '../../actions/actions';

const mapStateToProps = (state) => {
	return {
		open: state.drawer,
    user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDrawer: () => dispatch(toggleDrawer()),
    changePage: (page) => dispatch(changePage(page))
	}
}

/*Material*/
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {CardHeader, CardMedia} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Drawer
        open={this.props.open}
        docked={false}
        onRequestChange={() => this.props.toggleDrawer()}
      >
    		<Avatar
      		style={{position: 'absolute', margin: '23px 0px 0px 16px', height: '60px', width: '60px', zIndex: '99'}}
      		icon={<FontIcon className="material-icons">person</FontIcon>}
      	/>
      	<CardMedia
      		style={{height: '150px'}}
      		overlayContentStyle={{background: 'rgba(0, 0, 0, 0)'}}
      		overlay={<CardHeader title={this.props.user.name} subtitle={this.props.user.userType} />}
      	>
  				<Image height={'150px'} mode={'fill'} src='https://d13yacurqjgara.cloudfront.net/users/106596/screenshots/2269537/thumbnail-materialdesign_1x.jpg' />
      	</CardMedia>
  			
  			<Divider />

        <MenuItem 
          leftIcon={<FontIcon className="material-icons">home</FontIcon>}
          onTouchTap={() => this.props.changePage('home')}
        >
          Home
        </MenuItem>

        <MenuItem leftIcon={<FontIcon className="material-icons">music_note</FontIcon>}>My Songs</MenuItem>
        <MenuItem leftIcon={<FontIcon className="material-icons">people</FontIcon>}>My Artists</MenuItem>
        <MenuItem leftIcon={<FontIcon className="material-icons">queue_music</FontIcon>}>My Playlists</MenuItem>

        <Divider />
        
        <MenuItem leftIcon={<FontIcon className="material-icons">settings</FontIcon>}>Settings</MenuItem>
        <MenuItem leftIcon={<FontIcon className="material-icons">help</FontIcon>}>Help</MenuItem>
        <MenuItem leftIcon={<FontIcon className="material-icons">feedback</FontIcon>}>Feedback</MenuItem>


      </Drawer>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer)