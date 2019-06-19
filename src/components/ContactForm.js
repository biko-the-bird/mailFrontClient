import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      email: '',
      message: '',
      attachments: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileHandler = this.fileHandler.bind(this);

  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  async handleSubmit(e) {
    e.preventDefault();
    console.log("submitting");
    const { recipient, email, message, attachments } = this.state;
    const form = await axios.post('/api/form', {
      recipient, email, message, fileName: attachments[0].name
    })
  }
  fileInputClick() {
    document.getElementById("attachmentFileInput").click();
  }
  fileHandler(e) {
    const thisS = this;
    e.persist();
    const file = e.target.files[0];
    var formData = new FormData();
    formData.append("image", file);
    axios.post('/api/upload_file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }).then(() => {
    console.log("file here", file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const b64File = reader.result;
      thisS.setState({
        attachments: [{
          file: file,
          data: b64File,
          name: file.name
        }, ...thisS.state.attachments]
      }

      )
    }
  })
  }

  render() {
    const { attachments } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} className="container">

        <FormGroup>
          <Label for="recipient">Recipients</Label>
          <Input type="email" name="recipient" id="recipient" placeholder="Add Recipients Email" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="message">Add Body Text</Label>
          <Input type="textarea" name="message" id="message" onChange={this.handleChange} />
        </FormGroup>
        <hr />
        <div onClick={this.fileInputClick} style={{ float: 'left' }}>Add Attachments
        <input style={{ display: 'none' }} type="file" accept="image/*"
            onChange={this.fileHandler} id="attachmentFileInput" name="attachmentFileInput"/>
          <ul>
            {attachments.map(item => {
              return <li>{item.name}</li>
            })
            }
          </ul>
        </div>
        <br />
        <Button style={{ float: 'right' }}>send out mail</Button>
        <br />
        <br />
        <p style={{ textAlign: 'center', color: 'grey' }}>out bound TO ANY mail service</p>
      </Form>
    );
  }
}

export default ContactForm;
