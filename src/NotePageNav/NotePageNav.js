import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import './NotePageNav.css'
import NoteContext from '../NoteContext';

class NotePageNav extends React.Component{
  static contextType = NoteContext;
  render() {
    return (
      <div className='NotePageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.context.history.goBack()}
          className='NotePageNav__back-button'
        >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
        </CircleButton>
        {this.context.folder && (
          <h3 className='NotePageNav__folder-name'>
            {this.context.folder.name}
          </h3>
        )}
      </div>
    )
  }
}

export default NotePageNav;