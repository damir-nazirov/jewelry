import styled from "styled-components";
import phone from "../../images/phone.svg";
import email from "../../images/email.svg";
import home from "../../images/home.svg";
import { smallDivices } from "../../variables";

const ContactsListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const ContactsList = styled.ul`
  width: 100%;
  /* height: 104px; */
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
  border-bottom: 0.305664px solid #ffffff;
`;

const ContactsItem = styled.li`
  position: relative;
  border-top: 0.305664px solid #ffffff;
  padding: 12px 0;
  &:hover:nth-child(2) {
    text-decoration: underline;
  }
  @media (max-width: ${smallDivices}) {
    padding-top: 13.5px;
  }
`;

const ContactsLink = styled.a`
  width: 100%;
  padding-left: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 8.23135px;
  line-height: 10px;
  color: #ffffff;
  text-decoration: none;
  @media (max-width: ${smallDivices}) {
    font-size: 11.1899px;
    line-height: 13px;
  }
  &::before {
    content: "";
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 12px;
  }
`;

const ContactsLeft = () => {
  return (
    <ContactsListWrapper>
      <ContactsList>
        <ContactsItem>
          <ContactsLink url={phone} href="tel:8-800-302-0780">
            +7 (926) 359-22-44
          </ContactsLink>
        </ContactsItem>
        <ContactsItem>
          <ContactsLink url={email} href="mailto:zaa495@gmail.com">
            zaa495@gmail.com
          </ContactsLink>
        </ContactsItem>
        <ContactsItem>
          <ContactsLink url={home}>
            115093, Партийный переулок 1 к46
          </ContactsLink>
        </ContactsItem>
      </ContactsList>
    </ContactsListWrapper>
  );
};

export default ContactsLeft;
