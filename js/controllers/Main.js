import React, { PropTypes } from 'react';
import {
	Container,
	Content,
	Text,
} from 'native-base';

import {
	Actions,
	ActionConst,
} from 'react-native-router-flux';

import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

import Header from '../components/Header';
import List from '../components/List';


var Main = React.createClass({

	propTypes: {
		load: PropTypes.func,
		fetch: PropTypes.func,
	},

	componentWillMount() {
		this.props.fetch();
	},

	render() {
		return (
			<Container>
				<Header 
					headerTitle='Main' 
					leftTitle='' 
					rightTitle='Add' 
					rightAction={ () => {Actions.details({user: null})}} />
				<Content>
					<List itemList={this.props.aList} />
				</Content>
			</Container>
		)
	}
}); 

const mapStateToProps = state => ({
	aList: state.user.users
});

const mapDispatchToProps = dispatch => ({
	fetch: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main); 