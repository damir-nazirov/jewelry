import styled from "styled-components";
import instagram from "../../images/socials/instagram.svg"
import wa from "../../images/socials/WA.svg"
import telegram from "../../images/socials/telegram.svg"
import linkedin from "../../images/socials/linkedin.svg"
import facebook from "../../images/socials/facebook.svg"
import viber from "../../images/socials/viber.svg"


const CocialsList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    position: relative;
    
    /* margin: 0; */
    /* &::before {
        content: '';
        width: 181px;
        height: 0px;
        position: absolute;
        border: 0.305664px solid #FFFFFF;
        left: 0;
        top: -25px;
    } */
`

const SocialsItem = styled.li`
    
`

const SocialLink = styled.a`
    cursor: pointer;
`

const SocialImage = styled.img`
    
`




const Socials = () => {
    return (
        <CocialsList>
            <SocialsItem>
                <SocialLink>
                    <SocialImage src={instagram}/>
                </SocialLink>
            </SocialsItem>
            <SocialsItem>
                <SocialLink>
                    <SocialImage src={wa}/>
                </SocialLink>
            </SocialsItem>
            <SocialsItem>
                <SocialLink>
                    <SocialImage src={telegram}/>
                </SocialLink>
            </SocialsItem>
            <SocialsItem>
                <SocialLink>
                    <SocialImage src={viber}/>
                </SocialLink>
            </SocialsItem>
            <SocialsItem>
                <SocialLink>
                    <SocialImage src={facebook}/>
                </SocialLink>
            </SocialsItem>
            <SocialsItem>
                <SocialLink>
                    <SocialImage src={linkedin}/>
                </SocialLink>
            </SocialsItem>




            
        </CocialsList>
    );
};

export default Socials;