import React, {Component} from 'react';
import styled from 'styled-components';
import {mediaBreakpointDown} from '../../breakpoints';

import {FooterConstants} from '../constants';

const ContentSection = styled.section`
    background: ${FooterConstants.background};
    z-index: 2;
    text-align: center;
    height: 18rem;
    position: relative;
    transform: translateY(-2px);

    &:before {
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: -1px;
        left: 0;
        background-image: url(/contact-clip.svg);
        background-position: bottom;
        background-size: cover;
        background-repeat: no-repeat;
    }
`

const ContactHeader = styled.h1`
    font-family: 'Reem Kufi', sans-serif;
    color: white;
    z-index: 2;
    line-height: 1.7;

    ${mediaBreakpointDown('sm', `
        font-size: 2rem;
    `)}
`

const ContactLink = styled.a`
    font-family: 'Reem Kufi', sans-serif;
    color: white !important;
`

const FooterContainer = styled.footer`
    margin: 3rem 0 3rem;
`

const FooterLinks = styled.ul`
    font-family: 'Reem Kufi', sans-serif;
    list-style: none;
    padding: 0;
`

const FooterLinkItem = styled.li`
    font-family: 'Reem Kufi', sans-serif;
    font-size: 1.75rem;

    &:not(:first-child) {
      margin-top: 0;

      ${mediaBreakpointDown('md', `
        margin-top: 1rem;
     `)}
    }

    ${props => props.isLogo && `
    `}
`

const FooterLink = styled.a`
    font-family: 'Reem Kufi', sans-serif;
    color: #004666 !important;

    i {
    }
`

const FooterLogo = styled.img`
    display: block;
    margin: auto;

    width: 50%;

    ${mediaBreakpointDown('md', `
        padding: 1em;
        width: 50%;
     `)}
`

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <ContentSection className="contact" id="contact">
                    <div className="container-fluid d-flex align-items-center h-100">
                        <ContactHeader className="m-auto">
                            Talk to us at <ContactLink className="contact__link" href="mailto:sdhacks@tesc.ucsd.edu" target="_blank">sdhacks@tesc.ucsd.edu</ContactLink> if you have any questions.
                        </ContactHeader>
                    </div>
                </ContentSection>
                <FooterContainer className="footer" id="footer">
                    <div className="container-fluid">
                        <FooterLinks className="flex-column ml-md-auto d-flex flex-md-row justify-content-between text-center text-md-left">
                            <FooterLinkItem>
                                <FooterLink target="_new" href="https://www.facebook.com/ucsd.tesc/">
                                <i className="fab fa-facebook-square" />
                                </FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLink target="_new" href="https://twitter.com/ucsdtesc">
                                <i className="fab fa-twitter-square" />
                                </FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem isLogo={true}>
                                <FooterLink href="http://tesc.ucsd.edu" target="_new">
                                    <FooterLogo src="/tesc-logo.svg"></FooterLogo>
                                </FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLink target="_new" href="https://medium.com/triton-engineering-student-council">
                                <i className="fab fa-medium" />
                                </FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLink target="_new" href="mailto://sdhacks@tesc.ucsd.edu">
                                <i className="fas fa-envelope-square" />
                                </FooterLink>
                            </FooterLinkItem>
                        </FooterLinks>
                    </div>
                </FooterContainer>
            </div>
        )
    }
}

export default Footer;