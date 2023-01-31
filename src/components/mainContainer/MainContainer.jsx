import { Children } from "react";
import styled from "styled-components";
// import blesk from "./images/blesk.svg"
import blesk from "../../images/blesk.svg"


const Container = styled.div`
  width: 626px;
  height: 469.5px;
  display: flex;
  justify-content: space-around;
  background-color: #000000;
  /* height: 100vh; */
  border: 0.5px solid #FFFFFF;
  border-radius: 14px;
  overflow: hidden;
  color: #FFFFFF;
  position: relative;
  background-image: url(${blesk});
  background-repeat: no-repeat;
  background-position: right bottom;
  &::before {
    content: "";
    position: absolute;
    width: 508.01px;
    height: 508.01px;
    left: -243.92px;
    top: -259.81px;
    background: #BB559D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    filter: blur(152.832px);
  }
  &::after {
    content: "";
    position: absolute;
    width: 508.01px;
    height: 508.01px;
    left: 391.25px;
    top: 299.55px;
    background: #BB559D;
    filter: blur(152.832px);
  }
`;


const MainContainer = ({children}) => {
    return (
       <Container>{children}</Container>
    );
};

export default MainContainer;


