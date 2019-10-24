import React from 'react';
import {Route, Switch} from 'react-router-dom';

import SDHacksLayout from './2019/2019Layout';
import SDHacks2019Page from './2019';
import Live2019 from './2019/live';

class Routes extends React.Component {

    with2019Layout(Child) {
        return () =>
            (<SDHacksLayout>
                <Child />
            </SDHacksLayout>)
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact component={this.with2019Layout(SDHacks2019Page)}/>
                <Route path="/live" exact component={this.with2019Layout(Live2019)}/>
            </Switch>
        )
    }
}

export default Routes;