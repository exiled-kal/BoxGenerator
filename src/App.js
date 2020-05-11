import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [currentBox, setCurrentBox] = useState("");
  
    const gottaBox = ( newBox ) => {
        setCurrentBox( newBox );
    }
  
    return (
      <>
        <BoxForm onNewBox={ gottaBox } />
        
        <BoxDisplay bgColor="red" />
        <BoxDisplay bgColor="blue" />
        
      </>
    );
}

export default App;