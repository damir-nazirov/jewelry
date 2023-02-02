import styled from "styled-components";
import shine from "../../images/shine.svg";
import { desktopMinWidth } from "../../variables";

const Container = styled.div`
  width: 626px;
  height: 469.5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  padding: 0 40px;
  border: 0.5px solid #ffffff;
  border-radius: 14px;
  overflow: hidden;
  color: #ffffff;
  position: relative;
  background-image: url(${shine});
  background-repeat: no-repeat;
  background-position: 326.45px 337.45px;
  background-size: 316px 180px;
  @media (max-width: ${desktopMinWidth}) {
    width: 345px;
    height: 810px;
    border: none;
    border-radius: 0;
    justify-content: center;
    background-position: 83px 625px;
    background-size: 265px 150px;
  }
  &::before {
    content: "";
    position: absolute;
    width: 508.01px;
    height: 508.01px;
    left: -243.92px;
    top: -259.81px;
    background: #bb559d;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    filter: blur(152.832px);
    @media (max-width: ${desktopMinWidth}) {
      width: 647px;
      height: 647px;
      left: -398px;
      top: -430px;
      filter: blur(194.645px);
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 508.01px;
    height: 508.01px;
    left: 391.25px;
    top: 299.55px;
    background: #bb559d;
    filter: blur(152.832px);
    @media (max-width: ${desktopMinWidth}) {
      width: 532px;
      height: 532px;
      left: 189px;
      top: 583px;
      filter: blur(160.048px);
    }
  }
`;

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
