import React from 'react';
import store from '../store';
import { Route, Redirect } from 'react-router-dom';

class PublicRoute extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {
			login: this.parseState(store.getState().login)
		}
	}

	parseState = (input) => {
		return typeof input == 'string' ? JSON.parse(input) : input;
	}

	render() {
		
	  const { component: Component, ...props } = this.props
	  return (
		<Route 
		  {...props} 
		  render={props => (
			(this.state.login != true) ?
			  <Component {...props} /> :
			  <Redirect to='/dashboard' />
		  )} 
		/>
	  )
	}
}

export default PublicRoute;