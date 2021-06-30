import React from 'react';
import NoteEditBtn from "./NoteEditBtn";
import NoteArchiveBtn from "./NoteArchiveBtn";
import NoteDeleteBtn from "./NoteDeleteBtn";

function Note({name, create, category, content, dates}) {
  return (
    <div className="note row justify-content-between align-items-center py-2 my-2 text-muted rounded border bg-light">
      <span className="col-12 col-sm-6 col-md-3 col-xl-2 text-dark fw-bold">{name}</span>
      <span className="col-12 col-sm-3 col-md-2 col-xl-2">{create}</span>
      <span className="col-12 col-sm-3 col-md-2 col-xl-2">{category}</span>
      <span className="col-12 col-sm-9 col-md-3 col-xl-2">{content}</span>
      <span className="col-12 col-sm-3 col-md-2 col-xl-2">{dates}</span>

      <div className="col-auto ms-auto">
        <NoteEditBtn/>
        <NoteArchiveBtn/>
        <NoteDeleteBtn/>
      </div>
    </div>
  )
}

export default Note