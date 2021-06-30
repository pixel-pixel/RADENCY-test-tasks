import React from 'react'
import {connect} from "react-redux";

function CreateNoteFormBtn({onClick, isUpdate}) {
  return (
    <button className="btn btn-secondary"
            type="submit"
            onClick={onClick}
    >
      {isUpdate ? 'Update' : 'Create'}
    </button>
  )
}

const mstp = state => ({isUpdate: state.editNoteName !== null})

export default connect(mstp)(CreateNoteFormBtn)