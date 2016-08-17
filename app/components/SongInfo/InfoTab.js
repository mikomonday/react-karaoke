import React from 'react';

/*Components*/
import lang from '../../utils/lang';

/*Material*/
import {CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Image from '../Image';

const InfoTab = ({songName, artistName, imageUrlLg, tieup, songinfo, lyricist, composer, genreList, language}) => {
	return (
		<div>
			<CardMedia
				overlay={<CardTitle title={songName} subtitle={artistName} />}
			>
				<Image height={'100vw'} src={imageUrlLg} mode={'fill'} />
			</CardMedia>
			
			<CardHeader
				hidden={(tieup == '' && songinfo == '') ? true : false}
				title={(tieup == '') ? songinfo : tieup}
				titleStyle={{fontWeight: 'bold'}}
				subtitle={songinfo}
			/>

			<CardText style={{paddingTop: '0px'}}>
				<div hidden={(lyricist == '')}>{lang[language].songInfo.lyricist + ': ' + lyricist}</div>
				<div hidden={(composer == '')}>{lang[language].songInfo.composer + ': ' + composer}</div>
				<div hidden={(genreList.length == 0)}>{lang[language].songInfo.genre + ': ' + genreList.map((element) => element.genreName).join(' ・ ')}</div>
			</CardText>
		</div>
	);
}

export default InfoTab