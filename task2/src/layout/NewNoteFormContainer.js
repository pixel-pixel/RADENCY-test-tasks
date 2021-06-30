import React from 'react';
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import CancelFormBtn from "../components/CancelFormBtn";
import CreateNoteFormBtn from "../components/CreateNoteFormBtn";

function NewNoteFormContainer() {
  return (
    <div className="card">
      <h5 className="card-header text-white text-center fw-bold bg-secondary">
        New note
      </h5>

      <div className="card-body bg-light">
        <form className="row justify-content-end">
          <div className="col-12 col-md-6">
            <TextInput label="Note name" placeholder="My plan..."/>
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <SelectInput label="Category of note"
                         options={['Idea', 'Quote', 'Random Thought', 'Task']}/>
          </div>
          <div className="col-12 my-3">
            <TextInput label="Note text" placeholder="Today I`m doing... nothing:)"/>
          </div>
          <div className="col-auto">
            <CreateNoteFormBtn/>
          </div>

          <div className="col-auto">
            <CancelFormBtn/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewNoteFormContainer