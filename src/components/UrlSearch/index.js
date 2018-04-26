import React from 'react';
import PropTypes from 'prop-types';

const UrlSearch = ({value, onChange, onSubmit}) => 
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

UrlSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired,
  value: PropTypes.string,
}

export default UrlSearch;