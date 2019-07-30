import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionHeader,
    SectionContent,
} from '../styles';

import {mediaBreakpointDown} from '../../breakpoints';

const TracksSection = styled(Page)`
    height: auto;
    position: relative;
    z-index: 2;
`

const TracksHeader = styled(SectionHeader)`
    display: inline-block;
    text-align: center;
    ${mediaBreakpointDown('sm', `
        margin-top: 2rem;
    `)}
`

const TracksImg = styled.img`
    width: 8.5rem;
    margin-top: 3rem;
`

const ThirdTrackImg = styled.img`
    width: 19rem;
`

const TracksTitle = styled.div`
    font-size: 2rem;
    display: block;
`

const ThirdTracksTitle = styled.div`
    margin-top: -12rem;
    font-size: 2rem;
    display: block;
    text-align: center;
`

const TracksDescription = styled.div`
    display: block;
    text-align: left;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 45px;
    padding: 1.25rem 2rem;
    z-index: 10000;
    position: relative;

    ${mediaBreakpointDown('md', `
        text-align: center;
    `)}
`

const Fish = styled.img`
    width: 80%
    margin-top: 1rem;
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
                                    <TracksDescription>Whether it’s tackling climate change or saving sea turtles, create and bring to life something that will help contribute towards solving and/or educating about real world environmental challenges.</TracksDescription>
                                </div>
                                <div className="col-md-4 text-center">
                                    <TracksImg src="/tracks/wellbeing.svg" />
                                    <TracksTitle>Health and Wellness</TracksTitle>
                                    <TracksDescription>Because our lives are getting busier every day, we are squeezing more and more activities in a single day. With this, it becomes difficult to take care of ourselves. Devise a solution that allows people to live a healthier life amidst the daily chaos of society.</TracksDescription>
                                </div>
                                <div className="col-md-4 text-center">
                                    <ThirdTrackImg src="/tracks/education.svg" />
                                    <ThirdTracksTitle>Education</ThirdTracksTitle>
                                    <TracksDescription>With more students receiving a college education, it is imperative that they can seize every opportunity. Whether it's taking a step into academia or improving the quality of one's education, construct a project that will assist in expanding students' knowledge.</TracksDescription>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <Fish src="/sea-animals/fish.svg" />
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </TracksSection>
        )
    }
}

export default Tracks;