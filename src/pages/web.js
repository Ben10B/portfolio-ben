import React from 'react';
import { connect } from 'react-redux';
import WebComponent from '../components/Web';
const Web = ({ fight }) => {
  return (
    <div className={`fight-parallaxx ${fight}`}>
      <WebComponent/>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    fight: state.settings.fight
  }
}
export default connect(mapStateToProps, {})(Web);