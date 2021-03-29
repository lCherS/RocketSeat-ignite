import React from 'react';
import style from 'styled-components';

const Title = style.h1`
color: #4148e6;
`


export function App() {
  return (
    <div className="App">
      <Title>Hello Wolrd</Title>
    </div>
  );
}

