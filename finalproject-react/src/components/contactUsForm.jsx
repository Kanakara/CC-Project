import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Submit } from '../actions/submitActions';


class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            message: ''
        };


        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.vaule });
    }
    onSubmit(e) {
        e.preventDefault();

        const submit = {
            fullname: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
    };

    componentWillMount() {
        this.props.Submit();


        render(); {
            return (
                <form onSubmit={this.onSubmit}>
                    <h1>Contact Us</h1>
                    <div className="form-group">
                        <label className="control-label">Full Name</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.name}
                            type="text"
                            name="name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">E-mail</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.email}
                            type="text"
                            name="email"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Message</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.message}
                            type="text"
                            name="message"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            );
        }
    }
};

Submit.propTypes = {
    Submit: PropTypes.func.isRequired,

};

export default connect(null, { createSubmit })(Submit);

