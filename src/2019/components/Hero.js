import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    WhiteButton
} from '../styles';

import {mediaBreakpointDown} from '../../breakpoints';

const HeroSection = styled(Page)`
    //background: url("/hero pic.svg");
    //background-size: 100% 100%;
    //width: 100%
    //background-repeat: no-repeat;
    //min-height: 100%;
    //height: auto;

    //min-height: 45rem;
    background-position: 50% 100%;

    //background-image: url('/hero pic.svg');
    //background-size: 100% 100%;
    //background-size: cover;
    //background-repeat: no-repeat;
    //height: 30rem;

    //width: 100%;
    background-image: url('/hero pic.svg');
    background-repeat: no-repeat;
    background-size: cover;
    //min-height: 60rem;
    height: auto;
    position: relative;
`;

/*const HeroContainer = styled(Container)`
    background-image: url("/hero pic.svg");
    background-repeat: no-repeat;
    background-size: auto;
`;*/

const HeroImage = styled.img`
    width: 60%;

    ${mediaBreakpointDown('md', `

        margin-top: 3rem;
    `)}
`;

const HeroCopy = styled.div`
    font-size: 1.5rem;
    color: white;
`

const HeroGraphic = styled.img`
    width: 90%;
    
    ${mediaBreakpointDown('md', `
        margin-bottom: 1rem;
    `)}
`

const HeroContent = styled.div`
    font-family: 'Reem Kufi', sans-serif;
    color: white;
    text-align: center;
`

const CTA = styled(WhiteButton)`
    //margin-top: 2rem;
    //margin-bottom: 2rem;
    //padding:  0.5rem 1rem;

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

                                        <HeroContent>October 25 - 27</HeroContent>
                                        <HeroContent>RIMAC, UC San Diego</HeroContent>

                                        <Button href="https://www.tesc.events" target="_blank" className="text-white">
                                            <CTA className="btn btn-outline-light" >
                                                Apply
                                            </CTA>                      
                                        </Button>
                                        <Button href="https://www.tesc.events" target="_blank" className="text-white">
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