import React from 'react'

export default ({ label, children, ...props }) => (
  <div className="control">
    {label}:&nbsp;
    <div className="select is-small is-black">
      <select {...props} name={label.toLowerCase().replace(' ', '-')}>
        {children}
      </select>
    </div>
  </div>
)
