import React from 'react';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import store from './store';
export default () => (
	<Provider store={store}>
		<AppNavigator />
	</Provider>
);