import React, { Component } from 'react';
import './App.css';
import TitleBar from './elements/TitleBar';
import { ThemeProvider } from './styles/ThemeProvider';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <TitleBar/>
        <div>app</div>
      </ThemeProvider>
    );
  }
}

export default App;
