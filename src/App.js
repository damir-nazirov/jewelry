import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import MainContainer from "./components/mainContainer/MainContainer";
import LeftSide from "./components/leftSide/LeftSide";
import RighttSide from "./components/rightSide/RightSide";



const GlobalSyles = createGlobalStyle`
  body{
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap');
    *{
      font-family: 'Roboto', sans-serif;
    }
  }
`;

const Line = styled.div`
  margin: 42px 0;
  width: 1px;
  height: 385px;
  background-color: white;
`


function App() {
  return (
    <>
      <GlobalSyles />
      <MainContainer>
        <LeftSide />
        <Line/>
       <RighttSide />
      </MainContainer>

    </>
  );
}

export default App;
