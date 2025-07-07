import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/themeContext';
import { UserProvider } from './contexts/userContext';
import { Header } from './components/header';
import { Dashboard } from './components/dashboard';


const App = () =>{


  return(
    <ThemeProvider>
      <UserProvider>
        <Header/>
        <Dashboard/>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App
