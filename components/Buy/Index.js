"use client"

import React from 'react';
import Home from "./Home"
import { useGlolContext } from '../../app/Context/text';

const Index = () => {
  const {data } = useGlolContext();

  return (
    <Home key={data.typePlan+data.typeService}/>
  );
}

export default Index;
