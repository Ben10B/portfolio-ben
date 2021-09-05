import React from 'react';
import '../css/accordion.css';
import { connect } from 'react-redux';
import { updateBackground, updateTheme, updateParallax, updateAudio, updateSplash, updateHeader, updateFight, updateDrawerBtn, unlockSecret } from '../actions/settingsActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accordion = ({ links, updateBackground, updateTheme, updateParallax, updateAudio, updateSplash, updateHeader, settings, updateFight, updateDrawerBtn, unlockSecret }) => {
  const handleClick = (item) => {
    switch(item.id) {
      case 'animation': updateFight({ animation: item.value }); break;
      case 'background': updateBackground(item.value); break;
      case 'buttonsize': updateHeader({ buttonsize: item.value }); break;
      case 'buttonstyle': updateHeader({ buttonstyle: item.value }); break;
      case 'choreo': updateFight({ choreo: item.value }); break;
      case 'control': updateAudio({ control: item.value }); break;
      case 'drawerBtn': updateDrawerBtn(item.value); break;
      case 'landing': updateParallax({ landing: item.value }); break;
      case 'secretUnlock': unlockSecret({ modal: item.value }); break;
      case 'showSplash': updateSplash(item.value); break;
      case 'slideshow': updateParallax({ slideshow: item.value }); break;
      case 'song': updateAudio({ song: item.value }); break;
      case 'style': updateHeader({ style: item.value }); break;
      case 'theme': updateTheme(item.value); break;
      default: break;
    }
  }
  const handleActive = (item) => {
    const { audio, background, fight, header, parallaxes, showSplash, theme, drawerBtn } = settings;
    switch(item.value) {
      case audio.song: return 'active';
      case audio.control: return 'active';
      case background: return 'active';
      case drawerBtn: return 'active';
      case fight.animation: return 'active';
      case fight.choreo: return 'active';
      case header.style: return 'active';
      case header.buttonsize: return 'active';
      case header.buttonstyle: return 'active';
      case parallaxes.landing: return 'active';
      case parallaxes.slideshow: return 'active';
      case showSplash: return 'active';
      case theme: return 'active';
      default: return '';
    }
  }
  const handleSecret = (item) => {
    const { secretUnlock } = settings;
    if(item.secret && !secretUnlock.unlock) return 'secret';
    else return '';
  }
  return (
    <div className={`accordion`}>
      <div className="menu">
        <ul>
          {links.map(x => (
            <li key={x.id} className="item" id={x.id} onClick={() => handleClick(x)}>
              <div className="btn">
                <FontAwesomeIcon icon={x.icon}/>
                <label>{x.label}</label>
              </div>
              <input type="checkbox"/>
              {x.lvl2 && (
                <div className="smenu">
                  {!x.lvl3 ? 
                  x.lvl2.map(y => (
                    <div key={y.value} onClick={() => handleClick(y)}
                      className={`lvl2 ${handleActive(y)} ${handleSecret(y)}`}
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
                            className={`lvl3 ${handleActive(z)} ${handleSecret(z)}`}
                          >{z.label}</div>
                        ))}
                      </div>
                    </div>
                  )))}
                </div>
              )}
              {x.input && (
                <div className="smenu">
                  <input type={x.input.type}/>
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
    updateTheme: (ownProps) => dispatch(updateTheme(ownProps)),
    updateAudio: (ownProps) => dispatch(updateAudio(ownProps)),
    updateFight: (ownProps) => dispatch(updateFight(ownProps)),
    unlockSecret: (ownProps) => dispatch(unlockSecret(ownProps)),
    updateHeader: (ownProps) => dispatch(updateHeader(ownProps)),
    updateSplash: (ownProps) => dispatch(updateSplash(ownProps)),
    updateParallax: (ownProps) => dispatch(updateParallax(ownProps)),
    updateDrawerBtn: (ownProps) => dispatch(updateDrawerBtn(ownProps)),
    updateBackground: (ownProps) => dispatch(updateBackground(ownProps)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Accordion);