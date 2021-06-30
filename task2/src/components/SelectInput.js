import React from 'react'

function SelectInput({label, options}) {
  const jsxOptions = options.map(el => <option value={el}>{el}</option>)

  return (
    <React.Fragment>
      <label className="form-label fw-bold">Category of note</label>
      <select className="col form-control">{jsxOptions}</select>
    </React.Fragment>
  )
}

export default SelectInput