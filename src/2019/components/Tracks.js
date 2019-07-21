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
`

const ThirdTrackImg = styled.img`
    width: 19rem;
`

const TracksTitle = styled.div`
    margin-top: -10rem;
    font-size: 2rem;
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
                                </div>
                                <div className="col-md-4 text-center">
                                    <TracksImg src="/tracks/wellbeing.svg" />
                                </div>
                                <div className="col-md-4 text-center">
                                    <ThirdTrackImg src="/tracks/education.svg" />
                                </div>
                            </div>

                            <TracksTitle className="row justify-content-around">
                                <div className="col-md-4 text-center">
                                    Sustainability
                                </div>
                                <div className="col-md-4 text-center">
                                    Heath and Wealthness
                                </div>
                                <div className="col-md-4 text-center">
                                    Education
                                </div>
                            </TracksTitle>
                        </div>
                    </SectionContent>
                </Container>
            </TracksSection>
        )
    }
}

export default Tracks;