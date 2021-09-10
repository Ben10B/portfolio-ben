import React from 'react';
import { connect } from 'react-redux';
import '../css/gridshow.css';
import BigPicture from 'bigpicture';

const GridShow = ({ data, secretUnlock }) => {
  const handleSecret = (item) => {
    if(item.secret && !secretUnlock.unlock) return 'secret';
    else return '';
  }
  const viewMedia = (e) => {
    BigPicture({ el: e.target, imgSrc: e.target.getAttribute('imgsrc') });
  }
  const source = (src) => {
    if(src.url) return src.url;
    else if(src.aws) return src.aws;
  }
  return (
    <div className={`grid`}>
      {data.map((x, index) => (
        <div key={index} className={`cell ${handleSecret(x)}`}>
          <div className="gif" style={{ backgroundImage: `url(${source(x)})`}} imgsrc={source(x)} onClick={viewMedia}></div>
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