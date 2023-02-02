import styled from "styled-components";
import logoRus2Lines from "../../images/logo/logoRus2Lines.svg";
import { desktopMinWidth } from "../../variables";

const Container = styled.div`
  display: flex;
  width: 279px;
  height: 315px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  z-index: 100;
  padding: 52px 0;
  @media (max-width: ${desktopMinWidth}) {
    display: none;
  }
`;
const LogoLink = styled.a`
  cursor: pointer;
`;

const ContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 278.77px;
  height: 197.46px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(9.91159px);
  border-radius: 8.25966px;
  opacity: 0.94;
`;

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
  border-bottom: 0.305664px solid #ffffff;
  padding-bottom: 20px;
`;

const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  border-top: 0.305664px solid #ffffff;
  padding: 12px 0;
`;

const ContactsLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

const RighttSide = () => {
  return (
    <Container>
      <LogoLink href="http://www.bronnitsy.com">
        <img src={logoRus2Lines} alt="logo" />
      </LogoLink>
      <ContactsContainer>
        <ContactsList>
          <ContactsItem>
            <div>Веб сайт</div>
            <div>
              <ContactsLink href="http://www.bronnitsy.com">
                http://www.bronnitsy.com
              </ContactsLink>
            </div>
          </ContactsItem>
          <ContactsItem>
            <div>Телефон</div>
            <div>
              <ContactsLink href="tel:+7 (926) 359-22-44">
                +7 (926) 359-22-44
              </ContactsLink>
            </div>
          </ContactsItem>
          <ContactsItem>
            <div>E-mail</div>
            <div>
              <ContactsLink href="mailto:zaa495@gmail.com">
                zaa495@gmail.com
              </ContactsLink>
            </div>
          </ContactsItem>
          <ContactsItem>
            <div>Адрес</div>
            <div>115093, Партийный переулок 1 к46</div>
          </ContactsItem>
        </ContactsList>
      </ContactsContainer>
    </Container>
  );
};

export default RighttSide;
