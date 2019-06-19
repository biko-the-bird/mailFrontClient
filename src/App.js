import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import InMail from './components/InMail';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }
    this.setPage = this.setPage.bind(this);
    this.showPage = this.showPage.bind(this);
  }

  setPage(page) {
    this.setState({
      page: page
    })
  }

  showPage() {
    if (this.state.page === 0) {
      return (
        <div>
           <p className="App-intro" style={{color: 'grey'}}>
          out-mail
        </p>
        <ContactForm />
        </div>
      )
    } else {
      return (
        <div>
   <p className="App-intro" style={{color: 'grey'}}>
          inmail
        </p>
        <InMail />
        </div>
      )

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mail Client</h1>
        </header>
        <button onClick={() => this.setPage(0)}>out-mail</button>
        <button onClick={() => this.setPage(1)}>in-mail</button>
       {this.showPage()}
      </div>
    );
  }
}

export default App;
