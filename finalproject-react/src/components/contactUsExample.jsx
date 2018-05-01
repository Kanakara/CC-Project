// import  React from 'react';
// import { RouteComponentProps } from 'react-router-dom';

// export default class ContactUs extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       email: '',
//       name: '',
//       message: ''
//     };
//   }
//    submitHandler() {
//     fetch("http://localhost:5000/api/ContactUs/")
//     .then()
//       return (Response);
//   }


//     updateEmail(event){
//     this.setState({
//       ...this.state, email: event.target.value
//     });
//   }

//     render() {
//       return (
//         <form onSubmit={this.onSubmit}>
//                 <h1>Contact Us</h1>
//                 <div className="form-group">
//                     <label className="control-label">Full Name</label>
//                     <input 
//                         onChange={this.onChange}
//                         value={this.state.name}
//                         type="text"
//                         name="name"
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label className="control-label">E-mail</label>
//                     <input 
//                         onChange={this.onChange}
//                         value={this.state.email}
//                         type="text"
//                         name="email"
//                         className="form-control"
//                     />
//                 </div>   
//                 <div className="form-group">
//                     <label className="control-label">Message</label>
//                     <input 
//                         onChange={this.onChange}
//                         value={this.state.message}
//                         type="text"
//                         name="message"
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <button className="btn btn-primary btn-lg">
//                         Sign Up
//                     </button>
//                 </div>         
//             </form>   
//     );
//   }
//  }