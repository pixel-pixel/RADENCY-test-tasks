import React from 'react';

function Category({categoryName, active, archived}) {
  return (
    <div className="row align-items-center py-2 my-2 text-muted rounded border bg-light">
      <span className="col text-dark fw-bold">{categoryName}</span>
      <span className="col">{active}</span>
      <span className="col">{archived}</span>
    </div>
  )
}

export default Category