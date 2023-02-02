import styled from "styled-components";
import { desktopMinWidth } from "../../variables";

const ContactsContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 297px;
  height: 251px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
  border-radius: 9.14368px;
  box-sizing: border-box;
  @media (max-width: ${desktopMinWidth}) {
    display: flex;
  }
`;

const ContactsList = styled.ul`
  width: 246px;
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
`;

const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  border-top: 0.305664px solid #ffffff;
  padding: 12px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 9.11235px;
  line-height: 11px;
`;

const ContactsLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 400;
  font-size: 9.11235px;
  line-height: 11px;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

const AboutCompany = () => {
  return (
    <ContactsContainer>
      <ContactsList>
        <ContactsItem>
          <div>О компании</div>
          <div>ООО «Бронницкий ювелирный завод»</div>
        </ContactsItem>

        <ContactsItem>
          <div>Год основания</div>
          <div>1924</div>
        </ContactsItem>
        <ContactsItem>
          <div>Телефон</div>
          <div>
            <ContactsLink href="tel:+7 (800) 555-25-65">
              +7 (800) 555-25-65
            </ContactsLink>
          </div>
        </ContactsItem>
        <ContactsItem>
          <div>Веб-сайт</div>
          <div>
            <ContactsLink href="http://www.bronnitsy.com">
              http://www.bronnitsy.com
            </ContactsLink>
          </div>
        </ContactsItem>
        <ContactsItem>
          <div>Адрес</div>
          <div>140170, Бронницы, Комсомольский пер., 53</div>
        </ContactsItem>
      </ContactsList>
    </ContactsContainer>
  );
};

export default AboutCompany;
