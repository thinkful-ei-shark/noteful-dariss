import React from 'react';
import Button from '../Button/Button';
import ApiContext from '../ApiContext';
import { findNote, findFolder } from '../HelperFunctions';
import './NoteBack.css';

export default class NoteBack extends React.Component {
    static defaultProps = {
        history: {
            goBack: () => { }
        },
        match: {
            params: {}
        }
    }
    static contextType = ApiContext;

    render() {
        const { notes, folders } = this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId) || {}
        const folder = findFolder(folders, note.folderId)
        return (
            <div className='NoteBack'>
                <Button
                    tag='button'
                    role='link'
                    onClick={() => this.props.history.goBack()}
                    className='NoteBack__back-button'
                >
                    <br />
        Back
      </Button>
                {folder && (
                    <h3 className='NoteBack__folder-name'>
                        {folder.name}
                    </h3>
                )}
            </div>
        )
    }
}