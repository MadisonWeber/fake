import { useContext , useEffect, memo} from 'react'
import { DataContext } from '../GlobalContext'

const CounterDisplay = () => {


    const {count, setCount} = useContext(DataContext)
  
    console.log('counter is rendering')
 

    return (
        <div className="counter">
            Counter Fun
            <button className="add" onClick = {()=> setCount( p => p + 1)}> + </button>
            <p>count is {count}</p>
            <button className="minus" onClick = {()=> setCount( p => p - 1)}> - </button>
      </div>
    )
}

export default memo(CounterDisplay)
