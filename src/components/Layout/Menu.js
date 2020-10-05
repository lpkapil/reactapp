import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';

class Menu extends React.Component {

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

    if (this.state.login === true) {
      var links = (
        <Fragment>
             <li>
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
        </Fragment>
      );
    } else{
      links = (
        <Fragment>
             <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
        </Fragment>
      );
    }

    return (
      <div className="Menu" >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              { links }
            </ul>
      </div>
    )
  }
}

export default Menu;
