/*Regex*/
export const regex ={
	usernameRegex: /^[a-z0-9_-]{3,16}$/,
	passwordRegex: /^.{6,20}$/,
	strictpasswordRegex: /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,20}$/,
	emailRegex: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
}


export const ApplicationId = {
  kashi: '0000100',
  navi: '0000200',
  plus: '0000300',
  joysound: '0000800',
  home: '0000900'
};


export const serviceType = {
	'001000000': '業務用カラオケ',
	'100000000': '家庭用カラオケ',
	'003000101': 'デジ歌詞 歌詞フリガナ無し',
	'003000901': '',
	'003000902': '',
	'003000903': '',
	'003000904': '',
	'003000905': '',
	'003000910': '',
	'003000911': '',
	'003000951': '',
	'003000952': '',
	'003000953': ''
};

export const modelType = {
	T: 'JOYSOUND MAX',
	Q: 'JOYSOUND F1',
	N: 'CROSSO',
	P: 'HyperJoyWave',
	J: 'HyperJoyWave',
	U: 'JOYSOUND 響',
	R: 'JOYSOUND fR',
	M: 'JEWEL',
	G: 'HyperJoyV2',
	H: 'CelebJoyHearts',
	S: 'JOYSOUND FESTA',
	K: 'JOYSOUND WAGON',
	I: 'EnjoyStage/Portable'
};

export const arrangeType = {
	'0': {
		name: 'スタンダード',
		icon: 'music_note',
		en: '',
		jp: '',
	},
	'1': {
		name: '本人映像',
		icon: 'theaters',
		subtext: '映像',
		en: 'Original Video',
		jp: '本人映像',
	},
	'2': {
		name: 'アニメカラオケ',
		icon: 'music_note',
		subtext: 'アニカラ',
		en: 'Anime Karaoke',
		jp: 'アニメカラオケ',
	},
	'3': {
		name: 'ライブカラオケ',
		icon: 'mic',
		subtext: 'ライブカラ',
		en: 'Live Karaoke',
		jp: 'ライブカラオケ',
	},
	'4': {
		name: 'NHKみんなのうた映像',
		icon: 'public',
		subtext: 'NHK皆の歌映像',
		en: 'NHK Minna no Uta',
		jp: 'NHK皆の歌映像',
	},
	'5': {
		name: 'スゴオト(生音)',
		icon: 'whatshot',
		subtext: 'スゴオト',
		en: 'SUGO OTO',
		jp: 'スゴオト(生音)',
	},
	'6': {
		name: 'おゆうぎカラオケ',
		icon: 'child_care',
		subtext: 'おゆうぎ',
		en: 'Childrens Ver.',
		jp: 'おゆうぎカラオケ',
	},
	'7': {
		name: '本人歌唱映像',
		icon: 'person',
		subtext: '本人歌唄',
		en: 'Live Performance',
		jp: '本人歌唱映像',
	},
	'8': {
		name: 'アニメ映像',
		icon: 'theaters',
		subtext: 'アニ映像',
		en: 'Anime Video',
		jp: 'アニ映像',
	},
	'9': {
		name: 'ライブ映像',
		icon: 'theaters',
		subtext: 'ライブ映像',
		en: 'Live Video',
		jp: 'ライブ映像',
	},
	'10': {
		name: 'ガイドボーカル',
		icon: 'supervisor_account',
		subtext: 'ガイドボーカル',
		en: 'Guide Vocal',
		jp: 'ガイドボーカル',
	},
	'11': {
		name: 'SHOW劇クリップ',
		icon: 'subtitles',
		subtext: 'SHOW劇',
		en: 'Lyric Clips',
		jp: 'SHOW劇クリップ',
	},
	'12': {
		name: '歌唱指導（enjoy lesson）',
		icon: 'school',
		subtext: '歌唱指導',
		en: 'Song Training',
		jp: '歌唱指導（enjoy lesson）',
	},
	'13': {
		name: 'パラパラ振り付き映像',
		icon: 'directions_run',
		subtext: 'パラパラ映像',
		en: 'Dance Along Video',
		jp: 'パラパラ振り付き映像',
	},
	'14': {
		name: 'パラパラ振り付きカラオケ',
		icon: 'directions_run',
		subtext: 'パラパラカラ',
		en: 'Dance Along',
		jp: 'パラパラ振り付きカラオケ',
	},
	'15': {
		name: 'うたいり',
		icon: 'music_note',
		subtext: '',
		en: 'Vocal On',
		jp: 'うたいり',
	},
	'16': {
		name: 'アカペラ',
		icon: 'record_voice_over',
		subtext: '',
		en: 'Acapella',
		jp: 'アカペラ',
	},
	'17': {
		name: '男性ボーカル入り',
		icon: 'wc',
		subtext: '男性ボーカル',
		en: 'Male Vocal On',
		jp: '男性ボーカル入り',
	},
	'18': {
		name: '女性ボーカル入り',
		icon: 'wc',
		subtext: '女性ボーカル',
		en: 'Female Vocal On',
		jp: '女性ボーカル入り',
	},
	'19': {
		name: '生演奏',
		icon: 'record_voice_over',
		subtext: '生演奏',
		en: 'Live Performance',
		jp: '生演奏',
	},
	'20': {
		name: 'UGA本人映像',
		icon: 'theaters',
		subtext: 'UGA映像',
		en: 'UGA Video',
		jp: 'UGA本人映像',
	},
	'21': {
		name: 'UGAスタンダード',
		icon: 'music_note',
		subtext: 'UGA普通',
		en: 'UGA',
		jp: 'UGAスタンダード',
	},
	'22': {
		name: 'ギタナビ', //WORK ON
		icon: 'music_note',
		subtext: 'ギタナビ',
		en: 'GitaNabi',
		jp: 'ギタナビ',
	},
	'23': {
		name: 'ハモリデラックス',
		icon: '',
		subtext: '',
		en: 'Chorus Ver.',
		jp: 'ハモリデラックス',
	},
	'24': {
		name: '特撮カラオケ',
		icon: '',
		subtext: '',
		en: 'Tokusatsu Ver.',
		jp: '特撮カラオケ',
	},
	'25': {
		name: 'レコおと',
		icon: '',
		subtext: '',
		en: 'Original Record',
		jp: 'レコおと',
	},
	'26': {
		name: 'オリジナル映像《教則》',
		icon: '',
		subtext: '',
		en: 'Original Video',
		jp: 'オリジナル映像《教則》',
	},
	'27': {
		name: 'オリジナル映像',
		icon: '',
		subtext: 'Original Video',
		en: 'Original Video',
		jp: 'オリジナル映像',
	},
	'28': {
		name: 'ボーカルアシスト',
		icon: 'group_add',
		subtext: 'ボーカルアシスト',
		en: 'Vocal Assist',
		jp: 'ボーカルアシスト',
	},
	'29': {
		name: 'Mポスト',
		icon: '',
		subtext: '',
		en: 'Music Post',
		jp: 'Mポスト',
	},
	'30': {
		name: 'オートボーカルエフェクト',
		icon: '',
		subtext: '',
		en: '',
		jp: 'オートボーカルエフェクト',
	},
	100: {
		name: 'オリジナルアレンジ',
	},
	101: {
		name: 'オリジナルアレンジ',
	},
	102: {
		name: 'オリジナルアレンジ',
	},
	103: {
		name: 'オリジナルアレンジ',
	},
	104: {
		name: 'オリジナルアレンジ',
	},
	105: {
		name: 'オリジナルアレンジ',
	},
	106: {
		name: 'オリジナルアレンジ',
	},
	107: {
		name: 'オリジナルアレンジ',
	},
	108: {
		name: 'オリジナルアレンジ',
	},
	109: {
		name: 'オリジナルアレンジ',
	},
	110: {
		name: 'オリジナルアレンジ',
	},
	111: {
		name: 'オリジナルアレンジ',
	},
	112: {
		name: 'オリジナルアレンジ',
	},
	113: {
		name: 'オリジナルアレンジ',
	},
	114: {
		name: 'オリジナルアレンジ',
	},
	115: {
		name: 'オリジナルアレンジ',
	},
	116: {
		name: 'オリジナルアレンジ',
	},
	117: {
		name: 'オリジナルアレンジ',
	},
	118: {
		name: 'オリジナルアレンジ',
	},
	119: {
		name: 'オリジナルアレンジ',
	},
	120: {
		name: 'オリジナルアレンジ',
	},
	121: {
		name: 'オリジナルアレンジ',
	},
	122: {
		name: 'オリジナルアレンジ',
	},
	123: {
		name: 'オリジナルアレンジ',
	},
	124: {
		name: 'オリジナルアレンジ',
	},
	125: {
		name: 'オリジナルアレンジ',
	},
	126: {
		name: 'オリジナルアレンジ',
	},
	127: {
		name: 'オリジナルアレンジ',
	},
	128: {
		name: 'オリジナルアレンジ'
	}
}

