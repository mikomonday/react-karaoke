import React from 'react';
import {connect} from 'react-redux';

/*Components*/
import AppDrawer from './AppDrawer/AppDrawer';
import TopBar from './TopBar';
import Content from './Content';

const App = () => {
	return (
		<div>
			<AppDrawer />
      <TopBar />
      <Content />
    </div>
	)
}

export default App


/*			
<AppDrawer />
			<TopBar />
			<Content />
			*/