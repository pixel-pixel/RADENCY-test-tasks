import React from 'react'
import Category from "./Category";

function CategoriesTable() {
  return (
    <div>
      <Category categoryName="Idea"
                active="2"
                archived="2"
      />
      <Category categoryName="Idea"
                active="2"
                archived="2"
      />
    </div>
  )
}

export default CategoriesTable