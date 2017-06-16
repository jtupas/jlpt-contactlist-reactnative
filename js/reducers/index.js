import { combineReducers } from 'redux';

import user from './userReducer';
import detail from './detailReducer';

export default combineReducers({
	user,
	detail
});