"use client"
import React, {useEffect} from 'react';
import { useGlolContext } from '../app/Context/text';

const InitText = ({text}) => {
  const {setText} = useGlolContext()



    setText(text)
    
    return 
}

export default InitText;
