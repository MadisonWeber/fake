import React, { createContext, useState } from 'react'



export const DataContext = createContext()

const GlobalContextProvider = ({children}) => {

    const [ count, setCount ] = useState(0)
    const [ isDark, setIsDark ] = useState(false)

    return (
        <DataContext.Provider value = {{count, setCount, isDark, setIsDark}}>
            {children}
        </DataContext.Provider>
    )
}

export default GlobalContextProvider
