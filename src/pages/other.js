import React from 'react';
import { connect } from 'react-redux';
import { otherData } from '../data/data';
import { GIFS } from '../data/gifs';
import Header from '../components/Header';
import SlideShow from '../components/SlideShow';
import GridShow from '../components/GridShow';

const Other = ({ settings }) => {
  const { parallaxes: { landing, slideshow }, fight: { animation, choreo } } = settings;
  return (
    <div className="App">
      <div className={`landing-parallaxx ${landing} ${choreo} ${animation}`}>
        <div className="txt-center fnt-white">
          <h1 className="res-fnt-size-6">BEN-JAM-IN BECKWITH</h1>
        </div>
      </div>
      <Header />
      <div className={`parallaxx ${slideshow} ${choreo} ${animation} hght-100-vh`} style={{ overflow: 'hidden' }}>
        <SlideShow data={otherData} />
      </div>
      <div>
        <h1 className="margn-bottom-5 fnt-white">GIFS Available</h1>
        <GridShow data={GIFS}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}
export default connect(mapStateToProps, {})(Other);