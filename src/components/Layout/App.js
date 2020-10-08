import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import store from '../../redux/store';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import {
  ConfigProvider
} from 'antd';

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  'storestate': state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // ... normally is an object full of action creators
});

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      login: this.parseState(store.getState().login),
      appName: 'WebApp'
    }
  }

  parseState = (input) => {
		return typeof input == 'string' ? JSON.parse(input) : input;
  }

  render() {
    return (
      <div className="App">
        <ConfigProvider locale={this.props.storestate.lang}>
          <Header login={this.state.login} appName={this.state.appName} />
          <Main />
          <Footer appName={this.state.appName} />
        </ConfigProvider>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
