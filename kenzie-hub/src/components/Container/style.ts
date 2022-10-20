import {HTMLAttributes}  from "react";
import styled from "styled-components";


interface iDiv extends HTMLAttributes<HTMLDivElement>{
  modalBG: boolean
}

const Container = styled.div <iDiv>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background-color: ${({modalBG}) =>
   modalBG ? "rgba(0,0,0,0.5)" : "transparent"};
`;

export default Container;
