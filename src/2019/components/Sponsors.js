import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionContent,
    SectionHeader
} from '../styles';

import {SponsorsConstants} from '../constants';

import {sponsors, partners} from '../data/Sponsors.js'

const SponsorsSection = styled(Page)`
    background: ${SponsorsConstants.background};
`

const SponsorContainer = styled.a`
`

function Sponsor(props) {
    const col = props.col || 'col-md-4 col-lg-4';
    console.log(props);
    return (
        <SponsorContainer className={`${col} my-5 d-block`} href={props.link} target="_blank">
            <img src={props.logo} className={`img-fluid d-block m-auto  ${props.className}`}/>
        </SponsorContainer>
    )
}

class Sponsors extends Component {
    renderSponsors(currSponsors) {
        const COL_LENS = ['col-md-9 col-lg-9', 'col-md-4 col-lg-4', 'col-md-3 col-md-3'];
        return currSponsors.map(p => <Sponsor {...p} col={COL_LENS[p.tier]}/>)
    }

    render() {
        return (
            <SponsorsSection id="sponsors">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <SectionHeader>Sponsors</SectionHeader>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                {this.renderSponsors(sponsors)}
                            </div>
                            <div className="row">
                                <SectionHeader>Partners</SectionHeader>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                {this.renderSponsors(partners)}
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </SponsorsSection>
        )
    }
}

export default Sponsors;