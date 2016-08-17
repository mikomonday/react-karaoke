<?php
require('searchTransforms.php');

$searchTerm = $_GET['terms'];
$searchType = $_GET['mode'];
$resultsFormat = '';
$resultsMatch = 'partial'; //front for lyrics
$resultsKey = '';
$transformFunction = null;


if ((isset($_GET['terms']) && (isset($_GET['mode'])))) {
	switch ($_GET['mode']) {
		case 'compound':
			$resultsFormat = 'group';
			$resultsKey = ''; //Find this out later
			break;
		case 'artist':
			$resultsFormat = 'artist';
			$resultsKey = 'artistList';
			$transformFunction = $artistArrayTransform;
			break;
		case 'tieup':
			$resultsFormat = 'tieup';
			$resultsKey = 'tieupList';
			$transformFunction = $showArrayTransform;
			break;
		case 'song':
			$resultsFormat = 'all';
			$resultsKey = 'contentsList';
			$transformFunction = $songArrayTransform;
			break;
		default:
			$resultsFormat = 'all';
			$resultsKey = ''; //Find this out later
			break;
	}

	$output = array();
	$ch = curl_init();
	$url = 'https://mspxy.joysound.com/Common/ContentsList';
	
	$default = array(
		CURLOPT_URL => $url,
		CURLOPT_POST => true,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_SSL_VERIFYPEER => false,
		CURLOPT_HTTPHEADER => array(
			'Content-type: application/x-www-form-urlencoded;charset=UTF-8',
			'Origin: https://www.joysound.com',
			'X-JSP-APP-NAME: 0000800'
		),
		CURLOPT_TIMEOUT_MS => 5000
	);

	$infoRequest = array(
		CURLOPT_POSTFIELDS => http_build_query(array(
			'format' => 'group',
			'kind1' => 'compound',
			'word1' => $searchTerm,
			'match1' => 'partial',
			'kindCnt' => '1',
			'count' => '0',
			'apiVer' => '1.0'
		))
	);

	$queryRequest = array(
		CURLOPT_POSTFIELDS => http_build_query(array(
			'format' => $resultsFormat,
			'kindCnt' => '1',
			'kind1' => $searchType,
			'word1' => $searchTerm,
			'match1' => $resultsMatch,
			'start' => 1,
			'count' => 20,
			'sort' => 'popular',
			'order' => 'desc',
			'apiVer' => '1.0'
		))
	);

	/*Info Request cURL
	curl_setopt_array($ch, ($infoRequest + $default));

	if (curl_error($ch)) {
		$output['fetchLog']['info'] = curl_error($ch);
	} else {
		$result = json_decode(curl_exec($ch), true);

		$output['fetchLog']['info'] = 'success';
		$output['hits']['artistHits'] = $result['artistHitCount'];
		$output['hits']['songHits'] =  $result['contentsHitCount'];
		$output['hits']['showHits'] = $result['tieupHitCount'];
	}
	*/
	
	//Search Term Request cURL
	curl_setopt_array($ch, ($queryRequest + $default));

	if (curl_error($ch)) {
		$output['fetchLog']['query'] = curl_error($ch);
	} else {
		$results = json_decode(curl_exec($ch), true);

		$output['fetchLog']['query'] = 'success';
		$output['results'] = $transformFunction($results[$resultsKey]);
	}

	curl_close($ch);
	echo json_encode($output);
}


/*
start:1
count:20
format:all
kindCnt:2
order:desc
kind1:selGenre
word1:10000002
match1:exact
kind2:selArrange
word2:0
match2:exact
serviceStartDateFrom:20160626000000
serviceStartDateTo:20160820235959
sort:ServicePublishDate
apiVer:1.0
*/


?>