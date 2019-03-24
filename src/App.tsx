import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { AppTheme } from './styles/theme/theme';

class App extends Component {
  render() {
    return (
      <>
        <AppTheme>
          <Header/>
        </AppTheme>
      </>
    );
  }
}

export default App;
