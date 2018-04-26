import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const SocialCard = ({metaTags}) => 
  <div className="card-wrapper">
    <div className="card social-card shadow-sm" >
      <a href={metaTags.url} target="_blank">
        <div className="card-content">
          <img className="card-img-top" src={metaTags.image.url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{metaTags.title}</h5>
            <p className="card-text">{metaTags.description} </p>
          </div>
        </div>  
      </a>
    </div>
  </div>

SocialCard.propTypes = {
  metaTags: PropTypes.object
}

export default SocialCard;
