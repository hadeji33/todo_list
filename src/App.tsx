import React from 'react';
import { Header } from './components/header/component';
import { LongFormContainer } from './components/loginForm/container';
import Container from "@mui/material/Container"

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <LongFormContainer/>
      </Container>
    </div>
  );
}

export default App;
