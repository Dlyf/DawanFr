import React from 'react';
import { Route } from 'react-router-dom';
import Title from '../components/Title';
import CycleVie from '../components/01-cycle-vie/Cycle';

function Routes(props) {
    return (
        <React.Fragment>
            <Route path="/" component={Title} />
            <Route path="/life-cycle" component={CycleVie} />
        </React.Fragment>
    );
}
export default Routes;