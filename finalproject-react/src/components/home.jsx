import React from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

export default class Home extends React.Component {
    render() {
        return (
        <div> 
            <Grid> 
                <Jumbotron>
                    <h2>Welcome to the Sleepy You</h2>
                    <p>This is a website to help you understand and maintain your sleep habits.</p>
             
                </Jumbotron>
                <Row className="show-grid text-center">
           <Col xs={6} sm={4} smOffset={2} className="person-wrapper">
                <Image src="/images/IMG_E0063_resized.jpg" circle className="profile-pic" />
                  <h3>Sheryl</h3>
              <p>From Seattle, Washington.</p>
           </Col>
        
           <Col xs={6} sm={4} smOffset={2} className="person-wrapper">
                <Image src="/images/IMG_E0063_resized.jpg" circle className="profile-pic"/>
                <h3>Luis</h3>
                <p>From Vancouver, Oregon.</p>
            </Col>
                
            </Row>
            </Grid>
        </div>
        
        );
    }
}
