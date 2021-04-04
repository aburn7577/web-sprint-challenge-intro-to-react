import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'
import Character from './components/Character'
import Styled from 'styled-components'


const App = () => {
  const [people, setPeople] = useState([])
  const [info, setInfo] = useState(null)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    Axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setPeople(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {people.map(obj => {
        return (
          <Character
            key={obj.name}
            starwars={obj}
          />
        )
      })

      }
    </div>
  );
}

export default App;
