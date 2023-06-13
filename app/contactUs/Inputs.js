"use client"
import React, {useState} from 'react';
import GoogleInputs from "../../components/Inputs/GoogleInputs";
import DropDown from "../../components/Inputs/DropDown"
import Checkbox from "../../components/Inputs/Checkbox"

import {dropVal} from "./Data"
import Link from 'next/link';
import GlowBtn from '../../components/Buttons/GlowBtn';

const Inputs = () => {

    
      const [typesDropDown, setUserDropVal] = useState(dropVal[0]);

      const dropHander = (value) => {
        setUserDropVal({ name: value.name, _id: value._id });
      };

    return (
        <div className='grid gap-y-5'>
             <DropDown
            name="subTime"
            type="dropdown"
            label="Времетраене"
            onChange={dropHander}
            listHandler={dropHander}
            listValue={typesDropDown || null}
            list={dropVal || []}
          />
            <div className="grid grid-cols-2 gap-x-5">
              <GoogleInputs placeholder="Твоето име" />
              <GoogleInputs placeholder="И-мейл" />
          </div>
          <GoogleInputs placeholder="Съобщение" />   
            <Checkbox>
               <span className='text-sm text-[#c1c1c1] cursor-pointer'>Съгласен съм с обработката на личните ми данни за това запитване съгласно <Link href="/legal/privacy-policy"><span className='text-primary-100 '>&quot;Политиката за поверителност&quot;</span></Link> на този сайт.</span>
                </Checkbox>
      <GlowBtn text="Изпрати" className="p-4 mt-4" />

        </div>
    );
}

export default Inputs;
