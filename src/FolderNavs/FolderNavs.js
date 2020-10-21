import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Button from '../Button/Button'
import { countNotesForFolder } from '../HelperFunctions'
import ApiContext from '../ApiContext'

export default class FolderNavs extends React.Component {
  static contextType = ApiContext;

  render() {
    const { folders=[], notes=[] } = this.context
    return (
      <div className='FolderNavs'>
        <ul className='FolderNavs__list'>
          {folders.map(folder =>
            <li key={folder.id}>
              <NavLink
                className='FolderNavs__folder-link'
                to={`/folder/${folder.id}`}
              >
                <span className='FolderNavs__num-notes'>
                  {countNotesForFolder(notes, folder.id)}
                </span>
                {folder.name}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='FolderNavs__button-wrapper'>
          <Button
            tag={Link}
            to='/add-folder'
            type='button'
            className='FolderNavs__add-folder-button'
          >
            <br />
          Folder
        </Button>
        </div>
      </div>
    )
  }

}

FolderNavs.defaultProps = {
  folders: []
}