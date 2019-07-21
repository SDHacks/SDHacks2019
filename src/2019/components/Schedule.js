import React, {Component} from 'react';
import styled from 'styled-components';


import {
    Page,
    Container,
    SectionContent,
    SectionHeader
} from '../styles';

import {ScheduleConstants} from '../constants';

const ScheduleSection = styled(Page)`
    background: ${ScheduleConstants.background};
`

const PaddedRow = styled.div`
    margin: 2rem 0;
    font-size: 2rem;
`

class Schedule extends Component {
    render() {
        return (
            <ScheduleSection id="schedule">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent>
                        <div className="container-fluid h-75">
                            <div className="row justify-content-center">
                                <SectionHeader>Schedule</SectionHeader>
                            </div>
                            <PaddedRow className="row justify-content-center">
                                Coming soon! Stay tuned!
                            </PaddedRow>
                        </div>
                    </SectionContent>
                </Container>
            </ScheduleSection>
        )
    }
}

export default Schedule;