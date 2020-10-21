import React from 'react'
import { Link } from 'react-router-dom'
import Note from '../Note/Note'
import Button from '../Button/Button'
import ApiContext from '../ApiContext'
import { getNotesForFolder } from '../HelperFunctions'
import './MainPage.css'

export default class MainPage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const { folderId } = this.props.match.params
    const { notes=[] } = this.context
    const notesForFolder = getNotesForFolder(notes, folderId)
    return (
      <section className='MainPage'>
        <ul>
          {notesForFolder.map(note =>
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
            </li>
          )}
        </ul>
        <div className='MainPage__button-container'>
          <Button
            tag={Link}
            to='/add-note'
            type='button'
            className='MainPage__add-note-button'
          >
            <br />
          Note
        </Button>
        </div>
      </section>
    )
  }

}

MainPage.defaultProps = {
  notes: [],
}