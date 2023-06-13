"use client";
import React, { useRef, useState } from "react";
import GoogleInputs from "../../components/Inputs/GoogleInputs";
import DropDown from "../../components/Inputs/DropDown";
import Checkbox from "../../components/Inputs/Checkbox";

import { dropVal } from "./Data";
import Link from "next/link";
import GlowBtn from "../../components/Buttons/GlowBtn";

import formAction from "./FormAction";
import {toastError, toastSuccess} from "../../libs/notifications"

const Inputs = () => {
  const [typesDropDown, setUserDropVal] = useState(dropVal[0]);
  const [isLoading, setLoading] = useState(false)

  const form = useRef(null)
  const dropHander = (value) => {
    setUserDropVal({ name: value.name, _id: value._id });
  };

    const resetForm = ()=>{
      form.current.reset()
    }
  return (
    <form className="grid gap-y-5" ref={form} action={(data)=> formAction(data).then(data=> {
      setLoading(true)
      
      if(data.error) toastError(data.error);
      if(data.message) {
        toastSuccess(data.message)
        resetForm()
      }
      setLoading(false)
      
    })}>
      <DropDown
        name="typeMessage"
        type="dropdown"
        label="Времетраене"
        onChange={dropHander}
        listHandler={dropHander}
        listValue={typesDropDown || null}
        list={dropVal || []}
      />
      <div className="grid grid-cols-2 gap-x-5">
        <GoogleInputs placeholder="Твоето име" name="name" />
        <GoogleInputs placeholder="И-мейл" name="email"/>
      </div>
      <GoogleInputs placeholder="Съобщение" name="message"/>
      <Checkbox>
        <span className="text-sm text-[#c1c1c1] cursor-pointer">
          Съгласен съм с обработката на личните ми данни за това запитване
          съгласно
          <Link href="/legal/privacy-policy">
            <span className="text-primary-100 ">
              &quot;Политиката за поверителност&quot;
            </span>
          </Link>
          на този сайт.
        </span>
      </Checkbox>
      <GlowBtn text="Изпрати" type="submit" className="p-4 mt-4" isLoading={isLoading} />
    </form>
  );
};

export default Inputs;
