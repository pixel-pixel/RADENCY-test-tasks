import React from 'react'

function SelectInput({label, options, onChange}) {
  const jsxOptions = options.map((el, index) => <option key={index} value={el}>{el}</option>)

  return (
    <React.Fragment>
      <label className="form-label fw-bold">{label}</label>
      <select className="col form-control" onChange={onChange}>{jsxOptions}</select>
    </React.Fragment>
  )
}

export default SelectInput