import React, {Component} from 'react';
import styled from 'styled-components';

import {
    BORDER_RADIUS, DARK_BLUE
} from '../constants';

const Bubble = styled.div`
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
    border-bottom-left-radius: ${BORDER_RADIUS};
    border-bottom-right-radius: ${BORDER_RADIUS};
    padding: 15px;
    background: ${DARK_BLUE};
    color: white;
`

class AnnouncementBubble extends Component {
    
    render() {
        const {description} = this.props;
        return (
            <Bubble>
                {description}
            </Bubble>
        )
    }
}

export default AnnouncementBubble;