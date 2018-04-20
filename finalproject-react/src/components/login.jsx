import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';


export default class login extends React.Component {
     constructor() {
         super();
         this.state = {
             email: '',
             password: '',       
     };
}

logIn() {
    console.log('this.state', this.state);
}

// submitHandler() {
//     fetch("http://localhost:3000/login/")
//     .then()
//     return(Response);
// }

// updateEmail(event) {
//     this.setState({
//         ...this.state, email: event.target.value
//     })
// }

render(){
    return(
        <Grid>
            <Jumbotron>
                <form onSubmit={this.onSubmit}>
                    <h3>Enter E-mail and Password to Track your Sleep</h3>
                    <div className="form-group">
                    <label className="control-label">E-mail</label>
                        <input 
                            onChange={this.onChange}
                            value={this.state.email}
                            type="text"
                            // name="email"
                            className="form-control"
                            onChange = {event => this.setState({ email: event.target.value})}
                        />
                    </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                        <input 
                            onChange={this.onChange}
                            value={this.state.password}
                            type="password"
                            // name="password"
                            className="form-control"
                            onChange = {event => this.setState({ password: event.target.value})}
                        />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg"
                        onClick={() => this.logIn()}>
                       Log In
                    </button>
                </div>
        </form>
        </Jumbotron>
                </Grid>
    );
}
}
