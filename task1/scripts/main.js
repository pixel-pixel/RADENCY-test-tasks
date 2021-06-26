const newNoteBtn = document.getElementById('new-note-btn')
const newNoteBtnContainer = document.getElementById('new-note-btn-container')

const notesTable = document.getElementById('notes-table')
const categoryTable = document.getElementById('categories-table')

const newNoteForm = document.getElementById('new-note-form')
const newNoteNameInput = document.getElementById('new-note-form__note-name')
const newNoteCategoryInput = document.getElementById('new-note-form__note-category')
const newNoteTextInput = document.getElementById('new-note-form__note-text')
const createNoteBtn = document.getElementById('create-note-btn')
const cancelNoteBtn = document.getElementById('cancel-form-btn')


newNoteBtn.addEventListener('click', () => {
  openPage('form')
})

createNoteBtn.addEventListener('click', e => {
  e.preventDefault()

  if(!checkFormNewNote()){
    throw Error('You must fill all inputs')
  }

  const name = newNoteNameInput.value
  const category = newNoteCategoryInput.value
  const text = newNoteTextInput.value

  const note = createNote(name, category, text)

  notesTable.appendChild(note)
  cleanFormNewNote()
  openPage('tables')
})

cancelNoteBtn.addEventListener('click', e => {
  e.preventDefault();
  openPage('tables')
})

function cleanFormNewNote() {
  newNoteNameInput.value = null
  newNoteCategoryInput.value = null
  newNoteTextInput.value = null
}

function checkFormNewNote() {
  return newNoteNameInput.value !== '' && newNoteTextInput.value !== ''
}

function createNote(name, category, content) {
  const dateOfCreate = getFormattedDate(new Date())
  const datesInText = getAllDatesFromStrings(content) ? getAllDatesFromStrings(content).join(', ') : ''

  const htmlString = `
        <div class="row justify-content-between align-items-center py-2 my-2 text-muted rounded border bg-light">
        <span class="col-12 col-sm-6 col-md-3 col-xl-2 text-dark fw-bold">${name}</span>
        <span class="col-12 col-sm-3 col-md-2 col-xl-2">${dateOfCreate}</span>
        <span class="col-12 col-sm-3 col-md-2 col-xl-2">${category}</span>
        <span class="col-12 col-sm-9 col-md-3 col-xl-2">${content}</span>
        <span class="col-12 col-sm-3 col-md-2 col-xl-2">${datesInText}</span>

        <div class="col-auto ms-auto">
            <button class="btn btn-secondary mgx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     class="bi bi-pencil"
                     viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
            </button>

            <button class="btn btn-secondary mgx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     class="bi bi-archive"
                     viewBox="0 0 16 16">
                    <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>

            <button class="btn btn-danger mgx-2">
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

  return createElementFromHTML(htmlString)
}

function getFormattedDate(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  return months[date.getMonth()] + ` ${date.getDate()}, ${date.getFullYear()}`
}

function getAllDatesFromStrings(str) {
  const regExp = /\b(([0-2]?[1-9])|(3[0-2]))\/(0?[1-9]|(10)|(11)|(12))\/-?[0-9]+\b/g

  return str.match(regExp)
}

function createElementFromHTML(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  return div.firstChild;
}

function openPage(page) {
  switch (page) {
    case 'form':
      setHideTables(true)
      setHideNewNoteForm(false)
      break
    case 'tables':
      setHideTables(false)
      setHideNewNoteForm(true)
      break
    default:
      throw Error(`Page ${page} does not exist`)
  }
}

function setHideTables(hide) {
  const className = 'd-none'

  if (hide) {
    notesTable.classList.add(className)
    newNoteBtnContainer.classList.add(className)
    categoryTable.classList.add(className)
  } else {
    notesTable.classList.remove(className)
    newNoteBtnContainer.classList.remove(className)
    categoryTable.classList.remove(className)
  }
}

function setHideNewNoteForm(hide) {
  const className = 'd-none'

  if (hide) {
    newNoteForm.classList.add(className)
  } else {
    newNoteForm.classList.remove(className)
  }
}
