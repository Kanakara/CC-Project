import React from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

export default class Home extends React.Component {
    render() {
        return (
        <div> 
            <Grid> 
                <Jumbotron>
                    <h2>Welcome to the Sleepy You</h2>
                    <p>This is a website to help you understand and maintain your sleep habits</p>
                </Jumbotron>
            </Grid>
        </div>
        );
    }
}
