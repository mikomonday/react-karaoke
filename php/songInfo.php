<?php
require('searchTransforms.php');

$songId = $_GET['songId'];

if (isset($_GET['songId'])) {
	$output = array();
	$ch = curl_init();

	$detailsRequest = array(
		CURLOPT_URL => 'https://mspxy.joysound.com/Common/ContentsDetail',
		CURLOPT_POST => true,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_SSL_VERIFYPEER => false,
		CURLOPT_HTTPHEADER => array(
			'Content-type: application/x-www-form-urlencoded;charset=UTF-8',
			'Origin: https://www.joysound.com',
			'X-JSP-APP-NAME: 0000800'
		),
		CURLOPT_POSTFIELDS => http_build_query(array(
			'kind' => 'naviGroupId',
			'selSongNo' => $songId,
			'interactionFlg' => 0,
			'apiVer' => '1.0'
		)),
		CURLOPT_TIMEOUT_MS => 5000
	);

	$lyricsRequest = array(
		CURLOPT_URL => 'https://mspxy.joysound.com/Common/Lyric',
		CURLOPT_POST => true,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_SSL_VERIFYPEER => false,
		CURLOPT_HTTPHEADER => array(
			'Content-type: application/x-www-form-urlencoded;charset=UTF-8',
			'Origin: https://www.joysound.com',
			'X-JSP-APP-NAME: 0000800'
		),
		CURLOPT_POSTFIELDS => http_build_query(array(
			'kind' => 'naviGroupId',
			'selSongNo' => $songId,
			'interactionFlg' => 0,
			'apiVer' => '1.0'
		)),
		CURLOPT_TIMEOUT_MS => 5000
	);
	
	curl_setopt_array($ch, $detailsRequest);

	if (curl_error($ch)) {
		$output['fetchLog']['details'] = curl_error($ch);
	} else {
		$result = json_decode(curl_exec($ch), true);
		
		$output['fetchLog']['details'] = 'success';
		$output['results'] = $songInfoTransform($result);
	}

	curl_setopt_array($ch, $lyricsRequest);

	if (curl_error($ch)) {
		$output['fetchLog']['lyrics'] = curl_error($ch);
	} else {
		$result = json_decode(curl_exec($ch), true);

		$output['fetchLog']['lyrics'] = 'success';
		$output['results']['lyrics'] = $result['lyricList'][0]['lyric'];
	}

	/*Yahoo API*/
	if ($output['results']['lyrics'] != '') {
		$appId = 'dj0zaiZpPU42MTdKT2dvYVFVaCZzPWNvbnN1bWVyc2VjcmV0Jng9YWU-'; //Your AppId
		$grade = '2'; //Grade level to omit simple kanji
		$sentence = urlencode($output['results']['lyrics']); //Encode to URL entities
		
		$convertRequest = array(
			CURLOPT_URL => ('http://jlp.yahooapis.jp/FuriganaService/V1/furigana?appid=' . $appId . '&grade=' . $grade . '&sentence=' . $sentence),
			CURLOPT_POST => false,
			CURLOPT_CUSTOMREQUEST => 'GET',
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_USERAGENT => $appId,
			CURLOPT_TIMEOUT_MS => 5000
		);

		curl_setopt_array($ch, $convertRequest);

		if (curl_error($ch)) {
			$output['fetchLog']['convert'] = curl_error($ch);
		} else {
			$resultXml = curl_exec($ch);

			$output['fetchLog']['convert'] = 'success';
			$jsonXml = json_decode(json_encode(simplexml_load_string($resultXml, "SimpleXMLElement", LIBXML_NOCDATA)),TRUE)['Result']['WordList']['Word'];
			
			$output['results']['convertedLyrics'] = array_reduce($jsonXml, function($carry, $elem) {
				if (is_array($elem['Surface'])) {
					return $carry .= $elem['Surface'][0];
				} else if (array_key_exists('Furigana', $elem)) {
					return $carry .= '<ruby>' . $elem['Surface'] . '<rt>' . $elem['Furigana'] . '</rt>' . '</ruby>';
				} else {
					return $carry .= $elem['Surface'];	
				}
			}, '');
		}
	} else {
		$output['results']['convertedLyrics'] = [];
	}

	curl_close($ch);
	echo json_encode($output);
}
?>