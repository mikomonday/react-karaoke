import React from 'react';

/*Material*/
import {CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Lyrics = ({songName, artistName, lyrics, convertedLyrics}) => {
	return (
		<div>
			<CardTitle
				title={songName}
				subtitle={artistName}
			/>
			<CardText
				style={{whiteSpace: 'pre-wrap', fontSize: '20px'}}
			>
				<div dangerouslySetInnerHTML={{__html: convertedLyrics}} />
			</CardText>
			
		</div>
	);
}

export default Lyrics