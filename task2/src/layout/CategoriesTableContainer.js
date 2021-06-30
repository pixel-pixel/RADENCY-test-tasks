import React from 'react';
import CategoriesBar from "../components/CategoriesTable/CategoriesBar";
import CategoriesTable from "../components/CategoriesTable/CategoriesTable";
import {connect} from "react-redux";

function CategoriesTableContainer({visible}) {
  let tableClasses = visible ? '' : 'd-none'

  return (
    <div className={tableClasses}>
      <CategoriesBar/>
      <CategoriesTable/>
    </div>
  )
}

const mstp = state => ({visible: !state.isNewNoteFragment})

export default connect(mstp)(CategoriesTableContainer)