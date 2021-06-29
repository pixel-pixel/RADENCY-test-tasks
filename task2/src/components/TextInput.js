import React from 'react'

function TextInput({label, placeholder}) {
  return (
    <React.Fragment>
      <label className="form-label fw-bold">{label}</label>
      <input className="form-control" type="text" placeholder={placeholder}/>
    </React.Fragment>
  )
}

export default TextInput