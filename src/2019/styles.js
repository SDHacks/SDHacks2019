import styled from 'styled-components';
import {mediaBreakpointDown} from '../breakpoints';

export const Page = styled.section`
    width: 100%;
`
export const Container = styled.div`
    max-width: 80%;
    height: 100%;
    ${mediaBreakpointDown('sm', `
        text-align: center;
    `)}
`;

// put font here once you figure it out
export const SectionHeader = styled.h1`
    color: white;
    font-weight: 800;
    font-size: 3rem;
    margin-top: 2rem;
    font-family: 'Reem Kufi', sans-serif;

    ${mediaBreakpointDown('md', `
        font-size: 2.4rem;
    `)}
`

// put font here once you figure it out
export const SectionContent = styled.div`
    flex-grow: 1;
    // padding-left: 2rem;
    padding-left: 15px;
    font-size: 1.3rem;
    color: white;
    margin-bottom: 50px;
    font-family: 'Reem Kufi', sans-serif;

    ${mediaBreakpointDown('sm', `
        padding-left: 0;
    `)}
`

export const HideBelow = (breakpoint) => styled.div`
    ${mediaBreakpointDown(breakpoint, `
        display: none !important;
    `)}
`

export const Badge = styled.a`
    display:block;
    max-width:80px;
    min-width:60px;
    position:fixed;
    right: 1rem;
    top:0;
    width:10%;
    z-index:10000;

    ${mediaBreakpointDown('lg', `
        left: 0rem;
    `)}
`
export const WhiteButton = styled.a`
    border: 2px solid white;
    border-radius: 16px;
    color: white;
    background: transparent;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    //margin-top: 0.75rem;
    position: relative;
    z-index: 1;
    font-size: 1.4rem;
    font-family: 'Reem Kufi', sans-serif;

    ${mediaBreakpointDown('md', `
        margin-top: 1rem;
        margin-bottom: 1rem;
    `)}
`