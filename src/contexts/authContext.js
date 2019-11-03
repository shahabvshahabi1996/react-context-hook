import React from 'react';

export const AuthContext = React.createContext();

export default class AuthContextProvider extends React.Component {
    
    state =  { 
        authenticatedUser : false
    }

    toggleAuth = () => {
        return this.setState({authenticatedUser : !this.state.authenticatedUser});
    }
    
    render() {
        return (
            <AuthContext.Provider value={{...this.state , toggleAuth : this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}