import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import store from '../store';

class Home extends React.Component {

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
      <div className="Home">
        { this.state.login == true ? <Fragment /> : <Fragment><Link to="/login">Login</Link> | <Link to="/register">Register</Link></Fragment>}
        <br /><br /><p>Public home page content</p>
      </div>
    )
  }
}

export default Home;
