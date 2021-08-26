import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateProjectPage } from '../actions/projectActions';
import Header from '../components/Header';
import Loader from '../components/Loader';

const Project = ({ match, project, updateProjectPage }) => {
  useEffect(() => {
    updateProjectPage(match.params);
  }, [match, updateProjectPage]);

  return project.loading ? <div className="hght-100-vh" style={{ position: 'relative' }}><Loader/></div> : (
    <div>
      <Header/>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    project: state.project
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProjectPage: (ownProps) => dispatch(updateProjectPage(ownProps))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Project);