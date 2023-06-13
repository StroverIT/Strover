"use client";
import React, { useState } from "react";
import BlueBtn from "../../../components/Buttons/BlueBtn";

const WebsiteDemoWithBtn = ({link}) => {
  const [isOpen, setOpen] = useState(false);
  console.log(link);
  return (
    <>
      <BlueBtn text="Преглед на живо" onClick={()=> setOpen(true)} />
      
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen">
          <div className="fixed left-0 -translate-y-1/2 top-1/2 "><div onClick={()=> setOpen(false)} className="px-4 py-4 text-white rounded-tr-full rounded-br-full cursor-pointer nav-bg-color-gradient">Върни ме към Strover</div></div>
          <iframe
            src={link}
            name="iframe_a"
            policy="SAMEORIGIN"
            className="w-full h-full"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default WebsiteDemoWithBtn;
