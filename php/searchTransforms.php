<?php
class XmlElement {
  var $name;
  var $attributes;
  var $content;
  var $children;
};

$xml_to_object = function($xml) {
  $parser = xml_parser_create();
  xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0);
  xml_parser_set_option($parser, XML_OPTION_SKIP_WHITE, 1);
  xml_parse_into_struct($parser, $xml, $tags);
  xml_parser_free($parser);

  $elements = array();
  $stack = array();
  foreach ($tags as $tag) {
    $index = count($elements);
    if ($tag['type'] == "complete" || $tag['type'] == "open") {
      $elements[$index] = new XmlElement;
      $elements[$index]->name = $tag['tag'];
      $elements[$index]->attributes = $tag['attributes'];
      $elements[$index]->content = $tag['value'];
      if ($tag['type'] == "open") {  // push
        $elements[$index]->children = array();
        $stack[count($stack)] = &$elements;
        $elements = &$elements[$index]->children;
      }
    }
    if ($tag['type'] == "close") {
      $elements = &$stack[count($stack) - 1];
      unset($stack[count($stack) - 1]);
    }
  }
  return $elements[0];
};

$songArrayTransform = function($array) {
	return array_map(function($elem) {
		return array(
			'naviGroupId' => $elem['naviGroupId'],
			'songName' => $elem['songName'],
			'lyricist' => $elem['lyricist'],
			'composer' => $elem['composer'],
			'artistName' => $elem['artistName'],
			'artistId' => $elem['artistId'],
			'serviceTypeList' => array_filter(array_map(function($e) {
				return ($e['arrangeType'] === '') ? null : array('arrangeType' => $e['arrangeType'], 'serviceType' => $e['serviceType'], 'serviceSelSongNo' => $e['serviceSelSongNo']);
			}, $elem['serviceTypeList'])),
			'tieup' => (empty($elem['tieupList'])) ? '' : $elem['tieupList'][0]['tieupName'],
			'tieupId' => (empty($elem['tieupList'])) ? '' : $elem['tieupList'][0]['tieupId'],
			'songinfo' => (empty($elem['songinfoList'])) ? '' : $elem['songinfoList'][0]['detailDispName'],
			'songinfoId' => (empty($elem['songinfoList'])) ? '' : $elem['songinfoList'][0]['songInfoId'],
			'imageUrlSm' => (empty($elem['outsideUrlInfo']['amazonInfo'])) ? '' : $elem['outsideUrlInfo']['amazonInfo']['songImageUrlSmall'],
			'imageUrlLg' => (empty($elem['outsideUrlInfo']['amazonInfo'])) ? '' : $elem['outsideUrlInfo']['amazonInfo']['songImageUrlLarge']
		);
	}, $array);
};

$artistArrayTransform = function($array) {
	return array_map(function($elem) {
		return array(
			'artistName' => $elem['artistName'],
			'artistId' => $elem['artistId'],
			'imageUrlSm' => (empty($elem['outsideUrlInfo']['amazonInfo']['songImageUrlSmall'])) ? '' : $elem['outsideUrlInfo']['amazonInfo']['songImageUrlSmall'],
			'imageUrlLg' => (empty($elem['outsideUrlInfo']['amazonInfo']['songImageUrlLarge'])) ? '' : $elem['outsideUrlInfo']['amazonInfo']['songImageUrlLarge'],
			'officialUrl' => (empty($elem['outsideUrlInfo']['wikipediaInfo']['officialUrl'])) ? '' : $elem['outsideUrlInfo']['wikipediaInfo']['officialUrl']
		);
	}, $array);
};

$showArrayTransform = function($array) {
	return array_map(function($elem) {
		return array(
			'tieupName' => $elem['tieupName'],
			'tieupId' => $elem['tieupId']
		);
	}, $array);
};

$songInfoTransform = function($array) {
	return array(
		'naviGroupId' => $array['naviGroupId'],
		'songName' => $array['songName'],
		'artistName' => $array['artistInfo']['artistName'],
		'artistId' => $array['artistInfo']['artistId'],
		'lyricist' => $array['lyricist'],
		'composer' => $array['composer'],
		'tieup' => (empty($array['tieupList'])) ? '' : $array['tieupList'][0]['tieupName'],
		'tieupId' => (empty($array['tieupList'])) ? '' : $array['tieupList'][0]['tieupId'],
		'songinfo' => (empty($array['songinfoList'])) ? '' : $array['songinfoList'][0]['detailDispName'],
		'songinfoId' => (empty($array['songinfoList'])) ? '' : $array['songinfoList'][0]['songInfoId'],
		'imageUrlSm' => (empty($array['outsideUrlInfo']['amazonInfo']['songImageUrlSmall'])) ? '' : $array['outsideUrlInfo']['amazonInfo']['songImageUrlSmall'],
		'imageUrlLg' => (empty($array['outsideUrlInfo']['amazonInfo']['songImageUrlLarge'])) ? '' : $array['outsideUrlInfo']['amazonInfo']['songImageUrlLarge'],
		'genreList' => $array['genreList'],
		'albumList' => $array['albumList'],
		'joysoundAplList' => $array['aplList'][2]['selectionList'],
		'homeAplList' => $array['aplList'][3]['selectionList']
	);
};

?>

