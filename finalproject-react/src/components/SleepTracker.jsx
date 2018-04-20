import React from 'react';
import AddGoal from './AddGoal';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

export default class SleepTracker extends React.Component {
    render(){
        return(
            <div>
                <Grid>
                    <Jumbotron>
                        <h2>User Sleep Tracker Will Go Here</h2>
                        <p>Including Google Claendar, or Graph to track sleeping habits once Singed in</p>
                        <h3>Goals</h3>
                        <AddGoal />
                        <div>Tracker goes here</div>
                    </Jumbotron>
                </Grid>
            </div>
        )
    }
}