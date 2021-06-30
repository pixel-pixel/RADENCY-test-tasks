import store from "./store/store.js";

import {
  createNote,
  deleteAllNotes,
  deleteNote,
  openArchive,
  openNewNoteForm,
} from "./store/actionCreators.js";
import {getDatesFrom, getFormattedDate} from "./utils/utils.js";
import {
  drawCategories,
  drawCreateNoteBtn,
  drawFragments,
  drawNewNoteForm,
  drawNotes,
  drawNotesTableTitle
} from "./view/view.js";

const notesTableArchiveBtn = document.getElementById('notes-table__archive-btn')
const notesTableDeleteBtn = document.getElementById('notes-table__delete-btn')
const newNoteBtn = document.getElementById('new-note-btn')
const createNoteBtn = document.getElementById('create-note-btn')
const cancelNoteBtn = document.getElementById('cancel-form-btn')

store.subscribe(drawFragments)
store.subscribe(drawNotesTableTitle)
store.subscribe(drawNotes)
store.subscribe(drawCategories)
store.subscribe(drawNewNoteForm)
store.subscribe(drawCreateNoteBtn)

notesTableArchiveBtn.addEventListener('click', () => {
  store.dispatch(openArchive(!store.getState().isArchive))
})
notesTableDeleteBtn.addEventListener('click', () => {
  store.dispatch(deleteAllNotes())
})
newNoteBtn.addEventListener('click', () => {
  store.dispatch(openNewNoteForm(true))
})
createNoteBtn.addEventListener('click', e => {
  e.preventDefault()

  const newNoteNameInput = document.getElementById('new-note-form__note-name')
  const newNoteCategoryInput = document.getElementById('new-note-form__note-category')
  const newNoteTextInput = document.getElementById('new-note-form__note-text')

  const name = newNoteNameInput.value
  let create = getFormattedDate(new Date)
  const category = newNoteCategoryInput.value
  const content = newNoteTextInput.value
  const dates = getDatesFrom(content)

  if (name === '' || content === '') {
    newNoteNameInput.placeholder = 'you must write smth'
    newNoteTextInput.placeholder = 'you must write smth'
    return
  }

  const editNoteName = store.getState().editNoteName
  if (editNoteName !== null) {
    const editNote = store.getState().notes.find(el => el.name === editNoteName)
    create = editNote.create
    store.dispatch(deleteNote(editNoteName))
  }

  store.dispatch(createNote(name, create, category, content, dates, false))
  store.dispatch(openNewNoteForm(false))
})
cancelNoteBtn.addEventListener('click', e => {
  e.preventDefault()
  store.dispatch(openNewNoteForm(false))
})