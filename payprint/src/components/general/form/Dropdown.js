import React, { Fragment } from 'react'

function Dropdown({
  dropdownTrigger,
  dropdownContent,
  open,
  setOpen
}) {


  return (
    <Fragment>
      <div className={`dropdown is-width-100p ${open ? 'is-active' : ''}`}>
        <div className="dropdown-trigger" onClick={() => { setOpen(!open) }}>
          {dropdownTrigger({
            active: open
          })}
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content is-width-inherit">
            {dropdownContent()}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Dropdown
