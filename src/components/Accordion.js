import React from 'react';
import '../css/accordion.css';
import { connect } from 'react-redux';
import { updateBackground } from '../actions/settingsActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accordion = ({ links, updateBackground }) => {
  const handleClick = (target) => {
    switch(target.id) {
      case 'bg':
        updateBackground(target.name); 
      break;
      default: break;
    }
  }
  return (
    <div className={`accordion`}>
      <div className="menu">
        <ul>
          {links.map(x => (
            <li key={x.id} className="item" id={x.id}>
              <a href={x.href} className="btn">
                <FontAwesomeIcon icon={x.icon}/> {x.name}
              </a>
              <div className="smenu">
                {x.lvl2links && x.lvl2links.map(y => (
                  <div key={y.name} onClick={y.click ? () => handleClick(y) : null}>{y.name}</div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateBackground: (ownProps) => dispatch(updateBackground(ownProps))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Accordion);