import React from 'react';

import NotesTableContainer from "./layout/NotesTableContainer";
import CategoriesTableContainer from "./layout/CategoriesTableContainer";
import NewNoteFormContainer from "./layout/NewNoteFormContainer";

function App() {
  return (
    <div className="container d-flex flex-column">
      <NotesTableContainer/>
      <CategoriesTableContainer/>
      <NewNoteFormContainer/>
    </div>
  )
}

export default App