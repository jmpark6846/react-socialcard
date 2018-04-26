import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, TARGET_URL, APP_ID, metaTagData } from './config'
import './App.css';

/*
App - 
  Url
  SocialCard

url 입력 - Url (v)
fetch - App
socialcard 보여주기 - SocialCard

*/
const exUrl = "http://davidwalsh.name";

const Url = ({value, onChange, onSubmit}) => 
  <div className="url">
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="URL을 입력하세요."
        value={value}
        onChange={onChange}
        />
      <button type="submit">Submit</button>
    </form>
  </div>


const SocialCard = () => 
  <div className="social-card">
    SocialCard
  </div>


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url:exUrl,
      metaTags:{},
    }

    this.onUrlSubmit = this.onUrlSubmit.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.fetchOpenGraphTag = this.fetchOpenGraphTag.bind(this);
  }

  onUrlChange(event){
    this.setState({ url: event.target.value });
  }

  onUrlSubmit(event){
    const { url } = this.state;
    const fullUrl = `${BASE_URL}${url}${APP_ID}`;
    this.fetchOpenGraphTag(fullUrl);

    event.preventDefault();
  }

  fetchOpenGraphTag(url){
    // axios.get(url)
    //   .then(response=> {
    //     console.log(response['data']['openGraph']);
    //     this.setState({metaTags:response['data']['openGraph']})
    //   })
    //   .catch(error=> { console.log(error) });
    
    setTimeout(()=>{ this.setState({ metaTags: metaTagData }) }, 1000);
  }
  
  render() { 
    const { url, metaTags } = this.state;
    console.log( metaTags );
    return (
      <div className="App">
        <Url 
          value={exUrl}
          onSubmit={this.onUrlSubmit}
          onChange={this.onUrlChange}>
        </Url>

        <SocialCard></SocialCard>
      </div> 
    );
  }
}

export default App;

// 