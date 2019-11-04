import React , {useContext} from 'react';
import {AuthContext} from '../contexts/authContext';

const Navbar = () =>  {
    const {toggleAuth , authenticatedUser} = useContext(AuthContext);
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
}

export default Navbar;