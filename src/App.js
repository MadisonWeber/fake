import Fun from "./components/Fun"
import { useState } from 'react'
import CounterDisplay from './components/CounterDisplay'
import ThirdDisplay from './components/ThirdDisplay'
import './App.css';


function App() {


  const [ fromFirst, setFromFirst ] = useState(true)
  

  return (
        <>
          { fromFirst && <h1>This is the first Branch</h1>}
          <p>hello</p>
          <CounterDisplay />
          <Fun />
          <ThirdDisplay />
        </>
  );
}

export default App;
