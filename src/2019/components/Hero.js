import React, {Component} from 'react';
import styled from 'styled-components';


import {
    Page,
    Container,
    WhiteButton
} from '../styles';

import {mediaBreakpointDown} from '../../breakpoints';

const HeroSection = styled(Page)`
    background: url('/hero.svg'), linear-gradient(45deg, #DDF2FA, #C4E9F7, #81B9F0);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom 100%;
    min-height: 120vh;
    width: 100%;

    ${mediaBreakpointDown('md', `
        background-position: bottom;
        background-size: contain;
    `)}
`;

const HeroImage = styled.img`
    width: 60%;
    margin-top: -10rem;

    ${mediaBreakpointDown('md', `
        margin-top: -9rem;
    `)}
`;

const HeroCopy = styled.div`
    font-size: 1.5rem;
    color: white;
`

const HeroContent = styled.div`
    font-family: 'Reem Kufi', sans-serif;
    color: white;
    text-align: center;
`

const CTA = styled(WhiteButton)`
    margin-top: 1rem;
    margin-bottom: 1rem;

    &:hover {
        color: #4592AD !important;
    }
`

const Button = styled.a`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`

class Hero extends Component {
    render() {
        return (
            <HeroSection className="align-items-center justify-content-center d-flex pt-5">
                <div className="align-items-center justify-content-center d-flex w-100" id="hero">
                    <div className="container-fluid align-items-center justify-content-center d-flex mt-5" style={{minHeight:'100%'}} >
                        <Container className="row w-100">
                            <div className="col-md-6 align-items-center d-flex justify-content-center flex-column">
                            </div>

                            <div className="col-md-6 align-items-center d-flex justify-content-center flex-column">
                                <HeroImage src="/logo.svg" className="img-fluid" />
                                <HeroCopy className="text-center">

                                    <HeroContent>February 19 - 21, 2021</HeroContent>
                                    <HeroContent>Completely Virtual</HeroContent>

                                    <Button href="https://www.tesc.events/register/sdhacks2019" target="_blank" className="text-white">
                                        <CTA className="btn btn-outline-light" >
                                            Apply
                                        </CTA>                      
                                    </Button>
                                    <Button href="https://tesc.typeform.com/to/vgXWp2" target="_blank" className="text-white">
                                        <CTA className="btn btn-outline-light" >
                                            Volunteer
                                        </CTA>                      
                                    </Button>
                                </HeroCopy>
                            </div>
                        </Container>
                    </div>
                </div>
            </HeroSection>
        )
    }
}

export default Hero;