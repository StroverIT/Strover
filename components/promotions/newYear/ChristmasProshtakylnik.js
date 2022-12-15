import React from "react";

import style from "./christmasProshtakylnik.module.css";
import { BsDiscord, BsFacebook, BsInstagram } from "react-icons/bs";
const ChristmasProshtakylnik = () => {
  return (
    <div className="relative z-50">
      <ul className={` ${style.list} `}>
        <a
          aria-label="Strover Instagram"
          href="https://www.instagram.com/stroverbg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <BsInstagram />
          </li>
        </a>
        <a
          aria-label="Strover Facebook"
          href="https://www.facebook.com/profile.php?id=100085497228053"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <BsFacebook />
          </li>
        </a>
        <a
          aria-label="Strover Discord"
          href="https://discord.gg/X6ExKc95MP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <BsDiscord />
          </li>
        </a>
        {/* <a href="#">
          <li>
            <i className="fa-brands fa-linkedin-in"></i>
          </li>
        </a>
        <a href="#">
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
        </a> */}
      </ul>
    </div>
  );
};

export default ChristmasProshtakylnik;
