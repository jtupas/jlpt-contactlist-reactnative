import React, { Component } from 'react';
import {
	Router,
	Scene
} from 'react-native-router-flux';

import Main from './controllers/Main';
import Details from './controllers/Details';

export default React.createClass({
	render() {
		return (
			<Router>
				<Scene key='root'>
					<Scene	key='main'
							title='Main'
							component={Main}
							initial
							hideNavBar />
					<Scene	key='details'
							title='Details'
							component={Details} />
				</Scene>
			</Router>)
	}
});