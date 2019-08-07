import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import NoteContext from '../NoteContext';

class NotePageMain extends React.Component{
  static contextType = NoteContext;
  render() {
    return (
      <section className='NotePageMain'>
        <Note
          id={this.context.note.id}
          name={this.context.note.name}
          modified={this.context.note.modified}
        />
        <div className='NotePageMain__content'>
          {this.context.note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}

export default NotePageMain;