import React , {createContext , Component} from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    
    state = {
        isLight : true,
        dark : {
            backgroundColor : "#333" ,
            color : "#ddd"
        },
        light : {
            backgroundColor : '#fff',
            color : "#333"
        }
    }

    toggleTheme = () => {
        return this.setState({isLight : !this.state.isLight})
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state , changeTheme : this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}