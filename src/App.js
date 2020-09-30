import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import store from './store';


import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Main from './components/Layout/Main';

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // ... normally is an object full of action creators
});

class App extends React.Component {

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
    return (
      <div className="App">
      <Router>
        <Header login={this.state.login} />
        <Main />
        <Footer />
      </Router>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
