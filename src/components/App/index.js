import React, { Component } from 'react';
import axios from 'axios';
import SocialCard from '../SocialCard';
import UrlSearch from '../UrlSearch';
import { BASE_URL, TARGET_URL, APP_ID, metaTagData } from '../../constants';
import './index.css';

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

    const fullUrl = `${BASE_URL}${encodeURIComponent(url)}${APP_ID}`;
    this.fetchOpenGraphTag(fullUrl);

    event.preventDefault();
  }

  fetchOpenGraphTag(url){
    axios.get(url)
      .then(response=> {
        console.log(response['data']['openGraph']);
        this.setState({metaTags:response['data']['openGraph']})
      })
      .catch(error=> { console.log(error) });    
    // setTimeout(()=>{ this.setState({ metaTags: metaTagData }) }, 1000);
  }
  
  render() { 
    const { url, metaTags } = this.state;
    return (
      <div className="App container">
        <UrlSearch
          value={url}
          onSubmit={this.onUrlSubmit}
          onChange={this.onUrlChange}>
        </UrlSearch>
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