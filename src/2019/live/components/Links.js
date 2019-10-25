import React, {Component} from 'react';
import styled from 'styled-components';

import {withRouter} from 'react-router-dom';
import {mediaBreakpointDown} from '../../../breakpoints';

const LinkRect = styled.span`
    display: inline-block;
    vertical-align: middle;
    padding: 1rem;
 
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 
        rgba(0, 0, 0, 0.25);
    border-radius: 50px;

    ${mediaBreakpointDown('lg-xl', `
        display: block;
        padding: none;
        margin-left: 40px;
        margin-right: 40px;
    `)}
`

const LinkText = styled.a`
    font-style: normal;
    font-size: 25px;
    line-height: normal;
    color: #000000;
    font-decoration: none;
    border: none;
    padding-right: 1rem;
    
    ${mediaBreakpointDown('lg-xl', `
        padding: none;
        margin: none;
        font-size: 20px;
    `)}
`

const LinkIcon = styled.img`
    padding-right: 1rem;
    width: 60px;

    ${mediaBreakpointDown('lg-xl', `
        margin: none;
        padding: none;
    `)}
`

const Divider = styled.img`
    ${mediaBreakpointDown('lg-xl', `
        content: url('/live/horizontal-divider.svg');
        margin: none;
        padding: none;
    `)}
`

const LinkGroup = styled.span`
    white-space: nowrap;
    vertical-align: middle;

    ${mediaBreakpointDown('lg-xl', `
        display: block;
        padding-top, padding-bottom: 0;
        margin-top, margin-bottom: 0;
    `)}
`

class Links extends Component {

    render() {
        return (
            <LinkRect>
                <LinkGroup><LinkText className="btn btn-outline-light" href="https://sdhacks2019.slack.com/join/shared_invite/enQtODAyNTMxNDI1MTQxLThhNWRiNjAwYzgxMmU1YTI4YWNiZWUzZjIzNjM2MGE5MmQwNjRjNThlZjg5MzE3MDVkNjhhYzUzYTNlMDBkZGY" target="_blank"><LinkIcon src="/live/slack.svg"/>Slack</LinkText></LinkGroup>
                <Divider src="/live/divider.svg"/>
                <LinkGroup><LinkText className="btn btn-outline-light" href="https://sd-hacks-2019.devpost.com/" target="_blank"><LinkIcon src="/live/devpost.svg"/>Devpost</LinkText></LinkGroup>
                <Divider src="/live/divider.svg"/>
                <LinkGroup><LinkText className="btn btn-outline-light" href="https://drive.google.com/file/d/1Cl20KbCEXGyUOk4v1r0XOT-q-O1YFSxD/view" target="_blank"><LinkIcon src="/live/challenges.png"/>Challenges</LinkText></LinkGroup>
                <Divider src="/live/divider.svg"/>
                <LinkGroup><LinkText className="btn btn-outline-light" href="https://hackmd.io/@sdhacks/ByGRFqctH" target="_blank"><LinkIcon src="/live/faq.svg"/>FAQ</LinkText></LinkGroup>
                <Divider src="/live/divider.svg"/>
                <LinkGroup><LinkText className="btn btn-outline-light" href="https://docs.google.com/document/d/1RDOkY7Wtv3bt_VyzfIiczSEE5MC5xeO_E3fKICsQ41o/edit?usp=sharing" target="_blank"><LinkIcon src="/live/starter.png"/>Starter Pack</LinkText></LinkGroup>
            </LinkRect>
        )
    }

}

export default withRouter(Links);