import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionContent,
    SectionHeader
} from '../styles';

import {SponsorsConstants} from '../constants';
import {tierOneSponsor, tierTwoSponsor, tierThreeSponsor, tierFourSponsor, tierOnePartner, tierTwoPartner} from '../data/Sponsors.js'

const SponsorsSection = styled(Page)`
    background: url('/sea-animals/silhouette.svg'), ${SponsorsConstants.background};
    background-position: bottom;
    background-repeat: no-repeat;
    position: relative;
    z-index: 5;
`

const SponsorContainer = styled.a`
`

const SponsorContent = styled(SectionContent)`
    background: rgba(255, 255, 255, 0.5);
    border-radius: 45px;
`

const AnglerFish = styled.img`
    width: 60%;
`

function Sponsor(props) {
    const col = props.col || 'col-md-4 col-lg-4';
    console.log(props);

    return (
        <SponsorContainer className={`${col} my-5 d-block`} href={props.link} target="_blank">
            <img src={props.logo} className={`img-fluid d-block m-auto  ${props.className}`} alt="" width={`${props.width}%`} />
        </SponsorContainer>
    )
}

class Sponsors extends Component {
    renderSponsors(currSponsors) {
        const COL_LENS = ['col-md-9 col-lg-9', 'col-md-4 col-lg-4', 'col-md-3 col-md-3', 'col-md-2 col-md-2'];
        return currSponsors.map(p => <Sponsor {...p} col={COL_LENS[p.tier]} />)
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
                            <SponsorContent>
                                <div className="row align-items-center justify-content-center">
                                    {this.renderSponsors(tierOneSponsor)}
                                </div>
                                <div className="row align-items-center justify-content-center">
                                    {this.renderSponsors(tierTwoSponsor)}
                                </div>
                                <div className="row align-items-center justify-content-center">
                                    {this.renderSponsors(tierThreeSponsor)}
                                </div>
                                <div className="row align-items-center justify-content-center">
                                    {this.renderSponsors(tierFourSponsor)}
                                </div>
                            </SponsorContent>

                            <div className="row justify-content-center">
                                <SectionHeader>Partners</SectionHeader>
                            </div>
                            <SponsorContent>
                                <div className="row align-items-center justify-content-center">
                                    {this.renderSponsors(tierOnePartner)}
                                </div>
                                <div className="row align-items-center justify-content-center">
                                    {this.renderSponsors(tierTwoPartner)}
                                </div>
                            </SponsorContent>

                            <div className="row">
                                <div className="col-md-6">
                                    <AnglerFish src="/sea-animals/anglerfish.svg" />
                                </div>
                                <div className="col-md-6"></div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </SponsorsSection>
        )
    }
}

export default Sponsors;