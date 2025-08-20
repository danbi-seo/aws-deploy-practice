import{j as i}from"./vendor-react-gkahcXv1.js";import{a as c,u as m}from"./vendor-react-redux-CWzzWOq3.js";import{f as s}from"./index-CJqeei3J.js";import{d as p}from"./vendor-styled-components-DO2kUeyW.js";const g="/assets/pokeball-QwmNaFou.svg",f="/assets/pokeball2-BdVgtFU9.svg",u=p.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px; // 버튼 크기 조절
  height: 30px; // 버튼 크기 조절

  img {
    width: 24px; // 이미지 크기 조절
    height: 24px; // 이미지 크기 조절
    object-fit: contain;
    transition: transform 0.2s ease-in-out;
  }
  &:active img {
    transform: scale(0.9); 
  }
`;function x({pokemonId:t}){const e=c(o=>o.favorite.some(n=>n===t)),r=m(),a=e?f:g;return i.jsx(u,{onClick:o=>{o.stopPropagation(),r(e?s.actions.removeFromFavorite({pokemonId:t}):s.actions.addToFavorite({pokemonId:t}))},children:i.jsx("img",{src:a})})}export{x as F};
