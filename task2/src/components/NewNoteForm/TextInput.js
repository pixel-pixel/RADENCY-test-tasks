import React from 'react'

function TextInput({label, value, placeholder, onChange}) {
  return (
    <React.Fragment>
      <label className="form-label fw-bold">{label}</label>
      <input className="form-control"
             type="text"
             value={value}
             placeholder={placeholder}
             onChange={onChange}
      />
    </React.Fragment>
  )
}

export default TextInput