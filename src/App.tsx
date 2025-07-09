import React from 'react';
import './App.css'; 
import { GlobalStyles } from "./styles/theme/globalStyles";
import { SignIn } from './features/auth/SignIn';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <SignIn/>
    </div>
  );
}

export default App;
