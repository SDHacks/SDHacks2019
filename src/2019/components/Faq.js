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
                            <PaddedRow className="row justify-content-center">
                                <h3>Is Minecraft fun? Yes.</h3>
                            </PaddedRow>
                        </div>
                    </SectionContent>
                </Container>
            </FaqSection>
        )
    }
}

export default Faq;