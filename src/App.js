
import { useState } from 'react'
import MyForm from './components/MyForm'
import './App.css';


function App() {

  const [ fromFirst, setFromFirst ] = useState(true)

  return (
  <>
    <MyForm/>
  </>
  );
}

export default App;
