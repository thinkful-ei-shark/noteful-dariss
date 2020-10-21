import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '../NotePageNav/node_modules/@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import { countNotesForFolder } from '../notes-helpers'
import Context from '../Context';
import './NoteListNav.css'

export default class NoteListNav extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className='NoteListNav'>
        <ul className='NoteListNav__list'>
          {this.context.folders.map(folder =>
            <li key={folder.id}>
              <NavLink
                className='NoteListNav__folder-link'
                to={`/folder/${folder.id}`}
              >
                <span className='NoteListNav__num-notes'>
                  {countNotesForFolder(this.context.notes, folder.id)}
                </span>
                {folder.name}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='NoteListNav__button-wrapper'>
          <CircleButton
            tag={Link}
            to='/add-folder'
            type='button'
            className='NoteListNav__add-folder-button'
          >
            {/* <FontAwesomeIcon icon='plus' /> */}
            <br />
          Folder
        </CircleButton>
        </div>
      </div>
    )
  }
}