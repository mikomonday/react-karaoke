import React from 'react';

/*Components*/
import lang from '../../utils/lang';
import {arrangeType} from '../../utils/constants';

/*Material*/
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

const CodesTab = ({songName, homeAplList, joysoundAplList, language}) => {
	return (
		<List>
			<Subheader>{lang[language].songInfo.joysound}</Subheader>
			{/*aplList last element collection of all codes, slice out*/}
			{joysoundAplList.slice(0,-1).map((elem) => {
				return (
					<ListItem
						key={elem.serviceTypeList[0].arrangeType}
						primaryText={songName + ((elem.serviceTypeList[0].arrangeType == '0') ? '' : '「' + arrangeType[elem.serviceTypeList[0].arrangeType][language] + '」')}
						secondaryText={elem.serviceTypeList[0].serviceSelSongNo}
						leftAvatar={<Avatar icon={<FontIcon className='material-icons'>{arrangeType[elem.serviceTypeList[0].arrangeType].icon}</FontIcon>} />}
					/>
				)
			})}

			<div hidden={homeAplList.length == 0}>
				<Subheader>{lang[language].songInfo.home}</Subheader>
				<ListItem
					key={(homeAplList.length == 0) ? null : homeAplList[0].serviceTypeList[0].arrangeType}
					primaryText={songName}
					secondaryText={(homeAplList.length == 0) ? null : homeAplList[0].serviceTypeList[0].serviceSelSongNo}
					leftAvatar={<Avatar icon={<FontIcon className='material-icons'>home</FontIcon>} />}
				/>
			</div>
		</List>
	);
}

export default CodesTab