import React from "react";
import './Nav.scss';
import {
    // Link,
    NavLink
  } from "react-router-dom";

class Nav extends React.Component {

    render() {
        return(
            <div className="topnav">
                <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
                <NavLink to="/todo" activeClassName="active">Todos</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todos</Link>
                <Link to="/about">About</Link> */}
            </div>
        )
    }
}

export default Nav;