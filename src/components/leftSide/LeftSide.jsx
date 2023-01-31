import React from 'react';
import styled from "styled-components";

import ContactsLeft from '../contactsLeft/ContactsLeft';
import Socials from '../socials/Socials';


const Container = styled.div`
    display: flex;
    width: 181px;
    /* height: 380px; */
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    z-index: 100;
    padding: 38px 0;
    /* padding-top: 38px; */
    /* border-right: 0.305664px solid #FFFFFF;
    padding-right: 75px; */
`

const Photo = styled.div`
    width: 109.2px;
    height: 109.36px;
    background: rgba(255, 255, 255, 0.21);
    /* background-color: red; */
    border-radius: 54.6024px;
    z-index: 100;
`

const FullName = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 14.352px;
    line-height: 17px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
`

const Position = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 8.23135px;
    line-height: 10px;
    display: flex;
`

const SaveContacts = styled.button`
    width: 100%;
    height: 38.26px;
    background: linear-gradient(0deg, #BB559D, #BB559D), #000000;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 12.5936px;
    line-height: 15px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
`





const LeftSide = () => {
    return (
        <Container>
            <Photo />
            <FullName>Константиновский Константин</FullName>
            <Position>Директор по ИТ</Position>
            <ContactsLeft />
            <Socials />
            <SaveContacts>Сохранить в контакты</SaveContacts>
        </Container>
    );
};

export default LeftSide;