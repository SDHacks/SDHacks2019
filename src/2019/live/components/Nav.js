import React, {Component} from 'react';
import styled from 'styled-components';

import {
    PURPLE
} from '../../constants'

import {
    HEADER_BLUE
} from '../constants'

import {withRouter} from 'react-router-dom';
import { mediaBreakpointDown } from '../../../breakpoints';

const NavContainer = styled.nav`
    width: 100%;
    padding-left: 70px;
    padding-right: 55px;
    font-family: 'Reem Kufi', sans-serif;

    ${mediaBreakpointDown('md', `
        padding: 15px;
    `)}
`

// SD Hacks Logo
const NavLogo = styled.img`
    width: 3.5rem;
    ${mediaBreakpointDown('md', `
        width: 1.7rem;
        margin-left: 45px;
    `)}
`

// SD Hacks 2019
const NavText = styled.span`
    font-family: 'Reem Kufi', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: normal;
    text-align: left;
    margin-left: 1rem;
    vertical-align: middle;
    white-space: nowrap;

    color: #000000;

    ${mediaBreakpointDown('md', `
        display: inline-block;
        font-size: 18px;
    `)}
`

// Live
const NavTextBox = styled.span`
    background: ${HEADER_BLUE};
    color: white;
    border-radius: 5px;
    font-family: 'Reem Kufi', sans-serif;
    font-style: normal;
    font-size: 30px;
    line-height: normal;
    text-align: left;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-left: 1rem;
    vertical-align: middle;
    white-space: nowrap;

    ${mediaBreakpointDown('md', `
        display: inline-block;
        font-size: 18px;
    `)}
`

// To hold the logo + SD Hacks 2019 Live
const NavTitle = styled.span`
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;

    ${mediaBreakpointDown('md', `
        display: block;
    `)}
`

// Social media icons
const NavIcon = styled.img`
    display: block;
    margin: auto;
    width: 2rem;
`

class HackXXLiveNav extends Component {

    render() {
        return (
            <NavContainer className="navbar navbar-expand-lg navbar-light bg-light">
                <NavTitle>
                    <NavLogo src="/logo.svg"/>
                    <NavText>SD Hacks 2019</NavText>
                    <NavTextBox>Live</NavTextBox>
                </NavTitle>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.facebook.com/SDHacks/" target="_blank"> <NavIcon src="/live/facebook.svg"></NavIcon> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.instagram.com/ucsdtesc/" target="_blank"> <NavIcon src="/live/instagram.svg"></NavIcon> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://twitter.com/ucsdtesc" target="_blank"> <NavIcon src="/live/twitter.svg"></NavIcon> </a>
                    </li>
                    </ul>
                </div>
            </NavContainer>
        )
    }
}

export default withRouter(HackXXLiveNav);