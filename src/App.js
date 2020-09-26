import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
// import store from './store';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Main from './Components/Layout/Main';

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // ... normally is an object full of action creators
});

class App extends React.Component {

  // constructor(props)
  // {
  //   super(props);
  //   console.log('accessing store state');
  //   console.log(store.getState());
  // }

  render() {
    return (
      <div className="App">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
