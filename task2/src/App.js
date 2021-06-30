import React from 'react';

import NotesTableContainer from "./layout/NotesTableContainer";
import CategoriesTableContainer from "./layout/CategoriesTableContainer";
import NewNoteFormContainer from "./layout/NewNoteFormContainer";
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container d-flex flex-column">
        <NotesTableContainer/>
        <CategoriesTableContainer/>
        <NewNoteFormContainer/>
      </div>
    </Provider>
  )
}

export default App