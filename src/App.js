import React, { Component } from 'react';
import './App.css';

/*
App - 
  UrlInput
  SocialCard

url 입력 - UrlInput
fetch - App
socialcard 보여주기 - SocialCard

*/
const UrlInput = () => 
  <div className="url-input">
    <input type="text" placeholder="URL을 입력하세요."/>
  </div>

const SocialCard = () => 
  <div className="social-card">
    SocialCard
  </div>

class App extends Component {
  render() { 
    return (
      <div className="App">
        <UrlInput></UrlInput>
        <SocialCard></SocialCard>
      </div> 
    );
  }
}

export default App;

// http://opengraph.io/api/1.1/site/http%3A%2F%2Fdavidwalsh.name?app_id=5ae0777b9b03547407c63e6d