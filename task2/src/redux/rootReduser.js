import {
  ARCHIVE_NOTE,
  CREATE_NOTE,
  DELETE_ALL,
  DELETE_NOTE,
  EDIT_NOTE_STATUS, INIT,
  OPEN_ARCHIVE,
  OPEN_NEW_NOTE_FORM,
  UNZIP_NOTE, UPDATE
} from "./actionTypes.js";

function rootReduser(state, action) {
  switch (action.type) {
    case INIT:
      return state
    case UPDATE:
      return state
    case OPEN_NEW_NOTE_FORM:
      return openNewNoteForm(state, action.open)
    case OPEN_ARCHIVE:
      return openArchive(state, action.open)
    case DELETE_ALL:
      return deleteAllNotes(state)
    case CREATE_NOTE:
      return createNote(state, action.note)
    case EDIT_NOTE_STATUS:
      return editNoteStatus(state, action.noteName)
    case DELETE_NOTE:
      return deleteNote(state, action.noteName)
    case ARCHIVE_NOTE:
      return archiveNote(state, action.noteName)
    case UNZIP_NOTE:
      return unzipNote(state, action.noteName)
    default:
      return state
  }
}

function openNewNoteForm(state, open) {
  const isNewNoteFragment = open

  return {...state, isNewNoteFragment}
}

function openArchive(state, open) {
  const isArchive = open

  return {...state, isArchive}
}

function deleteAllNotes(state) {
  const notes = []
  const categories = [...state.categories]
  categories.forEach(el => {
    el.active = 0
    el.archived = 0
  })

  return {...state, notes, categories}
}

function createNote(state, note) {
  let {maxNoteIdKey} = state

  const notes = [...state.notes]
  const categories = [...state.categories]
  const editNoteName = null

  note.key = ++maxNoteIdKey
  notes.push(note)
  categories.find(el => el.category === note.category).active++

  return {...state, notes, categories, editNoteName, maxNoteIdKey}
}

function editNoteStatus(state, noteName) {
  const editNoteName = noteName

  return {...state, editNoteName}
}

function deleteNote(state, noteName) {
  const note = state.notes.find(el => el.name === noteName)
  const index = state.notes.indexOf(note)
  const categories = [...state.categories]
  const category = categories.find(el => el.category === note.category)
  const notes = [...state.notes]
  const editNoteName = null

  notes.splice(index, 1)
  state.isArchive ? category.archived-- : category.active--

  return {...state, notes, categories, editNoteName}
}

function archiveNote(state, noteName) {
  const notes = [...state.notes]
  const categories = [...state.categories]
  const note = notes.find(el => el.name === noteName)
  note.archived = true

  categories.find(el => el.category === note.category).active--
  categories.find(el => el.category === note.category).archived++

  return {...state, notes, categories}
}

function unzipNote(state, noteName) {
  const notes = [...state.notes]
  const categories = [...state.categories]
  const note = notes.find(el => el.name === noteName)
  note.archived = false

  categories.find(el => el.category === note.category).active++
  categories.find(el => el.category === note.category).archived--

  return {...state, notes, categories}
}

export default rootReduser