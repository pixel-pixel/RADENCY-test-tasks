import {
  ARCHIVE_NOTE,
  CREATE_NOTE,
  DELETE_ALL,
  DELETE_NOTE,
  EDIT_NOTE_STATUS, INIT,
  OPEN_ARCHIVE,
  OPEN_NEW_NOTE_FORM,
  UNZIP_NOTE, UPDATE, UPDATE_NOTE
} from "./actionTypes.js";

function rootReduser(state, action) {
  switch (action.type) {
    case INIT: return state
    case UPDATE: return state
    case OPEN_NEW_NOTE_FORM: return openNewNoteForm(state, action.open)
    case OPEN_ARCHIVE: return openArchive(state, action.open)
    case DELETE_ALL: return deleteAllNotes(state)
    case CREATE_NOTE: return createNote(state, action.note)
    case EDIT_NOTE_STATUS: return editNoteStatus(state, action.noteName)
    case DELETE_NOTE: return deleteNote(state, action.noteName)
    case ARCHIVE_NOTE: return archiveNote(state, action.noteName)
    case UNZIP_NOTE: return unzipNote(state, action.noteName)
    default: return state
  }
}

function openNewNoteForm(state, open) {
  state.isNewNoteFragment = open

  return state
}

function openArchive(state, open) {
  state.isArchive = open

  return state
}

function deleteAllNotes(state) {
  state.notes = []
  state.categories.forEach(el => {
    el.active = 0
    el.archived = 0
  })

  return state
}

function createNote(state, note) {
  state.notes.push(note)
  state.categories.find(el => el.category === note.category).active++
  state.editNoteName = null

  return state
}

function editNoteStatus(state, noteName) {
  state.editNoteName = noteName

  return state
}

function deleteNote(state, noteName) {
  const note = state.notes.find(el => el.name === noteName)
  const index = state.notes.indexOf(note)
  const category = state.categories.find(el => el.category === note.category)

  state.notes.splice(index, 1)
  state.isArchive ? category.archived-- : category.active--
  state.editNoteName = null

  return state
}

function archiveNote(state, noteName) {
  const note = state.notes.find(el => el.name === noteName)
  note.archived = true

  state.categories.find(el => el.category === note.category).active--
  state.categories.find(el => el.category === note.category).archived++

  return state
}

function unzipNote(state, noteName) {
  const note = state.notes.find(el => el.name === noteName)
  note.archived = false

  state.categories.find(el => el.category === note.category).active++
  state.categories.find(el => el.category === note.category).archived--

  return state
}

export default rootReduser