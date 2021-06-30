import React from 'react';

function CategoriesBar() {
  return (
    <div className="row align-items-center py-2 mt-5 text-white fw-bold rounded bg-secondary">
      <span className="col">Note category</span>
      <span className="col">Active</span>
      <span className="col">Archive</span>
    </div>
  )
}

export default CategoriesBar