import React from 'react';
import { connect } from 'react-redux';
import '../css/gridshow.css';

const GridShow = ({ data, secretUnlock }) => {
  const handleSecret = (item) => {
    if(item.secret && !secretUnlock.unlock) return 'secret';
    else return '';
  }
  return (
    <div className={`grid`}>
      {data.map((x, index) => (
        <div key={index} className={`cell ${handleSecret(x)}`}>
          <div className="gif" style={{ backgroundImage: `url(${x.url})`}}></div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    secretUnlock: state.settings.secretUnlock
  }
}
export default connect(mapStateToProps, {})(GridShow);