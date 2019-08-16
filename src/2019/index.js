import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

// import all the components here
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import Faq from './components/Faq';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

import styled from 'styled-components';

import {WrapperConstants} from './constants';
import {mediaBreakpointDown} from '../breakpoints';

import {Badge} from './styles';

import {
    Page
} from './styles';

const Boop = styled(Page)`
    //margin-top: -4rem;
    background: url("/rocks_cutoff_with_turtle.svg"), ${WrapperConstants.gradient};
    background-repeat: no-repeat;

    ${mediaBreakpointDown('md', `
        background: ${WrapperConstants.gradient};
    `)}
`

class SDHacks2019Page extends Component {

    render() {
        return (
            <>
                <Nav />
                <Hero />
                <Boop>
                    <About />
                    <Tracks />
                    <Schedule />
                    <Faq />
                </Boop>
                <Sponsors />

                <Footer />

                <Badge href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white" target="_blank">
                    <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg" alt="Major League Hacking 2020 Hackathon Season" style={{width:'100%'}}/>
                </Badge>
            </>
        )
    }
}

export default withRouter(SDHacks2019Page);