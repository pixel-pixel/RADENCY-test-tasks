import React from 'react'

function TextInput({label, placeholder, onChange}) {
  return (
    <React.Fragment>
      <label className="form-label fw-bold">{label}</label>
      <input className="form-control"
             type="text"
             placeholder={placeholder}
             onChange={onChange}
      />
    </React.Fragment>
  )
}

export default TextInput