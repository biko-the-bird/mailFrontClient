import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class InMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      email: '',
      message: '',
      attachments: []
    }

  }
  

  render() {
    const { attachments } = this.state;
    return (
     <div style={{  display: 'flex',
        flexDirection: 'column' }}>
         <p style={{color: 'grey', textAlign: 'left', margin: '5%'}}>sender's email</p>
         <hr style={{
           color: 'gray',
            borderStyle: 'inset',
             borderWidth: '1px',
              margin: '0.5em auto',
              width: '90%' 
         }}/>
         <p style={{color: 'grey', textAlign: 'left', margin: '5%'}}>body text</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr style={{
           color: 'gray',
            borderStyle: 'inset',
             borderWidth: '1px',
              margin: '0.5em auto',
              width: '90%' 
         }}/>
        <br/>

        <p style={{color: 'grey', textAlign: 'left', margin: '5%'}}>attachments</p>
        <br/>
        <div style={{  display: 'flex',
        flexDirection: 'row' }}>
            <div style={{borderColor: 'grey', margin: '5%', borderStyle: 'solid',  width: '80px', height: '80px'}}>

            </div>
            <div style={{borderColor: 'grey', margin: '5%', borderStyle: 'solid',  width: '80px', height: '80px'}}>

            </div>
            <div style={{borderColor: 'grey', margin: '5%', borderStyle: 'solid',  width: '80px', height: '80px'}}>

            </div>
            <div style={{borderColor: 'grey', margin: '5%', borderStyle: 'solid',  width: '80px', height: '80px'}}>

            </div>
            
        </div>
        <br/>
            <p style={{color: 'grey'}}>in bound FROM ANY email service</p>
            
    </div>
        );
  }
}

export default InMail;
