import React, {Component} from 'react';
import styled from 'styled-components';
import Airtable from 'airtable';

import {
    Page,
    Container,
    SectionContent,
    SectionHeader
} from '../styles';

const PaddedRow = styled.div`
    margin: 2rem 0;
    font-size: 2rem;
`

const ScheduleHeader = styled(SectionHeader)`
    color: ${props => props.color || 'white'};
    padding-top: 2rem;
`

const SectionSubHeader = styled.div`
    color: ${props => props.color || 'white'};
    font-size: 1.75rem;
    font-weight: 300;   
`

const ScheduleTimes = styled.div`
    padding-right: 3rem;
    color: ${props => props.color || 'white'};
    font-size: 1.25rem;
`

const EventContainer = styled.div`
    padding-bottom: 1rem;
`

const EventName = styled.div`
    font-size: 1.5rem;
    color: ${props => props.color || 'white'};
`

const PaddedDay = styled.div`
    margin: 1rem 0;
`

const ScheduleSection = styled(Page)`
`

/*${mediaBreakpointDown('md', `
        font-size: 1.5rem;
    `)}*/

class Schedule extends Component {
    /*render() {
        return (
            <Page id="schedule">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent>
                        <div className="container-fluid h-75">
                            <div className="row justify-content-center">
                                <SectionHeader>Schedule</SectionHeader>
                            </div>
                            <PaddedRow className="row justify-content-center">
                                <div className="col col-md-4">
                                    <SectionSubHeader className="text-center">Friday, October 25th</SectionSubHeader>
                                    <EventContainer className="w-100 d-flex d-inline-block">
                                        <ScheduleTimes className="w-50 text-right">
                                            <div>10:00</div>
                                            <div>to 12:00</div>
                                        </ScheduleTimes>
                                        <EventName className="w-50 text-left text-white">
                                            <div>Fun Time</div>
                                        </EventName>
                                    </EventContainer>
                                </div>
                                <div className="col col-md-4">
                                    <SectionSubHeader className="text-center">Saturday, October 26th</SectionSubHeader>
                                </div>
                                <div className="col col-md-4">
                                    <SectionSubHeader className="text-center">Sunday, October 27th</SectionSubHeader>
                                </div>
                            </PaddedRow>
                        </div>
                    </SectionContent>
                </Container>
            </Page>
        )
    }*/

    constructor() {
        super();

        this.state = {
            records: []
        }

        this.Airtable = require('airtable');
        Airtable.configure({
            endpointUrl: 'https://api.airtable.com',
            apiKey: 'key7HalwIGfCZUGnc'
        });
        this.base = Airtable.base('appn1Pc8Xfl5Yut5s');


        //this.base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY })
        //    .base('appY4r7VAncjUupmp')
    }

    componentDidMount() {
        if (!this.props.data) {
            this.base('Static Schedule')
                .select({
                    // Selecting records in Grid view:
                    view: "Grid view"
                })
                .eachPage((records, fetchNextPage) => {
                    // This function (`page`) will get called for each page of records.

                    this.setState({
                        records: [
                            ...this.state.records,
                            ...records
                        ]
                    })

                    // To fetch the next page of records, call `fetchNextPage`.
                    fetchNextPage();

                }, err => {
                    if (err) { console.error(err); return; }
                });
        }
    }

    isFriday(timestamp) {
        // ex. timestamp: 2019-03-13T02:39:57.000Z
        const splitTimestamp = timestamp.split('T');
        let day = parseInt(splitTimestamp[0].split('-')[2]);
        const hour = parseInt(splitTimestamp[1].split(':')[0], 10) - 7;

        if(hour < 0) {
            day -= 1;
        }

        return day === 25;
    }

    isSaturday(timestamp) {
        // ex. timestamp: 2019-03-13T02:39:57.000Z
        const splitTimestamp = timestamp.split('T');
        let day = parseInt(splitTimestamp[0].split('-')[2]);
        const hour = parseInt(splitTimestamp[1].split(':')[0], 10) - 7;

        if(hour < 0) {
            day -= 1;
        }

        return day === 26;
    }

    isSunday(timestamp) {
        // ex. timestamp: 2019-03-13T02:39:57.000Z
        const splitTimestamp = timestamp.split('T');
        let day = parseInt(splitTimestamp[0].split('-')[2]);
        const hour = parseInt(splitTimestamp[1].split(':')[0], 10) - 7;

        if(hour < 0) {
            day -= 1;
        }

        console.log('Day: ' + day)

        return day === 27;
    }

    formatTimestamp(timestamp) {
        // 2019-03-13T02:39:57.000Z
        let formatted = '';
        
        // splits the timestamp into date and time
        const splitTimestamp = timestamp.split('T');
        const splitTime = splitTimestamp[1].split(':');

        let hour = parseInt(splitTime[0], 10);
        hour -= 7;
        
        // check to see if we need to subtract a day
        // doesn't account for beginning of the month -- need to fix
        if(hour < 0) {
            hour += 24;
        }
        
        let timeOfDay = 'AM';
        if(hour >= 12) {
            hour -= 12;
            timeOfDay = 'PM';
        }
        
        if(hour == 0) {
            hour = 12;
        }

        splitTime[0] = hour.toString();

        formatted = `${splitTime[0]}:${splitTime[1]} ${timeOfDay}`

        return formatted;
    }
    
