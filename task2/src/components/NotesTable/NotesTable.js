import React from 'react'
import Note from "./Note";
import {connect} from "react-redux";

function NotesTable({notes}) {
  const notesJsx = notes.map(el => {
    return <Note key={el.key} name={el.name}
                 create={el.create}
                 category={el.category}
                 content={el.content}
                 dates={el.dates}/>
  })

  return (
    <div>
      {notesJsx}
    </div>
  )
}

const mstp = state => {
  const notes = state.notes.filter(el => el.archived === state.isArchive)
  return {notes}
}

export default connect(mstp)(NotesTable)