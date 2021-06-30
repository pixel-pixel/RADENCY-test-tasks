import React from 'react'
import Category from "./Category";
import {connect} from "react-redux";

function CategoriesTable({categories}) {
  const categoriesJsx = categories.map(el => {
    return <Category key={el.key}
                     categoryName={el.category}
                     active={el.active}
                     archived={el.archived}/>
  })

  return (
    <div>
      {categoriesJsx}
    </div>
  )
}

const mstp = state => ({categories: state.categories})

export default connect(mstp)(CategoriesTable)