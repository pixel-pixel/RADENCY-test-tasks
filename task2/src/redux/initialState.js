const initialState = {
  maxNoteIdKey: 0,

  notes: [{
    key: 0,
    name: 'kek',
    create: '12/12/2001',
    category: 'Idea',
    content: 'keks',
    dates: '',
    archived: false
  }],

  categories: [
    {key: 0, category: 'Idea', active: 1, archived: 0},
    {key: 1, category: 'Quote', active: 0, archived: 0},
    {key: 2, category: 'Random Thought', active: 0, archived: 0},
    {key: 3, category: 'Task', active: 0, archived: 0}
  ],
  isNewNoteFragment: false,
  isArchive: false,
  editNoteName: null
}

export default initialState