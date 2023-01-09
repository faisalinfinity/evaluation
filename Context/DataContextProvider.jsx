import { createContext } from "react";

export const DataContext=createContext()

import React from 'react'
import axios from "axios";

const DataContextProvider = ({children}) => {

   const getProfile=()=>{
      axios.get(`https://api.github.com/users/${faisalinfinity}`)
   }

  return (
     <DataContext.Provider value={{}}>
  {children}
     </DataContext.Provider>
  )
}

export default DataContextProvider