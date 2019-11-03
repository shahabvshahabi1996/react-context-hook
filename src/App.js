import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';

import {ThemeContext} from './contexts/themeContext';

class App extends React.Component {

  render() {
    return (
      <ThemeContext.Consumer>
          {(context) => {
            const {isLight , dark , light , changeTheme} = context;
            const theme = isLight ? light : dark;
            return (
              <div style={theme} className="App">
                <Navbar/>
                <div>
                    <Booklist/>
                </div>
                <br/>
                <button onClick={changeTheme}>Toggle theme</button>
              </div>
            )
          }}
      </ThemeContext.Consumer>
        
    );
  }
}

export default App;
