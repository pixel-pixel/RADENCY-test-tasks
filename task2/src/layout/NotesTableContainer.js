import React from 'react';
import NotesTableTitle from "../components/NotesTable/NotesTableTitle";
import NotesBar from "../components/NotesTable/NotesBar";
import NewNoteBtn from "../components/NotesTable/NewNoteBtn";
import NotesTable from "../components/NotesTable/NotesTable";
import {connect} from "react-redux";

function NotesTableContainer({visible}) {
  const tableClasses = visible ? 'mt-1' : 'mt-1 d-none'

  return (
    <div className={tableClasses}>
      <NotesTableTitle text="Active notes"/>
      <NotesBar/>
      <NotesTable/>
      <NewNoteBtn/>
    </div>
  )
}

const mstp = state => ({visible: !state.isNewNoteFragment})

export default connect(mstp)(NotesTableContainer)