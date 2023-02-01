import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import MainContainer from "./components/mainContainer/MainContainer";
import LeftSide from "./components/leftSide/LeftSide";
import RighttSide from "./components/rightSide/RightSide";
import { smallDivices } from "./variables";

const GlobalSyles = createGlobalStyle`
  body{
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Exo 2', sans-serif;
  }
`;

const Line = styled.div`
  margin-top: 35px;
  width: 0.6px;
  height: 394px;
  background-color: white;
  padding: 0;
  @media (max-width: ${smallDivices}) {
    display: none;
  }
`;

function App() {
  return (
    <>
      <GlobalSyles />
      <MainContainer>
        <LeftSide />
        <Line />
        <RighttSide />
      </MainContainer>
    </>
  );
}

export default App;
