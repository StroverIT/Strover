// "use client";

// import gsap from "gsap-trial";

// import { MotionPathPlugin } from "gsap-trial/MotionPathPlugin";
// import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
// import { useEffect, useRef, useState } from "react";

// gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

// const BlueSpider = () => {
//   const [lineHeight, setLineHeight] = useState(null);

//   const lineRef = useRef(null);
//   const spiderRef = useRef(null);
//   useEffect(() => {
//     gsap.set([lineRef.current, spiderRef.current], { opacity: 1 }, 0);
//     gsap.set(spiderRef.current, {
//       rotation: 180,
//     });
//     const main = gsap.timeline({
//       ease: "none",
//     });

//     main
//       .to(
//         spiderRef.current,
//         {
//           motionPath: {
//             path: lineRef.current,
//             align: lineRef.current,
//             alignOrigin: [0.5, 0.72],
//           },
//           duration: 1,
//         },
//         0
//       )
//       .fromTo(
//         lineRef.current,
//         { drawSVG: "0" },
//         { drawSVG: "50%", duration: 1 },
//         0
//       )
//       .to(spiderRef.current, {
//         y: 196 + 100,
//         duration: 1,
//       })
//       .fromTo(
//         lineRef.current,
//         { drawSVG: "50%" },
//         { drawSVG: "100%", duration: 1 },
//         1
//       );
//   }, []);
//   useEffect(() => {
//     console.log(lineHeight);
//   }, [lineHeight]);

//   return (
//     <div className="flex justify-center w-screen h-screen">
//       <svg
//         id="Line"
//         xmlns="http://www.w3.org/2000/svg"
//         x={0}
//         y={0}
//         viewBox="0 0 10 212.9"
//         xmlSpace="preserve"
//         // className=" max-h-96"
//       >
//         <path
//           d="M2-66v180.5"
//           stroke="#18C3FF"
//           className="opacity-0"
//           strokeWidth={2}
//           ref={lineRef}
//         />
//       </svg>
//       <svg
//         id="spider"
//         xmlns="http://www.w3.org/2000/svg"
//         x={0}
//         y={0}
//         viewBox="0 0 187 212.9"
//         xmlSpace="preserve"
//         className="opacity-0 max-h-96 "
//         // className="max-h-96 rotate-180 opacity-0 -translate-x-[12.9rem]"

//         ref={spiderRef}
//       >
//         <style>
//           {
//             ".st1{fill:none;stroke-width:.25}.st1,.st2,.st3,.st5,.st6{stroke:#18c3ff;stroke-miterlimit:10}.st2{fill:none;stroke-width:2}.st3,.st5,.st6{fill:#18c3ff}.st5,.st6{fill:none;stroke-width:.5}.st6{fill:#c33825;stroke-width:.25}.st9{fill:#18c3ff}"
//           }
//         </style>

