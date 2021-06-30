import React from 'react'
import store from "../../redux/store";
import {openNewNoteForm} from "../../redux/actionCreators";

function NewNoteBtn() {
  const onClick = () => store.dispatch(openNewNoteForm(true))

  return (
    <div className="row justify-content-end">
      <button className="col-12 col-md-auto btn btn-secondary"
              onClick={onClick}>
        New note
      </button>
    </div>
  )
}

export default NewNoteBtn