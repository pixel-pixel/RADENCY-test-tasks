const initialState = {
  notes: [],

  categories: [
    {category: 'Idea', active: 0, archived: 0},
    {category: 'Quote', active: 0, archived: 0},
    {category: 'Random Thought', active: 0, archived: 0},
    {category: 'Task', active: 0, archived: 0}
  ],
  isNewNoteFragment: false,
  isArchive: false,
  editNoteName: null
}

export default initialState