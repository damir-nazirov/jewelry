import React from "react";
import styled from "styled-components";

import ContactsLeft from "../contactsLeft/ContactsLeft";
import Socials from "../socials/Socials";
import AboutCompany from "../aboutCompany/AboutCompany";
import logoRus1Line from "../../images/logo/logoRus1Line.svg";
import { desktopMinWidth } from "../../variables";

const Container = styled.div`
  display: flex;
  width: 181px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  z-index: 100;
  padding: 36px 0 38px 0;
  @media (max-width: ${desktopMinWidth}) {
    height: 870px;
    width: 246px;
    padding-top: 59px;
  }
`;

const LogoLink = styled.a`
  display: none;
  cursor: pointer;
  @media (max-width: ${desktopMinWidth}) {
    display: block;
  }
`;

const Photo = styled.div`
  width: 109.2px;
  height: 109.36px;
  background: rgba(255, 255, 255, 0.21);
  border-radius: 50%;
  z-index: 100;
  @media (max-width: ${desktopMinWidth}) {
    width: 148.46px;
    height: 148.67px;
  }
`;

const FullName = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 14.352px;
  line-height: 17px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: ${desktopMinWidth}) {
    font-size: 19.5104px;
    line-height: 23px;
  }
`;

const Position = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 8.23135px;
  line-height: 10px;
  display: flex;
  @media (max-width: ${desktopMinWidth}) {
    font-size: 11.2px;
    line-height: 13px;
  }
`;

const SaveContacts = styled.button`
  width: 100%;
  height: 38.26px;
  background: linear-gradient(0deg, #bb559d, #bb559d), #000000;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 12.5936px;
  line-height: 15px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    box-shadow: -11px -8px 67px 26px rgba(34, 60, 80, 0.18) inset;
  }
  @media (max-width: ${desktopMinWidth}) {
    font-size: 17.12px;
    line-height: 21px;
  }
`;

const LeftSide = () => {
  return (
    <Container>
      <LogoLink href="http://www.bronnitsy.com">
        <img src={logoRus1Line} alt="logo" />
      </LogoLink>
      <Photo />
      <FullName>Константиновский Константин</FullName>
      <Position>Директор по ИТ</Position>
      <ContactsLeft />
      <Socials />
      <SaveContacts>Сохранить в контакты</SaveContacts>
      <AboutCompany />
    </Container>
  );
};

export default LeftSide;
