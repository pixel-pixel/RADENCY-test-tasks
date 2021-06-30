import store from "../store/store.js";
import {createElementFromHTML} from "../utils/utils.js";
import {archiveNote, deleteNote, editNoteStatus, openNewNoteForm, unzipNote} from "../store/actionCreators.js";

function drawFragments() {
  const notesTableContainer = document.getElementById('notes-table-container')
  const categoryTableContainer = document.getElementById('categories-table-container')
  const newNoteForm = document.getElementById('new-note-form')

  if (store.getState().isNewNoteFragment) {
    notesTableContainer.classList.add('d-none')
    categoryTableContainer.classList.add('d-none')
    newNoteForm.classList.remove('d-none')
  } else {
    notesTableContainer.classList.remove('d-none')
    categoryTableContainer.classList.remove('d-none')
    newNoteForm.classList.add('d-none')
  }
}

function drawNotesTableTitle() {
  const notesTableTitle = document.getElementById('notes-table__title')

  notesTableTitle.textContent = store.getState().isArchive ?
    'Archived notes' : 'Active notes'
}

function drawNotes() {
  const notesTable = document.getElementById('notes-table')
  const {isArchive, notes} = store.getState()

  const actualNotes = isArchive ?
    notes.filter(el => el.archived) :
    notes.filter(el => !el.archived)

  notesTable.innerHTML = ''

  actualNotes.forEach(el => {
    const {name, create, category, content, dates} = el
    const note = createNoteNode(
      name, create, category, content, dates,
      onNoteEditClick, onNoteArchiveClick, onNoteDeleteClick)
    notesTable.appendChild(note)
  })
}

function drawCategories() {
  const categoryTable = document.getElementById('categories-table')
  const {categories} = store.getState()

  categoryTable.innerHTML = ''

  categories.forEach(el => {
    const {category: categoryName, active, archived} = el
    const category = createCategoryNode(categoryName, active, archived)
    categoryTable.appendChild(category)
  })
}

function drawNewNoteForm() {
  const newNoteNameInput = document.getElementById('new-note-form__note-name')
  const newNoteCategoryInput = document.getElementById('new-note-form__note-category')
  const newNoteTextInput = document.getElementById('new-note-form__note-text')

  if (store.getState().editNoteName === null) {
    newNoteNameInput.value = ''
    newNoteCategoryInput.value = 'Idea'
    newNoteTextInput.value = ''
  } else {
    const state = store.getState()
    const note = state.notes
      .find(el => el.name === state.editNoteName)

    newNoteNameInput.value = note.name
    newNoteCategoryInput.value = note.category
    newNoteTextInput.value = note.content
  }
}

function drawCreateNoteBtn() {
  const createNoteBtn = document.getElementById('create-note-btn')
  createNoteBtn.textContent = store.getState().editNoteName === null ?
    'Create note' : 'Update note'
}

function createCategoryNode(categoryName, active, archived) {
  const htmlString = `
  <div class="row align-items-center py-2 my-2 text-muted rounded border bg-light">
        <span class="col text-dark fw-bold">${categoryName}</span>
        <span class="col">${active}</span>
        <span class="col">${archived}</span>
    </div>`

  return createElementFromHTML(htmlString)
}

function createNoteNode(name, create, category, content, dates, onEditClick, onArchiveClick, onDeleteClick) {
  const htmlString = `
    <div class="note row justify-content-between align-items-center py-2 my-2 text-muted rounded border bg-light">
        <span class="col-12 col-sm-6 col-md-3 col-xl-2 text-dark fw-bold">${name}</span>
        <span class="col-12 col-sm-3 col-md-2 col-xl-2">${create}</span>
        <span class="col-12 col-sm-3 col-md-2 col-xl-2">${category}</span>
        <span class="col-12 col-sm-9 col-md-3 col-xl-2">${content}</span>
        <span class="col-12 col-sm-3 col-md-2 col-xl-2">${dates}</span>

        <div class="col-auto ms-auto">
            <button class="btn-edit btn btn-secondary mgx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     class="bi bi-pencil"
                     viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
            </button>

            <button class="btn-archive btn btn-secondary mgx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     class="bi bi-archive"
                     viewBox="0 0 16 16">
                    <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>

            <button class="btn-delete btn btn-danger mgx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     class="bi bi-trash"
                     viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
        </div>
    </div>`

  const note = createElementFromHTML(htmlString)
  const btnEdit = note.querySelector('.btn-edit')
  const btnArchive = note.querySelector('.btn-archive')
  const btnDelete = note.querySelector('.btn-delete')

  btnEdit.addEventListener('click', onEditClick)
  btnArchive.addEventListener('click', onArchiveClick)
  btnDelete.addEventListener('click', onDeleteClick)

  return note
}

function onNoteEditClick(event) {
  const note = event.target.closest('.note')
  const noteName = note.children[0].textContent

  store.dispatch(editNoteStatus(noteName))
  store.dispatch(openNewNoteForm(true))
}

function onNoteArchiveClick(event) {
  const note = event.target.closest('.note')
  const noteName = note.children[0].textContent

  if (store.getState().isArchive) {
    store.dispatch(unzipNote(noteName))
  } else {
    store.dispatch(archiveNote(noteName))
  }
}

function onNoteDeleteClick(event) {
  const note = event.target.closest('.note')
  const noteName = note.children[0].textContent

  store.dispatch(deleteNote(noteName))
}

export {drawFragments, drawNotesTableTitle, drawNotes, drawCategories, drawNewNoteForm, drawCreateNoteBtn}