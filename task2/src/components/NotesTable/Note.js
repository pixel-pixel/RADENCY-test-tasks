import React from 'react';
import NoteEditBtn from "./NoteEditBtn";
import NoteArchiveBtn from "./NoteArchiveBtn";
import NoteDeleteBtn from "./NoteDeleteBtn";
import {archiveNote, deleteNote, editNoteStatus, openNewNoteForm, unzipNote} from "../../redux/actionCreators";
import store from "../../redux/store";

function Note({name, create, category, content, dates}) {
  const onEditClick = () => {
    store.dispatch(editNoteStatus(name))
    store.dispatch(openNewNoteForm(true))
  }
  const onArchiveClick = () => store.getState().isArchive ?
    store.dispatch(unzipNote(name)) : store.dispatch(archiveNote(name))
  const onDeleteClick = () => store.dispatch(deleteNote(name))

  return (
    <div className="note row justify-content-between align-items-center py-2 my-2 text-muted rounded border bg-light">
      <span className="col-12 col-sm-6 col-md-3 col-xl-2 text-dark fw-bold">{name}</span>
      <span className="col-12 col-sm-3 col-md-2 col-xl-2">{create}</span>
      <span className="col-12 col-sm-3 col-md-2 col-xl-2">{category}</span>
      <span className="col-12 col-sm-9 col-md-3 col-xl-2">{content}</span>
      <span className="col-12 col-sm-3 col-md-2 col-xl-2">{dates}</span>

      <div className="col-auto ms-auto">
        <NoteEditBtn onClick={onEditClick}/>
        <NoteArchiveBtn onClick={onArchiveClick}/>
        <NoteDeleteBtn onClick={onDeleteClick}/>
      </div>
    </div>
  )
}

export default Note