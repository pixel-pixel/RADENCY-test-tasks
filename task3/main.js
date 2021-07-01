const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const port = 5005

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

function getStatistic() {
  const statistic = {
    allNotes: 0,
    activeNotes: 0,
    archivedNotes: 0,

    categories: [
      {
        category: 'Idea',
        active: 0,
        archived: 0
      },
      {
        category: 'Quote',
        active: 0,
        archived: 0
      },
      {
        category: 'Random Thought',
        active: 0,
        archived: 0
      },
      {
        category: 'Task',
        active: 0,
        archived: 0
      }
    ]
  }

  notes.forEach(el => {
    let addToActive = 0
    let addToArchived = 0
    el.archived ? addToArchived++ : addToActive++

    statistic.allNotes++
    statistic.activeNotes += addToActive
    statistic.archivedNotes += addToArchived

    const category = statistic.categories.find(cat => cat.category === el.category)
    category.active += addToActive
    category.archived += addToArchived
  })

  return statistic
}

app.post('/notes', (req, res) => {
  console.log(req.body)
  const artist = {id: ++maxId, ...req.body}
  notes.push(artist)

  res.sendStatus(200)
})

app.delete('/notes/:id', (req, res) => {
  const noteId = Number(req.params.id)
  const note = notes.find(el => el.id === noteId)
  const noteIndex = notes.indexOf(note)

  notes.splice(noteIndex, 1)

  res.sendStatus(200)
})

app.patch('/notes/:id', (req, res) => {
  const noteId = req.params.id
  const noteIndex = notes.indexOf(notes.find(el => el.id === noteId))
  notes[noteId] = {...notes[noteId], ...req.body}

  res.send(notes[noteId])
})

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/notes', (req, res) => {
  res.send(notes)
})

app.get('/notes/:id', (req, res) => {
  if(req.params.id === 'stats') {
    res.send(getStatistic())
    return
  }

  const actualNoteId = Number(req.params.id)
  const actualNote = notes.find(el => el.id === actualNoteId)

  res.send(actualNote)
})

app.listen(port, () => {
  console.log(notes)
})