"use client"

import { createContext, useContext, useState } from "react"

const TextContext = createContext({
    text: "",
    isOpen: false,
    data: {
      typeService: null,
      typePlan: null,
      planData: {}
    }
})

export const TextContextProvider = ({ children }) => {
    const [text, setText] = useState("")
    const [isOpen, setOpen] = useState(false)
  const [data, setData] = useState({typeService: null, typePlan: null, planData: {}})
    return <TextContext.Provider value={{ text, setText,isOpen,setOpen,  data, setData}}>{children}</TextContext.Provider>
}

export const useGlolContext = () => useContext(TextContext)