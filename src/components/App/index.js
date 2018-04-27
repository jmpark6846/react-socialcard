import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import SocialCard from '../SocialCard';
import UrlSearch from '../UrlSearch';
import { BASE_URL, TARGET_URL, APP_ID, metaTagData } from '../../constants';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url:TARGET_URL,
      metaTags:{},
      error:false,
      errorMsg:'',
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

        if(response.data.error && response.data.error.code === 101)
          this.setState({error:true, errorMsg: "API 사용이 초과되었습니다. 10분 후 재사용해주세요."});
        else
          this.setState({metaTags:response['data']['openGraph']})
      })
      .catch(error=> {
        console.log(error);
        this.setState({error:true, errorMsg: "메타 태그를 읽을 수 없습니다."});
      });    

    // ***API 사용 초과 됬을 경우 axios.get() 구문 주석 처리 후 아래 정적 데이터 구문 사용
    // setTimeout(()=>{ this.setState({ metaTags: metaTagData }) }, 1000);

    // get request 오류시
    // setTimeout(()=>{ this.setState({ error:true, errorMsg: "메타 태그를 읽을 수 없습니다." }) }, 1000);
  }
  
  render() { 
    const { url, metaTags, error, errorMsg } = this.state;
    return (
      <div className="App container">
        <UrlSearch
          value={url}
          onSubmit={this.onUrlSubmit}
          onChange={this.onUrlChange}>
        </UrlSearch>
        {/* 에러가 없고, metaTags에 데이터가 있을때(맨처음 렌더링할때는 비어있음)*/}
        { error ?
            <div className="mt-2 alert alert-danger" role="alert">
              {errorMsg}
            </div>
            :
            !_.isEmpty(metaTags) &&
              <SocialCard metaTags={metaTags}></SocialCard>
        }
      </div> 
    );
  }
}

export default App;