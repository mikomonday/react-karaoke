import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

/*Material-UI*/
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
const muiTheme = getMuiTheme({
	lightBaseTheme
})

/*Store*/
import configureStore from './configureStore';
const store = configureStore();

/*Components*/
import App from './components/App';

ReactDOM.render(
	<Provider store={store}> 
		<MuiThemeProvider muiTheme={muiTheme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);