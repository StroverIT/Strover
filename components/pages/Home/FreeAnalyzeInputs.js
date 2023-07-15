"use client";
import React, { useRef, useState } from "react";
import GoogleInputs from "../../Inputs/GoogleInputs";

import GlowBtn from "../../Buttons/GlowBtn";

import {getAnalyze} from "../../../API/analyze";

import { toastError, toastSuccess } from "../../../libs/notifications";

const FreeAnalyzeInputs = () => {
  const [isLoading, setLoading] = useState(false)

  const form = useRef(null)

    const resetForm = ()=>{
      form.current.reset()
    }
  return (
    <form className="grid items-center justify-center gap-5 xl:grid-cols-2" ref={form} action={(data)=> getAnalyze(data).then(data=> {
      
      if(data.error) toastError(data.error);
      if(data.message) {
        toastSuccess(data.message)
        resetForm()
      }
      setLoading(false)
      
    })}>
     
        <GoogleInputs placeholder="Уебсайт линк" name="websiteLink" />
        <GoogleInputs placeholder="И-мейл" name="email"/>
      <GlowBtn text="Заяви сега" type="submit" className="lg:col-span-2 p-4 mt-4" isLoading={isLoading} onClick={()=>setLoading(true) } />

     
      
    </form>
  );
};

export default FreeAnalyzeInputs;
