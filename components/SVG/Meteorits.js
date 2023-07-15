import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={560}
    preserveAspectRatio="none"
    {...props}
  >
    <g fill="none" strokeLinecap="round" mask='url("#a")'>
      <path
        stroke='url("#b")'
        strokeWidth={10}
        d="m720 220 396 396"
        className="BottomRight"
      />
      <path
        stroke='url("#c")'
        strokeWidth={10}
        d="m120 417 277 277"
        className="TopLeft"
      />
      <path
        stroke='url("#b")'
        strokeWidth={10}
        d="M1124 435 804 115"
        className="BottomRight"
      />
      <path
        stroke='url("#c")'
        strokeWidth={8}
        d="m802 103 239 239"
        className="TopLeft"
      />
      <path
        stroke='url("#c")'
        strokeWidth={6}
        d="m888 241 317 317"
        className="TopLeft"
      />
      <path
        stroke='url("#c")'
        strokeWidth={10}
        d="M823 177 471-175M801 92l307 307"
        className="TopLeft"
      />
      <path
        stroke='url("#b")'
        strokeWidth={10}
        d="m1006 315 157 157"
        className="BottomRight"
      />
      <path
        stroke='url("#c")'
        strokeWidth={6}
        d="M99 301-162 40"
        className="TopLeft"
      />
      <path
        stroke='url("#b")'
        strokeWidth={6}
        d="M12 126-155-41"
        className="BottomRight"
      />
      <path
        stroke='url("#b")'
        strokeWidth={10}
        d="M1082 187 939 44"
        className="BottomRight"
      />
      <path
        stroke='url("#b")'
        strokeWidth={6}
        d="M1311 440 954 83"
        className="BottomRight"
      />
      <path
        stroke='url("#c")'
        strokeWidth={6}
        d="m944 381 373 373"
        className="TopLeft"
      />
      <path
        stroke='url("#b")'
        strokeWidth={10}
        d="m46 267 291 291"
        className="BottomRight"
      />
      <path
        stroke='url("#c")'
        strokeWidth={8}
        d="m1170 30-147-147"
        className="TopLeft"
      />
      <path
        stroke='url("#b")'
        strokeWidth={6}
        d="m687 57 367 367"
        className="BottomRight"
      />
      <path
        stroke='url("#b")'
        strokeWidth={8}
        d="m1278 479 314 314"
        className="BottomRight"
      />
      <path
        stroke='url("#b")'
        strokeWidth={10}
        d="m502 128 409 409"
        className="BottomRight"
      />
      <path
        stroke='url("#c")'
        strokeWidth={8}
        d="M334 150-22-206"
        className="TopLeft"
      />
      <path
        stroke='url("#c")'
        strokeWidth={6}
        d="M604 533 438 367"
        className="TopLeft"
      />
      <path
        stroke='url("#b")'
        strokeWidth={10}
        d="M357 171 211 25M478 349l169 169"
        className="BottomRight"
      />
      <path
        stroke='url("#c")'
        strokeWidth={6}
        d="M1063 539 662 138M226 450l296 296"
        className="TopLeft"
      />
      <path
        stroke='url("#c")'
        strokeWidth={8}
        d="m1382 316 397 397"
        className="TopLeft"
      />
      <path
        stroke='url("#b")'
        strokeWidth={6}
        d="m529 17 214 214"
        className="BottomRight"
      />
      <path
        stroke='url("#c")'
        strokeWidth={10}
        d="m1047 534 398 398"
        className="TopLeft"
      />
      <path
        stroke='url("#c")'
        strokeWidth={6}
        d="m108 121 213 213"
        className="TopLeft"
      />
      <path
        stroke='url("#c")'
        strokeWidth={10}
        d="m1056 383 166 166"
        className="TopLeft"
      />
      <path
        stroke='url("#c")'
        strokeWidth={6}
        d="m890 54 362 362"
        className="TopLeft"
      />
      <path
        stroke='url("#c")'
        strokeWidth={8}
        d="M635 448 228 41M295 265 21-9"
        className="TopLeft"
      />
      <path
        stroke='url("#c")'
        strokeWidth={6}
        d="m460 434 395 395"
        className="TopLeft"
      />
      <path
        stroke='url("#b")'
        strokeWidth={6}
        d="M450 15 253-182"
        className="BottomRight"
      />
      <path
        stroke='url("#b")'
        strokeWidth={8}
        d="m1026 216 172 172"
        className="BottomRight"
      />
      <path
        stroke='url("#c")'
        strokeWidth={10}
        d="m1197 458 368 368"
        className="TopLeft"
      />
      <path
        stroke='url("#c")'
        strokeWidth={8}
        d="M447 267 216 36M903 262 597-44"
        className="TopLeft"
      />
      <path
        stroke='url("#c")'
        strokeWidth={6}
        d="m1317 544 279 279"
        className="TopLeft"
      />
    </g>
    <defs>
      <linearGradient id="b" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset={0} stopColor="rgba(141, 223, 232, 0)" />
        <stop offset={1} stopColor="rgba(141, 223, 232, 1)" />
      </linearGradient>
      <linearGradient id="c" x1="100%" x2="0%" y1="100%" y2="0%">
        <stop offset={0} stopColor="rgba(141, 223, 232, 0)" />
        <stop offset={1} stopColor="rgba(141, 223, 232, 1)" />
      </linearGradient>
      <mask id="a">
        <path fill="#fff" d="M0 0h1440v560H0z" />
      </mask>
    </defs>
  </svg>
)
export default SvgComponent
