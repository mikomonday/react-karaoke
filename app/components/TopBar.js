import React from 'react';
import {connect} from 'react-redux';

import {
	toggleDrawer,
	changeDialog,
	clearDialog
} from '../actions/actions';

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDrawer: () => dispatch(toggleDrawer()),
		changeDialog: (dialog) => dispatch(changeDialog(dialog)),
		clearDialog: () => dispatch(clearDialog())
	}
}

/*Material*/
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

/*Styles*/
const styles = {
	toolBar: {
		justifyContent: 'space-between'
	},
	rightGroup: {
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	leftGroup: {
		alignItems: 'center'
	},
	icon: {
		height: '100%',
		width: '100%',
	}
}

class TopBar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<AppBar
				title="react-karaoke"
				iconElementLeft={
					<IconButton 
						iconClassName="material-icons"
						onTouchTap={() => this.props.toggleDrawer()}
					>
						menu
					</IconButton>
				}
					
				iconElementRight={
					<IconButton 
		    		iconClassName="material-icons" 
		    		tooltip="Search"
		    		onTouchTap={() => this.props.changeDialog('search')}
		    	>
		    		search
		    	</IconButton>
		    }
		  />
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)