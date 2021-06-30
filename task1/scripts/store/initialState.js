const initialState = {
  notes: [
    {
      name: 'First note',
      create: 'April 15, 2019',
      category: 'Idea',
      content: 'lol',
      dates: '',
      archived: false
    },
  ],

  categories: [
    {category: 'Idea', active: 1, archived: 0},
    {category: 'Quote', active: 0, archived: 0},
    {category: 'Random Thought', active: 0, archived: 0},
    {category: 'Task', active: 0, archived: 0}
  ],
  isNewNoteFragment: false,
  isArchive: false,
  editNoteName: null
}

export default initialState