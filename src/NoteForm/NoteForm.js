import React from 'react'
import './NoteForm.css'

export default function NoteForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Note-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}