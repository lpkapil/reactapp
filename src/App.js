import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Main from './Components/Layout/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
