import React from 'react'
import store from "../../redux/store";
import {openNewNoteForm} from "../../redux/actionCreators";

function CancelFormBtn() {
  const onClick = e => {
    e.preventDefault()
    store.dispatch(openNewNoteForm(false))
  }

  return (
    <button className="btn btn-danger"
            id="cancel-form-btn"
            type="submit"
            onClick={onClick}>
      Cancel
    </button>
  )
}

export default CancelFormBtn