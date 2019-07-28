import React, {Component} from 'react';
import styled from 'styled-components';


import {
    Page,
    Container,
    SectionContent,
    SectionHeader
} from '../styles';

import {FaqConstants} from '../constants';

const FaqSection = styled(Page)`
    background: ${FaqConstants.gradient};
`

const PaddedRow = styled.div`
    margin: 7rem 0;
`

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
    padding: 1rem 1rem 0.75rem 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
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
            <FaqSection id="faq">
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
                                        <FaqQuestion>How do I get there?</FaqQuestion>
                                        <FaqAnswer>The address for <FaqLink href="https://goo.gl/maps/kQTiJNZowP72" target="_blank">RIMAC Arena</FaqLink> is 9730 Hopkins Dr, La Jolla, CA 92093. Travel reimbursements will be distributed on a case-by-case basis.</FaqAnswer>
                                    </FaqBox>
                                    <FaqBox>
                                        <FaqQuestion>Do I have to pay to get in?</FaqQuestion>
                                        <FaqAnswer>Nope!</FaqAnswer>
                                    </FaqBox>

                                    <FaqBox>
                                        <FaqQuestion>When should I show up and when should I leave?</FaqQuestion>
                                        <FaqAnswer>You should plan to arrive at the hackathon late Friday (Oct 25th) evening and to leave early Sunday (Oct 27th) afternoon. A detailed schedule will be released closer to the event date.</FaqAnswer>
                                    </FaqBox>

                                    <FaqBox>
                                        <FaqQuestion>Do I have to pay for parking?</FaqQuestion>
                                        <FaqAnswer>Yes, parking permits are $3 per hr on Friday evening up to 11pm. After 11pm on Friday, parking is free for the weekend. The closest parking to RIMAC Arena is the <FaqLink href="https://goo.gl/maps/iqXbtjKwjSR7zeix8" target="_blank">Hopkins Parking Structure</FaqLink>.</FaqAnswer>
                                    </FaqBox>
                                </div>
                                <div className="col-md-6"> 
                                    <FaqBox>
                                        <FaqQuestion>What if I don't have a team?</FaqQuestion>
                                        <FaqAnswer>We will host a team formation event at the beginning of the hackathon so that no one has to hack alone (unless they want to). We allow teams of up to four hackers. If you do have a team, we will do our best to accept you all. Make sure ALL members apply and join the same team by using your unique team code.</FaqAnswer>
                                    </FaqBox>
                                    <FaqBox>
                                        <FaqQuestion>What should I bring?</FaqQuestion>
                                        <FaqAnswer>Bring your student ID, computer, any external peripherals you may need (chargers, monitors, etc.), any other hardware that you definitely plan on using, and an open mind. Also bring a change of clothes, a toothbrush, and any other toiletries you may need. You may also bring a sleeping bag if you plan to nap.</FaqAnswer>
                                    </FaqBox>
                                    <FaqBox>
                                        <FaqQuestion>What do volunteers and mentors do?</FaqQuestion>
                                        <FaqAnswer>General volunteers help out with logistics during the event such as check in, clean up, food distribution, and other tasks that make SD Hacks possible!</FaqAnswer>
                                        <FaqAnswer>Mentors assist students with their projects when stuck. They'll be floating around the hacking space helping students with any questions they might have, especially technical questions in a domain the mentor is familiar with.</FaqAnswer>
                                    </FaqBox>
                                    <FaqBox>
                                        <FaqQuestion>Are there any rules?</FaqQuestion>
                                        <FaqAnswer>As a Major League Hacking member event, we are adopting Major League Hacking’s <FaqLink href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="blank">Code of Conduct</FaqLink>, which requires you to respect others and help us keep SD Hacks a safe space for everyone. If you want your project to be considered for an award, you may only submit work that your team wrote during the hackathon.</FaqAnswer>
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
            </FaqSection>
        )
    }
}

export default Faq;