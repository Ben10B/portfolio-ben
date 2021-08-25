import React from 'react';
import { connect } from 'react-redux';
import MediaComponent from '../components/Media';
const Media = ({ fight }) => {
  return (
    <div className={`fight-parallaxx ${fight}`}>
      <MediaComponent/>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    fight: state.settings.fight
  }
}
export default connect(mapStateToProps, {})(Media);