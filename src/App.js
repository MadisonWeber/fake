import Fun from "./components/Fun"
import { useState } from 'react'
import './App.css';
import CounterDisplay from './components/CounterDisplay'


function App() {


  const [ fromFirst, setFromFirst ] = useState(true)
  

  return (
        <>
          { fromFirst && <h1>This is the first Branch</h1>}
          <p>hello</p>
          <CounterDisplay />
          <Fun />
        </>
  );
}

export default App;
