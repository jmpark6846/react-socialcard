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
const exUrl = "http://opengraph.io/api/1.1/site/http%3A%2F%2Fdavidwalsh.name?app_id=5ae0777b9b03547407c63e6d";

const UrlInput = ({value, onChange}) => 
  <div className="url-input">
    <input 
      type="text" 
      placeholder="URL을 입력하세요."
      value={value}
      onChange={onChange}
      />  
  </div>


const SocialCard = () => 
  <div className="social-card">
    SocialCard
  </div>


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url:'',
    }

    this.onUrlChange = this.onUrlChange.bind(this);
  }

  onUrlChange(event){
    this.setState({ url: event.target.value });
  }

  render() { 
    const { url } = this.state;
    return (
      <div className="App">
        <UrlInput 
          value={exUrl}
          onChange={this.onUrlChange}>
        </UrlInput>
        <SocialCard></SocialCard>
      </div> 
    );
  }
}

export default App;

// 