import React, { Fragment, useState } from 'react'

function TemplateReceiverList({receiver, setReceiverSelect, receiverSelect}) {

  const [open, setOpen] = useState(false)
  const [leave, setLeave] = useState(true)

  return (
    <Fragment>
      <div
        className={`level ${receiverSelect.id === receiver.id ? 'is-active' : ''} is-clickable`}
        onClick={() => {setReceiverSelect(receiver)}}>
        <div className="level-left">
          <div className="level-left mr-5">
            <img src={receiver.img} alt={receiver.name}/>
          </div>
          <div className="level-item">
            {receiver.name}
          </div>
        </div>
        <div className="level-right">
          <div
            onMouseEnter={() => { setLeave(false) }}
            onMouseLeave={() => { setLeave(true) }}
            className={`dropdown is-right ${ open ? 'is-active' : ''}`}>
            <button
              className="dropdown-trigger"
              onClick={() => setOpen(!open)}
              onBlur={() =>{
                if (leave) setOpen(false)
              }}>
              <span
                className="icon is-height-100p is-clickable"
                aria-haspopup="true"
                aria-controls="dropdown-menu">
                <i className="mdi mdi-24px mdi-dots-vertical"></i>
              </span>
            </button>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <li className="dropdown-item is-clickable" onClick={() => setOpen(false)}>
                  Top Up
                </li>
                <li className="dropdown-item is-clickable" onClick={() => setOpen(false)}>
                  Mobile Money
                </li>
                <li className="dropdown-item is-clickable" onClick={() => setOpen(false)}>
                  Bank Transfer
                </li>
                <li className="dropdown-item is-clickable" onClick={() => setOpen(false)}>
                  Edit
                </li>
                <li className="dropdown-item is-clickable" onClick={() => setOpen(false)}>
                  Remove
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TemplateReceiverList
