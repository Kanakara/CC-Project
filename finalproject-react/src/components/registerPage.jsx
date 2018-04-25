import React from 'react';
import RegisterForm from './registerForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userRegisterRequest } from '../actions/registerActions'; 
// import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';


class RegisterPage extends React.Component {
    render() {
        const { userRegisterRequest } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <RegisterForm userRegisterRequest={userRegisterRequest}/>
                </div>
            </div>

        );
    }

}
// Commented out until i can get all of it to work
// RegisterPage.propTypes = {
//     userRegisterRequest: React.PropTypes.func.isRequired
// }

export default connect(null, { userRegisterRequest }) (RegisterPage); 
