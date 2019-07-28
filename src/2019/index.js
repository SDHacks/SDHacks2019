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

const boop = styled.div`
    background-color: black;
    position: relative;
    z-index: 100000;

`

class SDHacks2019Page extends Component {

    render() {
        return (
            <>
                <Nav />
                <Hero />
                <About />
                <Tracks />
                <Schedule />
                <Faq />
                <Sponsors />
                <Footer />
            </>
        )
    }
}

export default withRouter(SDHacks2019Page);