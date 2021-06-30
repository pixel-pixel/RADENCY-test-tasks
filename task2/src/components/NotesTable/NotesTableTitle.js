import React from 'react';
import {connect} from "react-redux";

function NotesTableTitle({isArchive}) {
  const text = isArchive ? 'Archived notes' : 'Active notes'

  return (
    <h2 className="fw-bold">{text}</h2>
  )
}

const mstp = state => ({isArchive: state.isArchive})

export default connect(mstp)(NotesTableTitle)