    renderStaticSchedule(day, data) {
        // day = 0; saturday
        // day = 1; sunday

        // push all announcements into this list
        let eventSchedule = []
        let formattedStartTime = ''
        let formattedEndTime = '';

        data.forEach(record => {
            if (record._rawJson) record = record._rawJson.fields;

            const startTime = record['startTime'];
            const title = record['title'];

            if(day === 0) {
                // make sure startTime is friday
                if(!this.isFriday(startTime)) {
                    return;
                }
            } else if (day === 1) {
                // make sure startTime is saturday
                if(!this.isSaturday(startTime)) {
                    return;
                }
            } else {
                // make sure startTime is sunday
                if (!this.isSunday(startTime)) {
                    return;
                }
            }

            formattedStartTime = this.formatTimestamp(startTime);
            formattedEndTime = record['endTime'];
            
            if(formattedEndTime) {
                formattedEndTime = this.formatTimestamp(formattedEndTime);
                
                // assemble the required fields and push into the list
                eventSchedule.push(
                    <EventContainer className="w-100 d-flex d-inline-block">
                        <ScheduleTimes className="w-50 text-right" color={this.props.color}>
                            <div>{formattedStartTime}</div>
                            <div>to {formattedEndTime}</div>
                        </ScheduleTimes>
                        <EventName className="w-50 text-left" color={this.props.color}>
                            <div>{title}</div>
                        </EventName>
                    </EventContainer>
                )
            } else {
                eventSchedule.push(
                    <EventContainer className="w-100 d-flex d-inline-block">
                        <ScheduleTimes className="w-50 text-right" color={this.props.color}>
                            <div>{formattedStartTime}</div>
                        </ScheduleTimes>
                        <EventName className="w-50 text-left" color={this.props.color}>
                            <div>{title}</div>
                        </EventName>
                    </EventContainer>
                )
            }

        });

        return (
            <PaddedDay>
                {eventSchedule}
            </PaddedDay>
        )

    }

    render() {
        if (this.props.data) {
            return  (
                <div className="container">
                    <div className="row justify-content-center">
                        <ScheduleHeader color={this.props.color}>Schedule</ScheduleHeader>
                    </div>
                    <PaddedRow className="row justify-content-center">
                        <div className="col col-md-s4">
                            <SectionSubHeader className="text-center" color={this.props.color}>Friday, October 25th</SectionSubHeader>
                            {this.renderStaticSchedule(0, this.props.data)}
                        </div>
                        <div className="col col-md-4">
                            <SectionSubHeader className="text-center" color={this.props.color}>Saturday, October 26th</SectionSubHeader>
                            {this.renderStaticSchedule(1, this.props.data)}
                        </div>
                        <div className="col col-md-4">
                            <SectionSubHeader className="text-center" color={this.props.color}>Sunday, October 27th</SectionSubHeader>
                            {this.renderStaticSchedule(2, this.props.data)}
                        </div>
                    </PaddedRow>
                </div>
            )
        }

        return (
            /*
            <ScheduleSection id="schedule">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent data-entrance="fade">
                        <div className="container-fluid h-75">
                            <div className="row justify-content-center">
                                <SectionHeader>Schedule</SectionHeader>
                            </div>
                            <PaddedRow className="row justify-content-center">
                                <div className="col col-md-4">
                                    <SectionSubHeader className="text-center">Friday, October 25th</SectionSubHeader>
                                    {this.renderStaticSchedule(0, this.state.records)}
                                </div>
                                <div className="col col-md-4">
                                    <SectionSubHeader className="text-center">Saturday, October 26th</SectionSubHeader>
                                    {this.renderStaticSchedule(1, this.state.records)}
                                </div>
                                <div className="col col-md-4">
                                    <SectionSubHeader className="text-center">Sunday, October 27th</SectionSubHeader>
                                    {this.renderStaticSchedule(2, this.state.records)}
                                </div>
                            </PaddedRow>
                        </div>
                    </SectionContent>
                </Container>
            </ScheduleSection>
            */
           <ScheduleSection id="schedule">
           <Container className="d-flex mx-auto h-100">
               <SectionContent data-entrance="fade">
                   <div className="container-fluid h-75">
                       <div className="row justify-content-center">
                           <SectionHeader>Schedule</SectionHeader>
                       </div>
                       <PaddedRow className="row justify-content-center">
                           <div className="col col-md-4">
                               <SectionSubHeader className="text-center">Schedule will be revealed soon!</SectionSubHeader>
                               {this.renderStaticSchedule(0, this.state.records)}
                           </div>
                        </PaddedRow>
                    </div>
                </SectionContent>
            </Container>
            </ScheduleSection>
        )
    }
}

export default Schedule;