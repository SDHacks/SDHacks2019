import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionContent,
    SectionHeader
} from '../styles';

const FaqQuestion = styled.h3`
    font-weight: bold;
    color: white;
    margin-bottom: 0.5rem;
`

const FaqAnswer = styled.p`
    color: white;
    margin-bottom: 0.1rem;
`

const FaqBox = styled.div`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 45px;
    padding: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    vertical-align: middle;
`

const FaqLink = styled.a`
    color: white;
    text-decoration: underline;

    &:hover {
        color: #094E6E;
    }
`

const Stingray = styled.img`
    margin-top: 1rem;
    width: 90%;
`

class Faq extends Component {
    render() {
        return (
            <Page id="faq">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent>
                        <div className="container-fluid h-75">
                            <div className="row justify-content-center">
                                <SectionHeader>Frequently Asked Questions</SectionHeader>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <FaqBox>
                                        <FaqQuestion>What is a hackathon?</FaqQuestion>
                                        <FaqAnswer>A hackathon is an event, typically lasting multiple days, in which a large number of people meet to collaboratively build out their ideas using technology.</FaqAnswer>
                                    </FaqBox>
                                    <FaqBox>
                                        <FaqQuestion>Who can attend?</FaqQuestion>
                                        <FaqAnswer>Any college or high school students over 18 years of age from anywhere in the world are eligible. This includes graduate students, but be sure to understand any agreements you’ve made with your university with regards to research and IP. If you are enrolled at a UC campus but not yet 18, you are also eligible to participate.</FaqAnswer>
                                    </FaqBox>
                                    <FaqBox>
                                        <FaqQuestion>How big can teams be?</FaqQuestion>
                                        <FaqAnswer>Teams at SD Hacks can have up to 4 people.</FaqAnswer>
                                    </FaqBox>
                                    <FaqBox>
                                        <FaqQuestion>What if I don't have a team?</FaqQuestion>
                                        <FaqAnswer>We will host a team formation event at the beginning of the hackathon so that no one has to hack alone (unless they want to). We allow teams of up to four hackers. If you do have a team, we will do our best to accept you all. Make sure ALL members apply and join the same team by using your unique team code.</FaqAnswer>
                                    </FaqBox>    
                                </div>
                                <div className="col-md-6"> 
                                    <FaqBox>
                                        <FaqQuestion>Is there a registration fee?</FaqQuestion>
                                        <FaqAnswer>SD Hacks is completely free for participants!</FaqAnswer>
                                    </FaqBox>
                                    <FaqBox>
                                        <FaqQuestion>What can I build or design?</FaqQuestion>
                                        <FaqAnswer>You can build anything you can think of, including web apps, mobile apps, hardware hacks, and other software projects that cater to the hackathon tracks.</FaqAnswer>
                                    </FaqBox>
                                    <FaqBox>
                                        <FaqQuestion>What do volunteers and mentors do?</FaqQuestion>
                                        <FaqAnswer>General volunteers help out with logistics during the event such as technical workshops, social events, and other areas to make SD Hacks possible!</FaqAnswer>
                                        <FaqAnswer>Mentors assist students with their projects when they are stuck. They'll be available to help students with any questions they might have, especially technical questions in a domain the mentor is familiar with.</FaqAnswer>
                                    </FaqBox>
                                    <FaqBox>
                                        <FaqQuestion>Are there any rules?</FaqQuestion>
                                        <FaqAnswer>As a Major League Hacking member event, we are adopting Major League Hacking’s Code of Conduct, which requires you to respect others and help us keep SD Hacks a safe space for everyone. If you want your project to be considered for an award, you may only submit work that your team wrote during the hackathon.</FaqAnswer>
                                    </FaqBox>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6">
                                    <Stingray src="/sea-animals/stingray.svg" />
                                </div>
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </Page>
        )
    }
}

export default Faq;