import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/dashboard'
import Prev from '../pages/temp'

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component= {Dashboard}/>
        <Route path='/tempo' component={Prev}/>
    </Switch>
);

export default Routes;