import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import './Note.css'
import Context from '../Context'

export default class Note extends React.Component {

  static contextType = Context;

  static defaultProps = {
    onDeleteNote: () => {}
  }

  render() {
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${this.props.id}`}>
            {this.props.name}
          </Link>
        </h2>
        <button className='Note__delete'
          type='button'
          onClick={() => { 
            this.context.deleteNote(this.props.id) 
            this.props.onDeleteNote();
          
          }}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
        remove
      </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified
          {' '}
            <span className='Date'>
              {format(this.props.modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  
};