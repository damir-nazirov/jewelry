import styled from "styled-components";
import instagram from "../../images/socials/instagram.svg";
import wa from "../../images/socials/WA.svg";
import telegram from "../../images/socials/telegram.svg";
import linkedin from "../../images/socials/linkedin.svg";
import facebook from "../../images/socials/facebook.svg";
import viber from "../../images/socials/viber.svg";
import { smallDivices } from "../../variables";

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
  @media (max-width: ${smallDivices}) {
    width: 27.33px;
  }
`;

const Socials = () => {
  return (
    <CocialsList>
      <li>
        <SocialLink>
          <SocialImage src={instagram} />
        </SocialLink>
      </li>
      <li>
        <SocialLink>
          <SocialImage src={wa} />
        </SocialLink>
      </li>
      <li>
        <SocialLink>
          <SocialImage src={telegram} />
        </SocialLink>
      </li>
      <li>
        <SocialLink>
          <SocialImage src={viber} />
        </SocialLink>
      </li>
      <li>
        <SocialLink>
          <SocialImage src={facebook} />
        </SocialLink>
      </li>
      <li>
        <SocialLink>
          <SocialImage src={linkedin} />
        </SocialLink>
      </li>
    </CocialsList>
  );
};

export default Socials;
