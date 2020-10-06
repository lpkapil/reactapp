import React from 'react';
import PageHeaderCommon from '../components/Layout/PageHeaderCommon';
import { Divider, Tabs, Result } from 'antd';
import UserListing from './UserListing';
import store from '../store';

const { TabPane } = Tabs;

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
        <Tabs defaultActiveKey="1" tabPosition='left'>
            <TabPane tab='Dashboard' key='tab1'>
              <Result
                status="success"
                title={`${this.state.user.name}, Welcome to the dashboard!`}
                /* subTitle={`ID: ${this.state.user.id}, Name: ${this.state.user.name}, Email: ${this.state.user.email}`} */
                /* subTitle={JSON.stringify(this.state.user, null, 2) } */
              />
            </TabPane>
            <TabPane tab='LoggedIn User' key='tab2'>
              <Divider orientation="left" plain>Logged in User Object</Divider>
              <div><pre>{JSON.stringify(this.state.user, null, 2) }</pre></div>
            </TabPane>
            <TabPane tab='Users Listing' key='tab3'>
              <Divider orientation="left" plain>Server Side Table</Divider>
              <UserListing />
            </TabPane>
        </Tabs>

        
        
      </div>
    )
  }
}

export default Dashboard;
