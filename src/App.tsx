import React from 'react';
import { Header } from './components/header/component';
import { LoginForm } from './components/loginForm/component';
import Container from "@mui/material/Container"

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <LoginForm/>
      </Container>
      
    </div>
  );
}

export default App;
