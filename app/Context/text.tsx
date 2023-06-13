"use client"

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"


interface TextProps {
    text: string,
    setText: Dispatch<SetStateAction<string>>
}
const TextContext = createContext<TextProps>({
    text: "",
    setText: (): string => ""
})

export const TextContextProvider = ({ children }) => {
    const [text, setText] = useState("")

    return <TextContext.Provider value={{ text, setText }}>{children}</TextContext.Provider>
}

export const useGlolContext = () => useContext(TextContext)