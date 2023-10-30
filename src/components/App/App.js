import './App.css';
import React from 'react';
import getAllTricks from "../App/apiCalls"
import {useState, useEffect} from "react"

import TricksContainer from "../TricksContainer/TricksContainer"
import Form from "../Form/Form"


function App() {
  const [tricks, setTricks] = useState([])

  useEffect(() => {
    getAllTricks()
    .then(tricksData => {
      console.log(tricksData)
      setTricks(tricksData)
    })
    .catch(error => console.log(error))
  }, [])

  function addTrick(newTrick) {
    setTricks([...tricks, newTrick])
  }

  return (
    <div className="App">
      <h1 className='header'>Sick Trick Wish List</h1>
      <TricksContainer className="tricks-container" tricks={tricks}/>
      <Form className="form" addTrick={addTrick} />
    </div>
  );
}

export default App; 
