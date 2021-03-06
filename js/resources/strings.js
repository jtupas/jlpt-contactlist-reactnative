module.exports = { 
	// API
	base_url: 'https://chuck-nodejs-exercise1.herokuapp.com/api/contacts',

	// USER ACTIONS
	action_didBeginFetching: 'DID_BEGIN_FETCHING',
	action_fetchUsersFullfilled: 'FETCH_USERS_FULLFILLED',
	action_fetchUsersRejected: 'FETCH_USERS_REJECTED',
	action_apiSuccess: 'API_SUCCESS',
	action_addUserRejected: 'ADD_USER_REJECTED',
	action_updateUserRejected: 'UPDATE_USER_REJECTED',
	action_resetMessage: 'RESET_MESSAGE',

	// DETAIL ACTIONS
	action_setFirstName: 'SET_FIRST_NAME',
	action_setLastName: 'SET_LAST_NAME',
	action_setAddress: 'SET_ADDRESS',
	action_setEmail: 'SET_EMAIL',
	action_setContactNumber: 'SET_CONTACT_NUMBER',
	action_setAll: 'SET_ALL',
	action_reset: 'RESET',
	action_setID: 'SET_ID',

	//MESSAGES
	message_api_success: 'Success!'
};