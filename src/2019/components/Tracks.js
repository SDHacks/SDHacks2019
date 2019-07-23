import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionHeader,
    SectionContent,
} from '../styles';

import {TracksConstants} from '../constants';

import {mediaBreakpointDown} from '../../breakpoints';

const TracksSection = styled(Page)`
    background: ${TracksConstants.gradient};
    height: auto;
`

const TracksHeader = styled(SectionHeader)`
    display: inline-block;
    //display: inline;
    text-align: center;
    ${mediaBreakpointDown('sm', `
        margin-top: 2rem;
        //width: 100%;
    `)}
`

const TracksImg = styled.img`
    width: 8.5rem;
    margin-top: 3rem;
    //display: block;
`

const ThirdTrackImg = styled.img`
    width: 19rem;
`

const TracksTitle = styled.div`
    //margin-top: -10rem;
    font-size: 2rem;
    display: block;
`

const ThirdTracksTitle = styled.div`
    margin-top: -12rem;
    font-size: 2rem;
    display: block;
    text-align: center;

    /*${mediaBreakpointDown('md', `
        margin-top: auto;
    `)}*/
`

const TracksDescription = styled.div`
    display: block;
    font-size: 1.25rem;
    text-align: left;

    ${mediaBreakpointDown('md', `
        text-align: center;
    `)}
`

class Tracks extends Component {
    render() {
        return (
            <TracksSection id="tracks">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <TracksHeader>Tracks</TracksHeader>
                            </div>
                            <div className="row justify-content-around">
                                <div className="col-md-4 text-center">
                                    <TracksImg src="/tracks/sustainability.svg" />
                                    <TracksTitle>Sustainability</TracksTitle>
                                    <TracksDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</TracksDescription>
                                </div>
                                <div className="col-md-4 text-center">
                                    <TracksImg src="/tracks/wellbeing.svg" />
                                    <TracksTitle>Health and Wellness</TracksTitle>
                                    <TracksDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</TracksDescription>
                                </div>
                                <div className="col-md-4 text-center">
                                    <ThirdTrackImg src="/tracks/education.svg" />
                                    <ThirdTracksTitle>Education</ThirdTracksTitle>
                                    <TracksDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</TracksDescription>
                                </div>
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </TracksSection>
        )
    }
}

export default Tracks;