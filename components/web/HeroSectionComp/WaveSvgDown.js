import React from "react";

export default function WaveSvgDown() {
  return (
    <svg viewBox="0 -150 1320 500" className="rotate-180 rotate-x-180 wavySvg ">
      <defs>
        <linearGradient id="firstPath">
          <stop offset="17.5" stopColor="rgba(20, 72, 150, 0.58)" />

          <stop offset="69.08%" stopColor="#083962" />

          <stop offset="83.67%" stopColor="rgba(7, 84, 107, 1)" />
          <stop offset="90%" stopColor="rgba(44, 119, 142, 1)" />
          <stop offset="100%" stopColor="#0c354f" />
        </linearGradient>
        <linearGradient id="secondPath">
          <stop offset="49.53%" stopColor="#084b85" />

          <stop offset="54.92%" stopColor="rgba(20, 93, 155, 0.53125)" />

          <stop offset="74.37%" stopColor="rgba(18, 76, 143, 0.541867)" />
          <stop offset="89.28%" stopColor="rgba(12, 71, 159, 0.55)" />
        </linearGradient>
        <linearGradient id="thirdPath">
          <stop offset="56.77%" stopColor="#136fbe" />
          <stop offset="100%" stopColor="#5fa4de" />
        </linearGradient>
        <linearGradient id="fourthPath">
          <stop offset="56.77%" stopColor="rgba(25, 111, 184, 0.635417)" />
          <stop offset="95%" stopColor="rgba(29, 49, 236, 0)" />
        </linearGradient>
      </defs>
      <g>
        <path fill="url(#firstPath)" fillOpacity="0.5" />
        <path fill="url(#secondPath)" fillOpacity="0.5" />
        <path fill="url(#thirdPath)" fillOpacity="0.5" />
        <path fill="url(#fourthPath)" fillOpacity="0.9" />

        <path fill="url(#firstPath)" fillOpacity="0.5" />
        <path fill="url(#secondPath)" fillOpacity="0.5" />
        <path fill="url(#thirdPath)" fillOpacity="0.5" />
        <path fill="url(#fourthPath)" fillOpacity="0.9" />
      </g>
    </svg>
  );
}