export const oldarrangeType = {
	0: 'スタンダード',
	1: '本人映像',
	2: 'アニメカラオケ',
	3: 'ライブカラオケ',
	4: 'NHKみんなのうた映像',
	5: 'スゴオト(生音)',
	6: 'おゆうぎカラオケ',
	7: '本人歌唱映像',
	8: 'アニメ映像',
	9: 'ライブ映像',
	10: 'ガイドボーカル',
	11: 'SHOW劇クリップ',
	12: '歌唱指導（enjoy lesson）',
	13: 'パラパラ振り付き映像',
	14: 'パラパラ振り付きカラオケ',
	15: 'うたいり',
	16: 'アカペラ',
	17: '男性ボーカル入り',
	18: '女性ボーカル入り',
	19: '生演奏',
	20: 'UGA本人映像',
	21: 'UGAスタンダード',
	22: 'ギタナビ',
	23: 'ハモリデラックス',
	24: '特撮カラオケ',
	25: 'レコおと',
	26: 'オリジナル映像《教則》',
	27: 'オリジナル映像',
	28: 'ボーカルアシスト',
	29: 'Mポスト',
	30: 'オートボーカルエフェクト',
	100: 'オリジナルアレンジ',
	101: 'オリジナルアレンジ',
	102: 'オリジナルアレンジ',
	103: 'オリジナルアレンジ',
	104: 'オリジナルアレンジ',
	105: 'オリジナルアレンジ',
	106: 'オリジナルアレンジ',
	107: 'オリジナルアレンジ',
	108: 'オリジナルアレンジ',
	109: 'オリジナルアレンジ',
	110: 'オリジナルアレンジ',
	111: 'オリジナルアレンジ',
	112: 'オリジナルアレンジ',
	113: 'オリジナルアレンジ',
	114: 'オリジナルアレンジ',
	115: 'オリジナルアレンジ',
	116: 'オリジナルアレンジ',
	117: 'オリジナルアレンジ',
	118: 'オリジナルアレンジ',
	119: 'オリジナルアレンジ',
	120: 'オリジナルアレンジ',
	121: 'オリジナルアレンジ',
	122: 'オリジナルアレンジ',
	123: 'オリジナルアレンジ',
	124: 'オリジナルアレンジ',
	125: 'オリジナルアレンジ',
	126: 'オリジナルアレンジ',
	127: 'オリジナルアレンジ',
	128: 'オリジナルアレンジ'
};


const mapStateToProps = (state) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}