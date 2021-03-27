import React, { useContext, useEffect } from 'react'
import { DataContext } from "../GlobalContext"

const Fun = () => {

    const { isDark, setIsDark } = useContext(DataContext)

    console.log('fun is rendering')
 


    return (
        <div className = {isDark ? 'fun' : "dark" } onClick = {()=> setIsDark(p => !p)}>
            Fun Component
        </div>
    )
}

export default React.memo(Fun)
