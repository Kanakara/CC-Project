import  React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

export default class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Jumbotron>
                        <h2>Contact Us</h2>
                        <p>

                         <div>Sheryl Choun </div>                         
                         <div> Email: SherylChoun@yahoo.com </div>
                         
                         <div> Luis Lopez </div>
                        <div>Email: LuisLopez@yahoo.com</div>
                        
                        </p>
                    </Jumbotron>
                </Grid>
            </div>
        )        
    }
}
