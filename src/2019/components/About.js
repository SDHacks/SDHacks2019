import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionHeader,
    SectionContent,
} from '../styles';

import {AboutConstants} from '../constants';

import {mediaBreakpointDown} from '../../breakpoints';

const AboutSection = styled(Page)`
    background: ${AboutConstants.gradient};
    height: auto;
`

const AboutHeader = styled(SectionHeader)`
    ${mediaBreakpointDown('sm', `
        margin-top: 2rem;
        text-align: center;
        width: 100%;
    `)}
`

const AboutContent = styled.div`
    padding-left: 0;
    margin-left: 0;
`

class About extends Component {
    render() {
        return (
            <AboutSection id="about">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent>
                        <div className="container-fluid">
                            <AboutHeader>About SD Hacks</AboutHeader>
                            <div className="row my-4">
                                <div className="col-md-6">
                                    <AboutContent>SD Hacks has been one of the largest hackathons in California since its inception back in 2015 and is excited to be celebrating its 5th anniversary. We take pride in being a fully student organized event, while partnering with numerous other student-run engineering organizations at UC San Diego. SD Hacks 2019 will provide the support and tools necessary to develop projects ranging from VR/AR games to microcontroller based technologies. With mentorship coming from a variety of engineering disciplines and companies, SD Hacks 2019 is shaping up to become an unforgettable 36 hours of collaboration, empowerment, and innovation.</AboutContent>
                                </div>
                                <div className="col-md-6">
                                    <img src="/sea-animals/turtle.svg"></img>
                                </div>
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </AboutSection>
        )
    }
}

export default About;