import React from "react";

export default function Background() {
  return (
    <svg
      // width={1920}
      // height={1600}

      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMid meet"
      viewBox="10 0 1920 1600"
    >
      <path
        d="M562 511.5c-192 9.004-446.042 60.161-623 211.511h344.5L1947 636.839l10-634.828c-139-25-136 190.5-260 234.5S1634 98 1420.5 195 1332.2 535.755 989 428c-343.201-107.755-235 74.496-427 83.5Z"
        fill="url(#a)"
        className="firstPath"
      />
      <path
        d="M337.5 555.094c-135-47.38-174.542-191.546-351.5-41.791L5.5 742.094l1951-12.5-10-616.594C1957-120.5 1917 302.594 1724 292.094s-228-70-318.5 0-37.8 292.12-381 185.5c-343.201-106.619-552 124.881-687 77.5Z"
        fill="url(#b)"
      />
      <path
        d="M269.5 633C83 597.5 48.958 592.245-128 742H950l1052-11.5-11-561.5c-102.5 102.5-21 257.5-214 247s-247.5 110-350.5 157.5-396 43-669.5 24-301 71-487.5 35.5Z"
        fill="url(#c)"
      />
      <path
        d="M142.5 943.5c-119 14 27.5 220.5-144 361.5V742H393l661.5-1.5L1979 729l-60.5 576C1816 1202.5 1886 933 1693 943.5s-198-155-321.5-85-858 32-995.5 0-114.5 71-233.5 85Z"
        fill="url(#d)"
      />
      <path
        d="M1174 736s31.16-110.087 267.23-124.944c236.07-14.858 279.22.213 322.26-84.247 43.04-84.46 155.1 29.066 155.1 29.066l1.41 180.129-746-.004Z"
        fill="url(#e)"
      />
      <path
        d="M1174 735.996s21.5 109.379 286.5 124.504S1671 894.491 1726 993.996c55 99.504 194-11.496 194-11.496V735.996h-746Z"
        fill="url(#f)"
      />
      <defs>
        <linearGradient
          id="a"
          x1={951}
          y1={53.186}
          x2={1019.93}
          y2={672.559}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#144896" stopOpacity={0.58} />
          <stop offset={0.779} stopColor="#083962" />
          <stop offset={1} stopColor="#07546B" stopOpacity={0} />
          <stop offset={1} stopColor="#2C778E" stopOpacity={0} />
          <stop offset={1} stopColor="#0C354F" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={937}
          y1={394.585}
          x2={1031}
          y2={823.594}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#084B85" />
          <stop offset={0.135} stopColor="#145D9B" stopOpacity={0.531} />
          <stop offset={0.625} stopColor="#124C8F" stopOpacity={0.542} />
          <stop offset={1} stopColor="#0C479F" stopOpacity={0.55} />
        </linearGradient>
        <linearGradient
          id="c"
          x1={1001.5}
          y1={449}
          x2={1060}
          y2={1120}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#136FBE" />
          <stop offset={1} stopColor="#5FA4DE" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={984.501}
          y1={1035}
          x2={1043}
          y2={364}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0080EC" stopOpacity={0.56} />
          <stop offset={0.099} stopColor="#136FBE" />
          <stop offset={0.401} stopColor="#3184CB" />
          <stop offset={1} stopColor="#5FA4DE" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={1506.83}
          y1={491.588}
          x2={1501.46}
          y2={790.079}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5DA0D8" />
          <stop offset={0.474} stopColor="#196FB8" stopOpacity={0.635} />
          <stop offset={1} stopColor="#1D31EC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="f"
          x1={1536.96}
          y1={972.73}
          x2={1531.36}
          y2={661.917}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5DA0D8" />
          <stop offset={0.474} stopColor="#196FB8" stopOpacity={0.635} />
          <stop offset={1} stopColor="#1D31EC" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}

{
  /* <svg
      // width={1920}
      // height={1600}

      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMid meet"
      viewBox="0 0 1920 1600"
    >
      <path
        d="M0 1079c1166.42-17.88 2252.24-240.042 2108.09-889.282L0-32v1111Z"
        fill="url(#a)"
      />
      <path
        d="M555 865.5c-192 9.004-446.042 60.161-623 211.51h344.5L1940 990.839l10-634.828c-139-25-136 190.5-260 234.5S1627 452 1413.5 549 1325.2 889.755 982 782c-343.201-107.755-235 74.496-427 83.5Z"
        fill="url(#b)"
      />
      <path
        d="M350.5 912C215.5 864.62 175.958 720.454-1 870.209L18.5 1099l1951-12.5-30-615.009C1950 237.991 1930 659.5 1737 649s-228-70-318.5 0-37.8 292.12-381 185.5c-343.201-106.62-552 124.88-687 77.5Z"
        fill="url(#c)"
        className=" testing"
      />
      <path
        d="M196.5 988C10 952.5-24.042 947.245-201 1097H877l1051.5-26-10.5-547c-102.5 102.5-21 257.5-214 247s-247.5 110-350.5 157.5-396 43-669.5 24-301 71-487.5 35.5Z"
        fill="url(#d)"
      />
      <path
        d="M196.5 988C10 952.5-24.042 947.245-201 1097H877l1051.5-26-10.5-547c-102.5 102.5-21 257.5-214 247s-247.5 110-350.5 157.5-396 43-669.5 24-301 71-487.5 35.5Z"
        fill="url(#e)"
      />
      <path
        d="M222.5 1136C36 1171.5 1.958 1176.75-175 1027H903l1051.5 26-10.5 547c-102.5-102.5-30-415-223-404.5s-238.5 47.5-341.5 0-396-43-669.5-24-301-71-487.5-35.5Z"
        fill="url(#f)"
      />
      <path
        d="M1686 1136c186.5 35.5 220.54 40.75 397.5-109h-1078L-46 1053l10.5 547c102.5-102.5 30-415 223-404.5s238.5 47.5 341.5 0 396-43 669.5-24 301-71 487.5-35.5Z"
        fill="url(#g)"
      />
      <path
        d="M1207 1077.12s25.87-117.13 295.37-132.13c269.5-14.999 75.4-204.282 369.24-98.884 293.83 105.397 120.66-65.054 120.66-65.054l-22.31 270.908-762.96 25.16Z"
        fill="url(#h)"
      />
      <path
        d="M1203.63 1076.42s25.87 117.14 295.37 132.14c269.5 15 75.41 204.28 369.24 98.88 293.84-105.4 120.66 65.05 120.66 65.05l-23.77-331.56-761.5 35.49Z"
        fill="url(#i)"
      />
      <defs>
        <linearGradient
          id="a"
          x1={732}
          y1={195.5}
          x2={1263}
          y2={1291}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity={0.42} />
          <stop offset={0.349} stopColor="#0E537A" stopOpacity={0.604} />
          <stop offset={0.771} stopColor="#3C98CB" stopOpacity={0.69} />
          <stop offset={1} stopColor="#49A4D8" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={944}
          y1={407.186}
          x2={1012.93}
          y2={1026.56}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#144896" stopOpacity={0.58} />
          <stop offset={0.779} stopColor="#083962" />
          <stop offset={1} stopColor="#07546B" stopOpacity={0} />
          <stop offset={1} stopColor="#2C778E" stopOpacity={0} />
          <stop offset={1} stopColor="#0C354F" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={950}
          y1={751.491}
          x2={1044}
          y2={1180.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#084B85" />
          <stop offset={0.135} stopColor="#145D9B" stopOpacity={0.531} />
          <stop offset={0.625} stopColor="#124C8F" stopOpacity={0.542} />
          <stop offset={1} stopColor="#0C479F" stopOpacity={0.55} />
        </linearGradient>
        <linearGradient
          id="d"
          x1={928.5}
          y1={804}
          x2={987}
          y2={1475}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#136FBE" />
          <stop offset={0.516} stopColor="#5FA4DE" stopOpacity={0.83} />
          <stop offset={0.943} stopColor="#1A65D7" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="e"
          x1={928.5}
          y1={804}
          x2={987}
          y2={1475}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#136FBE" />
          <stop offset={0.516} stopColor="#5FA4DE" stopOpacity={0.83} />
          <stop offset={0.943} stopColor="#1A65D7" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="f"
          x1={954.5}
          y1={1320}
          x2={1013}
          y2={649}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#136FBE" />
          <stop offset={0.516} stopColor="#5FA4DE" stopOpacity={0.83} />
          <stop offset={0.943} stopColor="#1A65D7" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="g"
          x1={954}
          y1={1320}
          x2={895.5}
          y2={649}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#136FBE" />
          <stop offset={0.516} stopColor="#5FA4DE" stopOpacity={0.83} />
          <stop offset={0.943} stopColor="#1A65D7" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="h"
          x1={1577.04}
          y1={806.218}
          x2={1571.45}
          y2={1116.34}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5DA0D8" />
          <stop offset={0.474} stopColor="#196FB8" stopOpacity={0.635} />
          <stop offset={1} stopColor="#1D31EC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="i"
          x1={1583.04}
          y1={1347.9}
          x2={1577.45}
          y2={1037.77}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5DA0D8" />
          <stop offset={0.474} stopColor="#196FB8" stopOpacity={0.635} />
          <stop offset={1} stopColor="#1D31EC" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg> */
}
