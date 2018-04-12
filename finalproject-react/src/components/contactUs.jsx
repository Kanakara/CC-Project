import  React from 'react';
import PropTypes from 'prop-types';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchSubmit} from '../actions/submitActions';


// export class Submit extends React.Component {
//     componentWillMount() {
//         this.props.fetchSubmit();
//     }
// }

export class ContactUs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      name: '',
      message: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
   onChange(e) {
      this.setState({ [e.target.name]: e.target.vaule });
  }
  onSubmit(e) {
   e.preventDefault();
  }
   submitHandler() {
    fetch("http://localhost:5000/api/ContactUs/")
    .then()
      return (Response);
  }

    updateEmail(event){
    this.setState({
      ...this.state, email: event.target.value
    });
  }
  
  componentWillMount() {
    this.props.fetchSubmit();
}
    render() {
        const submitItems = this.props.submit.map(submit => (
<div key= {submit.submitItems}></div>
        ));
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
//  Submit.PropTypes = {
//      fetchSubmit: PropTypes.function.isRequired,
//      submit: PropTypes.array.isRequired
//  }

 const mapStateToProps = state => ({
     submit: state.submit.items

 })

 export default connect(mapStateToProps,{fetchSubmit})(ContactUs);