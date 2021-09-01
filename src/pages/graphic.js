import React from 'react';
import { connect } from 'react-redux';
import GraphicComponent from '../components/Graphic';
const Graphic = ({ fight }) => {
  return (
    <div className={`fight-parallaxx ${fight.choreo} ${fight.animation}`}>
      <GraphicComponent/>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    fight: state.settings.fight
  }
}
export default connect(mapStateToProps, {})(Graphic);