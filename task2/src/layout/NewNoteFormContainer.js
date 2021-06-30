import React from 'react';
import {connect} from "react-redux";
import NewNoteForm from "../components/NewNoteForm/NewNoteForm";

function NewNoteFormContainer({visible}) {
  let formClasses = 'container p-0 card position-absolute top-50 start-50 translate-middle'
  formClasses += visible ? '' : ' d-none'

  return (
    <div className={formClasses}>
      <h5 className="card-header text-white text-center fw-bold bg-secondary">
        New note
      </h5>

      <div className="card-body bg-light">
        <NewNoteForm/>
      </div>
    </div>
  )
}

const mstp = state => ({visible: state.isNewNoteFragment})

export default connect(mstp)(NewNoteFormContainer)