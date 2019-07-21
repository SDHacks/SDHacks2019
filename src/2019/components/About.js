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

class About extends Component {
    render() {
        return (
            <AboutSection id="about">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent>
                        <div className="container-fluid">
                            <div className="row">
                                <AboutHeader>About SD Hacks</AboutHeader>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-6">Minecraft is a sandbox video game originally created by Markus "Notch" Persson, maintained by Mojang AB, and part of Xbox Game Studios (then known as Microsoft Studios). It is heavily inspired by Infiniminer. From its creation, Minecraft was developed almost exclusively by Notch until Jens "Jeb" Bergensten started working with him, and has since become head of its development. It features music by Daniel "C418" Rosenfeld and paintings by Kristoffer Zetterstrand.</div>
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