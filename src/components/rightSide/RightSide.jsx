import styled from "styled-components";
import logoRus from "../../images/logo/logo_2_stroki_rus.svg"


const Container = styled.div`
    display: flex;
    width: 279px;
    height: 315px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    z-index: 100;
    padding: 52px 0;
`
const LogoLink = styled.a`
    cursor: pointer;
`

const ContactsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 278.77px;
    height: 197.46px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(9.91159px);
    border-radius: 8.25966px;
    /* padding: 34px 0; */
`

const ContactsList = styled.ul`
    width: 237px;
    height: 120px;
    list-style: none;
    font-style: normal;
    font-weight: 400;
    font-size: 8.23135px;
    line-height: 10px;
    text-decoration: none;
    color: inherit;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 34px 0;
    border-bottom: 0.305664px solid #FFFFFF;
    padding-bottom: 20px;
`

const ContactsItem = styled.li`
    display: flex;
    justify-content: space-between;
    /* padding-left: 30px; */
    position: relative;
    border-top: 0.305664px solid #FFFFFF;
    padding: 12px 0;
    /* &::before {
        content: '';
        width: 181px;
        height: 0px;
        position: absolute;
        border: 0.305664px solid #FFFFFF;
        left: -10px;
        top: -10px;
    } */

`











const RighttSide = () => {
    return (
        <Container>
            <LogoLink>
                <img src={logoRus} alt="logo" />
            </LogoLink>
            <ContactsContainer>
                <ContactsList>
                    <ContactsItem> <div>Веб сайт</div><div>http://www.bronnitsy.com</div> </ContactsItem>
                    <ContactsItem> <div>Телефон</div><div>+7 (926) 359-22-44</div> </ContactsItem>
                    <ContactsItem> <div>E-mail</div><div>zaa495@gmail.com</div> </ContactsItem>
                    <ContactsItem> <div>Адрес</div><div>115093, Партийный переулок 1 к46</div> </ContactsItem>
                </ContactsList>

            </ContactsContainer>

        </Container>
    );
};

export default RighttSide;