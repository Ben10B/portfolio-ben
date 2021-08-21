import React from 'react';
import '../css/accordion.css';
import { connect } from 'react-redux';
import { updateBackground, updateTheme, updateParallax } from '../actions/settingsActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accordion = ({ links, updateBackground, updateTheme, updateParallax, settings }) => {
  const handleClick = (item) => {
    switch(item.id) {
      case 'bg': updateBackground(item.value); break;
      case 'theme': updateTheme(item.value); break;
      case 'landing': updateParallax({ landing: item.value }); break;
      case 'slideshow': updateParallax({ slideshow: item.value }); break;
      default: break;
    }
  }
  const handleActive = (item) => {
    const { background, parallaxes, theme } = settings;
    switch(item.value) {
      case theme: return 'active';
      case background: return 'active';
      case parallaxes.landing: return 'active';
      case parallaxes.slideshow: return 'active';
      default: break;
    }
  }
  return (
    <div className={`accordion`}>
      <div className="menu">
        <ul>
          {links.map(x => (
            <li key={x.id} className="item" id={x.id}>
              <a href={`${x.href}`} className="btn">
                <FontAwesomeIcon icon={x.icon}/>
                <label>{x.label}</label>
              </a>
              {x.lvl2 && (
                <div className="smenu">
                  {!x.lvl3 ? 
                  x.lvl2.map(y => (
                    <div key={y.value} onClick={() => handleClick(y)}
                      className={`lvl2 ${handleActive(y)}`}
                    >{y.label}</div>
                  )) 
                  : 
                  (x.lvl2.map(y => (
                    <div key={y.value} className="item-2" id={y.id}>
                      <label className="btn-2">{y.label}</label>
                      <input type="checkbox"/>
                      <div className="ssmenu">
                        {y.lvl3 && y.lvl3.map(z => (
                          <div key={z.value} onClick={() => handleClick(z)}
                            className={`lvl3 ${handleActive(z)}`}
                          >{z.label}</div>
                        ))}
                      </div>
                    </div>
                  )))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateBackground: (ownProps) => dispatch(updateBackground(ownProps)),
    updateTheme: (ownProps) => dispatch(updateTheme(ownProps)),
    updateParallax: (ownProps) => dispatch(updateParallax(ownProps)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Accordion);