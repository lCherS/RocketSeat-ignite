import React from 'react';
import style from 'styled-components';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';



export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <h1>OiOi</h1>
    </>
  );
}

