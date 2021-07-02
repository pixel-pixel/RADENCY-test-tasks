let maxId = 6
const notes = [
  {
    id: 0,
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: '',
    archived: false
  },
  {
    id: 1,
    name: 'The theory...',
    created: 'April 27, 2021',
    category: 'Random Thought',
    content: 'The evolution...',
    dates: '',
    archived: false
  },
  {
    id: 2,
    name: 'New feature',
    created: 'May 05, 2021',
    category: 'Idea',
    content: 'Implement new...',
    dates: '3/5/2021 5/5/2021',
    archived: false
  },
  {
    id: 3,
    name: 'Books',
    created: 'May 15, 2021',
    category: 'Task',
    content: 'The lean startup',
    dates: '',
    archived: false
  },
  {
    id: 4,
    name: 'Shopping list2',
    created: 'April 20, 2022',
    category: 'Task',
    content: 'Tomatoes, bread and milk!',
    dates: '',
    archived: false
  },
  {
    id: 5,
    name: 'The theory... 2',
    created: 'April 27, 2022',
    category: 'Random Thought',
    content: 'The evolution of number 2',
    dates: '',
    archived: false
  },
  {
    id: 6,
    name: 'Super-New feature',
    created: 'May 05, 2022',
    category: 'Idea',
    content: 'Implement super-new...',
    dates: '3/5/2022 5/5/2022',
    archived: false
  }
]

exports.addNote = note => {
  notes.push({id: ++maxId, ...note})
}

exports.deleteNote = index => {
  notes.splice(index, 1)
}

exports.deleteAllNotes = () => {
  notes.length = 0
}

exports.patchNote = (index, patch) => {
  notes[index] = {...notes[index], ...patch, index}
}

exports.getNote = index => {
  return notes[index]
}

exports.getAllNotes = () => {
  return notes
}

