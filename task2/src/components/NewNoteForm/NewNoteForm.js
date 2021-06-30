import React from 'react'
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import CreateNoteFormBtn from "./CreateNoteFormBtn";
import CancelFormBtn from "./CancelFormBtn";
import {getDatesFrom, getFormattedDate} from "../../utils/utils";
import store from "../../redux/store";
import {createNote, deleteNote, openNewNoteForm} from "../../redux/actionCreators";

function NewNoteForm({editNoteName}) {
  let name = '', category = 'Idea', content = ''

  const onNameInputChange = e => name = e.target.value
  const onCategoryInputChange = e => category = e.target.value
  const onTextInputChange = e => content = e.target.value

  const onCreate = e => {
    e.preventDefault()
    if (name === '' || content === '') return

    let create = getFormattedDate(new Date())
    const dates = getDatesFrom(content)

    const editNoteName = store.getState().editNoteName

    if (editNoteName !== null) {
      const editNote = store.getState().notes.find(el => el.name === editNoteName)
      create = editNote.create
      store.dispatch(deleteNote(editNoteName))
    }

    store.dispatch(createNote(name, create, category, content, dates, false))
    store.dispatch(openNewNoteForm(false))
  }


  return (
    <form className="row justify-content-end">
      <div className="col-12 col-md-6">
        <TextInput label="Note name"
                   placeholder="My plan..."
                   onChange={onNameInputChange}
        />
      </div>

      <div className="col-12 col-md-6 mt-3 mt-md-0">
        <SelectInput label="Category of note"
                     options={['Idea', 'Quote', 'Random Thought', 'Task']}
                     onChange={onCategoryInputChange}
        />
      </div>
      <div className="col-12 my-3">
        <TextInput label="Note text"
                   placeholder="Today I`m doing... nothing:)"
                   onChange={onTextInputChange}
        />
      </div>

      <div className="col-auto">
        <CreateNoteFormBtn onClick={onCreate}/>
      </div>

      <div className="col-auto">
        <CancelFormBtn/>
      </div>
    </form>
  )
}

const mstp = state => ({editNoteName: state.editNoteName})

export default NewNoteForm