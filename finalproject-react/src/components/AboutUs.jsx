import React from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

export default class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Jumbotron>
                        <h2>About Us</h2>
                        <p>This is a website to help you understand and maintain your sleep habits, 
                            interactive calendar to track your everyday rest, monitor on a daily basis
                            and set your own schedule.
                            Why Is Sleep Important?
                            Sleep plays a vital role in good health and well-being throughout your life.
                            Getting enough quality sleep at the right times can help protect your mental health, 
                            physical health, quality of life, and safety.
                            The way you feel while you're awake depends in part on what happens while you're 
                            sleeping. During sleep, your body is working to support healthy brain function and 
                            maintain your physical health. In children and teens, sleep also helps support growth 
                            and development.
                            The damage from sleep deficiency can occur in an instant (such as a car crash), or 
                            it can harm you over time. For example, ongoing sleep deficiency can raise your 
                            risk for some chronic health problems. It also can affect how well you think, react, 
                            work, learn, and get along with others.
                        </p>
                    </Jumbotron>
                </Grid>
            </div>
        );
    }
}
