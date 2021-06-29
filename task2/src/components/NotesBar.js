import React from 'react';
import NotesBarArchiveBtn from "./NotesBarArchiveBtn";
import NotesBarDeleteBtn from "./NotesBarDeleteBtn";

function NotesBar() {
  return (
    <div className="row justify-content-between align-items-center my-2 text-white fw-bold rounded bg-secondary">
      <span className="col-12 col-sm-6 col-md-3 col-xl-2">Name</span>
      <span className="col-12 col-sm-3 col-md-2 col-xl-2">Created</span>
      <span className="col-12 col-sm-3 col-md-2 col-xl-2">Category</span>
      <span className="col-12 col-sm-9 col-md-3 col-xl-2">Content</span>
      <span className="col-12 col-sm-3 col-md-2 col-xl-2">Dates</span>

      <div className="col-auto ms-auto">
        <NotesBarArchiveBtn/>
        <NotesBarDeleteBtn/>
      </div>
    </div>
  )
}

export default NotesBar