//         <circle className="st1" cx={107} cy={119.2} r={0.7} />
//         <path
//           className="st2"
//           d="M117.5 129.4c0 13.2-10.7 23.8-23.8 23.8-13.2 0-23.8-10.7-23.8-23.8 0-8.8 4.8-16.6 12-20.7-1.8-2.4-2.9-5.4-2.9-8.7 0-8 6.5-14.5 14.5-14.5S108 92 108 100c0 3.2-1 6.2-2.8 8.5 7.3 4.2 12.3 12 12.3 20.9z"
//         />
//         <path
//           className="st2"
//           d="M105.9 107.6h23.3l21.9 21.7v26.3M108.7 185.5l19.8-20.5-.5-32.7-12.4-12.2-26.2 24.8-11.5-11.3-6 5.6M108 98.9l20.5.4 22.6-22.1v-28M106.8 94.3 128 74.2l.5-31.8-13.4-13.9"
//         />
//         <circle className="st3" cx={104.9} cy={188.7} r={5.1} />
//         <circle className="st3" cx={151.1} cy={160.6} r={5.1} />
//         <circle className="st3" cx={151.1} cy={44} r={5.1} />
//         <circle className="st3" cx={112.4} cy={25.3} r={5.1} />
//         <path className="st2" d="m71.6 120.1-12.5 12.2-.4 32.7 19.7 20.5" />
//         <circle className="st3" cx={82.2} cy={188.7} r={5.1} />
//         <path className="st2" d="M80.7 107.9H57.4l-21.9 21.7v26.3" />
//         <circle className="st3" cx={35.5} cy={160.9} r={5.1} />
//         <path className="st2" d="m79.1 98.9-20.6.4-22.6-22.1v-28" />
//         <circle className="st3" cx={35.9} cy={44} r={5.1} />
//         <path
//           className="st3"
//           d="m100.3 86.5 3 1.2c.6-1.5 0-3.2-1.4-4-1.6-.9-3.6-.4-4.5 1.2l2.9 1.6zM87.2 86.5l2.8-1.6c-.8-1.4-2.6-2-4.1-1.4-1.7.7-2.5 2.6-1.8 4.3l3.1-1.3z"
//         />
//         <path
//           transform="rotate(45.001 93.777 98.133)"
//           className="st5"
//           d="M91 94.9h5.6v6.4H91z"
//         />
//         <path
//           transform="rotate(134.999 95.73 97.975)"
//           className="st6"
//           d="M95.7 96.7h.1v2.5h-.1z"
//         />
//         <path
//           transform="rotate(-45.001 95.12 99.488)"
//           className="st6"
//           d="M95.1 98.9h.1v1.2h-.1z"
//         />
//         <path
//           className="st1"
//           d="m87.9 87.4.1 4.1 3.8 4.5M82.9 108.8l6 7-7.5 7.1 19.5 22.2v7M98 121.2l1-.9-3.3-3.3 8.3-8.2-.3 7.1 2.7 2.8"
//         />
//         <path
//           transform="rotate(45.001 110.215 135.95)"
//           className="st5"
//           d="M107.2 128.9h6V143h-6z"
//         />
//         <circle
//           transform="rotate(-.959 113.569 131.042) scale(1.00004)"
//           className="st9"
//           cx={113.6}
//           cy={131}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 112.743 131.848) scale(1.00004)"
//           className="st9"
//           cx={112.7}
//           cy={131.8}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 111.84 132.605) scale(1.00004)"
//           className="st9"
//           cx={111.8}
//           cy={132.6}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 111.07 133.393) scale(1.00004)"
//           className="st9"
//           cx={111.1}
//           cy={133.4}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 110.155 134.126) scale(1.00004)"
//           className="st9"
//           cx={110.2}
//           cy={134.1}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 109.42 134.915) scale(1.00004)"
//           className="st9"
//           cx={109.4}
//           cy={134.9}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 108.475 135.69) scale(1.00004)"
//           className="st9"
//           cx={108.5}
//           cy={135.7}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 107.686 136.49) scale(1.00004)"
//           className="st9"
//           cx={107.7}
//           cy={136.5}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 106.38 136.897) scale(1.00004)"
//           className="st9"
//           cx={106.4}
//           cy={136.9}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 114.387 131.742) scale(1.00004)"
//           className="st9"
//           cx={114.4}
//           cy={131.7}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 113.598 132.578) scale(1.00004)"
//           className="st9"
//           cx={113.6}
//           cy={132.6}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 112.678 133.281) scale(1.00004)"
//           className="st9"
//           cx={112.7}
//           cy={133.3}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 111.864 134.099) scale(1.00004)"
//           className="st9"
//           cx={111.9}
//           cy={134.1}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 110.998 134.79) scale(1.00004)"
//           className="st9"
//           cx={111}
//           cy={134.8}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 110.184 135.662) scale(1.00004)"
//           className="st9"
//           cx={110.2}
//           cy={135.7}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 109.318 136.396) scale(1.00004)"
//           className="st9"
//           cx={109.3}
//           cy={136.4}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 108.504 137.196) scale(1.00004)"
//           className="st9"
//           cx={108.5}
//           cy={137.2}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 107.614 137.911) scale(1.00004)"
//           className="st9"
//           cx={107.6}
//           cy={137.9}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 106.795 138.729) scale(1.00004)"
//           className="st9"
//           cx={106.8}
//           cy={138.7}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 105.946 139.469) scale(1.00004)"
//           className="st9"
//           cx={105.9}
//           cy={139.5}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 115.17 132.472) scale(1.00004)"
//           className="st9"
//           cx={115.2}
//           cy={132.5}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 114.357 133.253) scale(1.00004)"
//           className="st9"
//           cx={114.4}
//           cy={133.2}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 113.502 134) scale(1.00004)"
//           className="st9"
//           cx={113.5}
//           cy={134}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 112.7 134.805) scale(1.00004)"
//           className="st9"
//           cx={112.7}
//           cy={134.8}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 111.834 135.52) scale(1.00004)"
//           className="st9"
//           cx={111.8}
//           cy={135.5}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 111.02 136.368) scale(1.00004)"
//           className="st9"
//           cx={111}
//           cy={136.4}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 110.148 137.12) scale(1.00004)"
//           className="st9"
//           cx={110.1}
//           cy={137.1}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 109.341 137.884) scale(1.00004)"
//           className="st9"
//           cx={109.3}
//           cy={137.9}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 108.45 138.593) scale(1.00004)"
//           className="st9"
//           cx={108.4}
//           cy={138.6}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 107.637 139.441) scale(1.00004)"
//           className="st9"
//           cx={107.6}
//           cy={139.4}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 106.759 140.169) scale(1.00004)"
//           className="st9"
//           cx={106.8}
//           cy={140.2}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 115.217 133.966) scale(1.00004)"
//           className="st9"
//           cx={115.2}
//           cy={134}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 114.315 134.681) scale(1.00004)"
//           className="st9"
//           cx={114.3}
//           cy={134.7}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 113.526 135.493) scale(1.00004)"
//           className="st9"
//           cx={113.5}
//           cy={135.5}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 112.635 136.238) scale(1.00004)"
//           className="st9"
//           cx={112.6}
//           cy={136.2}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 111.857 137.05) scale(1.00004)"
//           className="st9"
//           cx={111.9}
//           cy={137}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 110.937 137.796) scale(1.00004)"
//           className="st9"
//           cx={110.9}
//           cy={137.8}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 110.172 138.602) scale(1.00004)"
//           className="st9"
//           cx={110.2}
//           cy={138.6}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 109.27 139.311) scale(1.00004)"
//           className="st9"
//           cx={109.3}
//           cy={139.3}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 108.48 140.141) scale(1.00004)"
//           className="st9"
//           cx={108.5}
//           cy={140.1}
//           r={0.3}
//         />
//         <circle
//           transform="rotate(-.959 107.607 140.899) scale(1.00004)"
//           className="st9"
//           cx={107.6}
//           cy={140.9}
//           r={0.3}
//         />
//         <path className="st2" d="M83.6 151v-17.5l8.5-7.4" />
//         <circle
//           cx={93.6}
//           cy={125.1}
//           r={1.7}
//           style={{
//             fill: "none",
//             stroke: "#18c3ff",
//             strokeMiterlimit: 10,
//           }}
//         />
//         <path
//           className="st2"
//           d="M82 108.7c3.5-1.9 12.5-5.7 20.8-1.5.8.4 1.7.8 2.6 1.4M79.5 94.3 58.2 74.2l-.6-31.8 13.6-13.9"
//         />
//         <circle className="st3" cx={73.8} cy={25.3} r={5.1} />
//         <path
//           className="st3"
//           d="M102.2 152.4c.1.4-.1.8-.6.9-1.5.4-3.1.3-4.7.5-1.5.2-3 .3-4.6.2-1.4 0-2.9-.1-4.3-.3-1-.2-1.9-.4-2.4-1.4h-2.2c.1 1.2 4.1 4.9 10.3 4.9 6.1 0 10.3-3.7 10.2-4.8h-1.7z"
//         />
//       </svg>
//     </div>
//   );
// };

// export default BlueSpider;
// {
//   /* <svg id="Line2" viewBox="0 0 435 435">
//         <path
//           id="line"
//           stroke="#233f92"
//           className="stroke"
//           strokeWidth={1}
//           d="M217.5,326.2c0-149.3,0-187.4,0-325.7"
//         />
//       </svg> */
// }
