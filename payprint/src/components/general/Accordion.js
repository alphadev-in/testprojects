import React, { Fragment, useState, useEffect } from 'react'

function Accordion({label, children, defaultValue}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (defaultValue) setOpen(defaultValue);
  }, [defaultValue])
  return (
    <Fragment>
      <div className="box-content py-2 mb-1">
        <div className="level mb-1">
          <div className="level-left txt-0C2E60 is-size-7">
            {label}
          </div>
          <div className="level-right" onClick={() => {setOpen(!open)}}>
            <span className="icon is-size-5 txt-0C2E60">
              <i className={`mdi mdi-play ${open ? 'up' : 'down'}`}></i>
            </span>
          </div>
        </div>
        {open &&
        <div className="">
          {children}
        </div>
        }
      </div>
    </Fragment>
  )
}

export default Accordion
