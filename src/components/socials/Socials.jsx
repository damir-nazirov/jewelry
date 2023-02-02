import styled from "styled-components";
import instagram from "../../images/socials/instagram.svg";
import whatsApp from "../../images/socials/whatsApp.svg";
import telegram from "../../images/socials/telegram.svg";
import viber from "../../images/socials/viber.svg";
import facebook from "../../images/socials/facebook.svg";
import linkedin from "../../images/socials/linkedin.svg";

import { desktopMinWidth } from "../../variables";

const socials = [instagram, whatsApp, telegram, viber, facebook, linkedin];

const CocialsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  position: relative;
`;

const SocialLink = styled.a`
  cursor: pointer;
`;

const SocialImage = styled.img`
  width: 20px;
  @media (max-width: ${desktopMinWidth}) {
    width: 27.33px;
  }
`;

const SocialListItem = ({ src }) => {
  return (
    <li>
      <SocialLink>
        <SocialImage src={src} />
      </SocialLink>
    </li>
  );
};

const Socials = () => {
  return (
    <CocialsList>
      {socials.map((item) => {
        return <SocialListItem key={item.toString()} src={item} />;
      })}
    </CocialsList>
  );
};

export default Socials;
