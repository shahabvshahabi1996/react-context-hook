import React , {Component} from 'react';
import {AuthContext} from '../contexts/authContext';

class Navbar extends Component {
    render() {
        return (
            <AuthContext.Consumer>
                {(context) => {
                    const {toggleAuth , authenticatedUser} = context;
                    return (
                            <nav>
                                <h1>Context APP</h1>
                                <div onClick={toggleAuth}>{authenticatedUser ? "Logged in" : "Logged out"}</div>
                                <ul>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>FAQs</li>
                                </ul>
                            </nav>
                        )
                }}
            </AuthContext.Consumer>
        );
    }
}

export default Navbar;