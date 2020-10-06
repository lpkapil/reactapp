import React from 'react';
import PageHeaderCommon from '../components/Layout/PageHeaderCommon';
import { Divider } from 'antd';
import UserListing from './UserListing';
import store from '../store';

class Dashboard extends React.Component {

  constructor(props)
	{
		super(props);
		this.state = {
      user: this.parseState(store.getState().user)
    }
  }

  parseState = (input) => {
		return typeof input == 'string' ? JSON.parse(input) : input;
  }

  render() {
    return (
      <div className="Dashboard">
        <PageHeaderCommon title="Dashboard" subTitle="Dashboard page" />
        <Divider orientation="left" plain>Logged in User Object</Divider>
        <div><pre>{JSON.stringify(this.state.user, null, 2) }</pre></div>
        <Divider orientation="left" plain>Server Side Table</Divider>
        <UserListing />
      </div>
    )
  }
}

export default Dashboard;
