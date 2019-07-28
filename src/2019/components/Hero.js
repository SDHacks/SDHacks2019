import React, {Component} from 'react';
import styled from 'styled-components';


import {
    Page,
    Container,
    WhiteButton
} from '../styles';

import {mediaBreakpointDown} from '../../breakpoints';

const HeroSection = styled(Page)`
    // this works on my laptop but not macs (about us is too high on macs?)
    /*background-image: url('/pls work.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 0%;
    width: 100%;
    margin-top: 4rem;
    padding-top: 5rem;
    padding-bottom: 4.5rem;*/

    background: url('/hero.svg'), linear-gradient(45deg, #DDF2FA, #C4E9F7, #81B9F0);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom 100%;
    min-height: 130vh;

    width: 100%;
`;

/*const HeroContainer = styled(Container)`
    background-image: url("/hero pic.svg");
    background-repeat: no-repeat;
    background-size: auto;
`;*/

const why = styled.img`
    width: 100%;
    z-index: 1;
`

const HeroImage = styled.img`
    width: 60%;
    margin-top: -10rem;

    ${mediaBreakpointDown('md', `

        //margin-top: 3rem;
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
                                        {/*<Button href="https://www.tesc.events" target="_blank" className="text-white">
                                            <CTA className="btn btn-outline-light" >
                                                Volunteer
                                            </CTA>                      
                                        </Button>*/}
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