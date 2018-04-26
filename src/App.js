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

const Url = ({value, onChange, onSubmit}) => 
  <div className="url">
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <input 
          type="text" 
          placeholder="URL을 입력하세요."
          value={value}
          onChange={onChange}
          className="form-control"
          />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">Submit</button>
        </div>
      </div>  
    </form>
  </div>


const SocialCard = ({metaTags}) => 
  <div className="card-wrapper">
    <div className="card social-card" >
      <img className="card-img-top" src={metaTags.image.url} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{metaTags.title}</h5>
        <p className="card-text">{metaTags.description} </p>
      </div>
    </div>
  </div>


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url:TARGET_URL,
      metaTags:{}
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
    return (
      <div className="App container">
        <Url 
          value={url}
          onSubmit={this.onUrlSubmit}
          onChange={this.onUrlChange}>
        </Url>
        { metaTags.title ? 
          <SocialCard metaTags={metaTags}></SocialCard>
          :
          <div></div>
        }
      </div> 
    );
  }
}

export default App;

// 