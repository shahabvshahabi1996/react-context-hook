import React , {useContext} from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import AddBook from './components/AddBook';

import {ThemeContext} from './contexts/themeContext';

const App = () => {
  const {isLight , light , dark , changeTheme} = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  return (
    <div style={theme} className="App">
      <Navbar/>
      <div>
          <Booklist/>
      </div>
      <br/>
      <AddBook />
      <br/>
      <button onClick={changeTheme}>Toggle theme</button>
    </div>
  )
}

export default App;
