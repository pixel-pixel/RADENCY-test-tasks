import React from 'react';
import Title from "../components/Title";
import NotesBar from "../components/NotesBar";
import NewTodoBtn from "../components/NewTodoBtn";
import Note from "../components/Note";
import NotesTable from "../components/NotesTable";

function NotesTableContainer() {
  return (
    <div className="mt-1">
      <Title text="Active notes"/>
      <NotesBar/>
      <NotesTable/>
      <NewTodoBtn/>
    </div>
  )
}

export default NotesTableContainer