import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import './App.css';

function App() {
  const [currBox, setCurrBox] = useState("");
    
  const getBox = (newBox) => {
    setCurrBox(newBox);
  }

  return (
    <div className="App">
      <>
      <BoxForm newBox={getBox}/>
      </>
    </div>
  );
}

export default App;
