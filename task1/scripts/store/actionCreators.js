import {
  ARCHIVE_NOTE,
  CREATE_NOTE,
  DELETE_ALL,
  DELETE_NOTE,
  EDIT_NOTE_STATUS,
  OPEN_ARCHIVE,
  OPEN_NEW_NOTE_FORM,
  UNZIP_NOTE
} from "./actionTypes.js";

function openNewNoteForm(open) {
  return {
    type: OPEN_NEW_NOTE_FORM,
    open
  }
}

function openArchive(open) {
  return {
    type: OPEN_ARCHIVE,
    open
  }
}

function deleteAllNotes() {
  return {
    type: DELETE_ALL
  }
}

function createNote(name, create, category, content, dates, archived) {
  return {
    type: CREATE_NOTE,
    note: {name, create, category, content, dates, archived}
  }
}

function editNoteStatus(noteName) {
  return {
    type: EDIT_NOTE_STATUS,
    noteName
  }
}

function deleteNote(noteName) {
  return {
    type: DELETE_NOTE,
    noteName
  }
}

function archiveNote(noteName) {
  return {
    type: ARCHIVE_NOTE,
    noteName
  }
}

function unzipNote(noteName) {
  return {
    type: UNZIP_NOTE,
    noteName
  }
}

export {
  openNewNoteForm,
  openArchive,
  deleteAllNotes,
  createNote,
  editNoteStatus,
  deleteNote,
  archiveNote,
  unzipNote
}