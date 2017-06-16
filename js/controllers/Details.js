import React, { Component,PropTypes } from 'react';
import {
	Container,
	Content,
	Item,
	InputGroup, 
	Input,
	Button,
	Text,
	Spinner
} from 'native-base';
import {
	Actions,
	ActionConst,
} from 'react-native-router-flux';

import { connect } from 'react-redux';
import { didBeginFetching, addUser, updateUser, resetState } from '../actions/userActions';
import { 
	setFirstName,
	setLastName, 
	setAddress, 
	setEmail, 
	setContactNumber, 
	setAll,
	setNew,
} from '../actions/detailActions'; 

import Header from '../components/Header';

var Details = React.createClass({

	componentWillMount() {
		if (this.props.user) {
			this.props.all(this.props.user);
		}else {
			this.props.setnew();
		}
	},

	renderSpinner() {
		if (this.props.isfetching) {
			return <Spinner />
		}
		return null;
	},

	renderAlert() {
		if (this.props.alertmessage) {
			alert(this.props.alertmessage)
			this.props.resetAll();
		}
	},

	render() {
		return (
			<Container>
				<Header headerTitle='Main' 
					leftTitle='< Back' 
					leftAction={ () => {
						this.props.setnew();
						Actions.pop()}} 
					rightTitle='Save' 
					rightAction={ () => {
						let data = {
  							first_name: this.props.firstname,
  							last_name: this.props.lastname,
  							address: this.props.address,
  							email: this.props.email,
  							contact_number: this.props.contactnumber,
  							_id: this.props._id
  						}

  						if (this.props.isnew) {
  							this.props.add(data);
  						}else {
  							this.props.update(data);
  						}
					}} />

				{this.renderSpinner()}
				{this.renderAlert()}

				<Content>
					<Item regular>
						<Input placeholder='First Name' value={this.props.firstname} 
						onChangeText={(text) => {this.props.setfirstname(text)}} />
					</Item>
					<Item regular>
						<Input placeholder='Last Name' value={this.props.lastname}
						onChangeText={(text) => {this.props.setlastname(text)}} />
					</Item>
					<Item regular>
						<Input placeholder='Address' value={this.props.address}
						onChangeText={(text) => {this.props.setaddress(text)}} />
					</Item>
					<Item regular>
						<Input placeholder='Email' value={this.props.email}
						onChangeText={(text) => {this.props.setemail(text)}} />
					</Item>
					<Item regular>
						<Input placeholder='Contact Number' value={this.props.contactnumber}
						onChangeText={(text) => {this.props.setcontactnumber(text)}} />
					</Item>
				</Content>
			</Container>
		)
	},
});

const mapStateToProps = state => ({
	firstname: state.detail.first_name,
	lastname: state.detail.last_name,
	address: state.detail.address,
	email: state.detail.email,
	contactnumber: state.detail.contact_number,
	_id: state.detail._id,

	isnew: state.detail.isNew,
	
	isfetching: state.user.fetching,
	alertmessage: state.user.alertMessage,
});

const mapDispatchToProps = dispatch => ({
	update: (data) => dispatch(updateUser(data)),
	add: (data) => dispatch(addUser(data)),
	all: (data) => dispatch(setAll(data)),
	resetAll: () => dispatch(resetState()),

	setnew: () => dispatch(setNew()),
	setfirstname: (data) => dispatch(setFirstName(data)),
	setlastname: (data) => dispatch(setLastName(data)),
	setaddress: (data) => dispatch(setAddress(data)),
	setemail: (data) => dispatch(setEmail(data)),
	setcontactnumber: (data) => dispatch(setContactNumber(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Details)