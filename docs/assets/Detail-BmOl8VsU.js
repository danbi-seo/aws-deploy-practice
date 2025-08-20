import{a as m,j as e}from"./vendor-react-gkahcXv1.js";import{a as l}from"./vendor-react-redux-CWzzWOq3.js";import{s as n}from"./selector-C-aKVj6R.js";import{F as p}from"./FavoriteButton-B3bh_TAn.js";import{d as o}from"./vendor-styled-components-DO2kUeyW.js";import{b as c}from"./vendor-react-router-P1RtHuEa.js";import"./vendor-cookie-CqkleIqs.js";import"./vendor-use-sync-external-store-haIh6AJK.js";import"./vendor-reselect-Cg9BXdu5.js";import"./index-CJqeei3J.js";import"./vendor-react-dom-Vjw8syAx.js";import"./vendor-scheduler-SPyfQU6S.js";import"./vendor-@reduxjs-D-oMsnZ-.js";import"./vendor-redux-BXkGT1VS.js";import"./vendor-immer-CB3DrEpv.js";import"./vendor-redux-thunk-ClJT1hhx.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";const x=o.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: ${r=>r.flipped?"rotateY(180deg)":"rotateY(0deg)"};
`,b=o.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
`,f=o.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;function u({front:r,back:t}){const[s,i]=m.useState(!1);return e.jsxs("div",{className:"flex flex-col justify-center items-center ml-[20px]",children:[e.jsx("button",{onClick:()=>i(d=>!d),className:"w-1/3 flex justify-center items-center py-[5px] px-[10px] bg-white/90 rounded-[8px] shadow-[0_-2px_5px_rgba(0,0,0,0.05)]",children:"뒤집기"}),e.jsxs(x,{flipped:s?"flip":"",children:[e.jsx(b,{src:r}),e.jsx(f,{src:t})]})]})}const a={노말:{base:"#A8A77A",border:"#8A8A6E"},불꽃:{base:"#EE8130",border:"#C26928"},물:{base:"#6390F0",border:"#4F74C2"},풀:{base:"#7AC74C",border:"#629E3E"},전기:{base:"#F7D02C",border:"#C7A623"},얼음:{base:"#96D9D6",border:"#7AB0AE"},격투:{base:"#C22E28",border:"#9B2520"},독:{base:"#A33EA1",border:"#823280"},땅:{base:"#E2BF65",border:"#B59952"},비행:{base:"#A98FF3",border:"#8772C2"},에스퍼:{base:"#F95587",border:"#C7456D"},벌레:{base:"#A6B91A",border:"#859415"},바위:{base:"#B6A136",border:"#91812B"},고스트:{base:"#735797",border:"#5C467A"},드래곤:{base:"#6F35FC",border:"#592AB0"},강철:{base:"#B7B7CE",border:"#9292A3"},악:{base:"#705746",border:"#5A4538"},페어리:{base:"#D685AD",border:"#AC6A8A"},default:{base:"#f0f0f0",border:"#b0b0b0"}},h=o.div`
  font-weight: 700;
  font-size: 1.2em; 
  color: #222;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  text-align: center;
  width: 100%;
`,y=o.div`
  display: inline-block; 
  padding: 4px 10px;
  margin: 0 5px 5px 0; 
  border-radius: 15px;
  font-size: 0.85em;
  font-weight: 600;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  text-align: center;

  // 타입에 따라 동적으로 설정
  background-color: ${r=>{const t=r.$type?r.$type.trim():"default";return(a[t]||a.default).base}};
  border: 1px solid ${r=>{const t=r.$type?r.$type.trim():"default";return(a[t]||a.default).border}};
`;function K(){const{pokemonId:r}=c(),t=l(n(Number(r)));return e.jsxs("div",{className:"flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 bg-gray-100/90  rounded-lg shadow-3xl max-w-4xl mx-auto my-8",children:[e.jsx("div",{className:"flex mb-6 md:mb-0 md:mr-8 w-full md:w-1/2 flex justify-center items-center ",children:e.jsx(u,{front:t.front,back:t.back})}),e.jsxs("div",{className:"flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left",children:[e.jsxs("div",{className:"text-3xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center",children:[e.jsx(h,{style:{fontSize:"inherit",width:"auto"},children:t.name}),e.jsx(p,{pokemonId:Number(r),className:"ml-3 text-red-500"})]}),e.jsx("div",{className:"mb-4 flex flex-wrap justify-center md:justify-start",children:t.types&&t.types.map((s,i)=>e.jsxs(y,{$type:s.type.name,children:[s.type.name,"타입"]},i))}),e.jsx("div",{className:"text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-wrap mb-4",children:t.description}),e.jsxs("div",{className:"text-gray-500 text-sm md:text-base",children:["도감 번호: #",t.id]})]})]})}export{K as default};
