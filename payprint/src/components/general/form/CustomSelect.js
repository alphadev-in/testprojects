import React, { Fragment, useEffect, useState } from 'react'

function CustomSelect({
  valueSelect,
  setValueSelect,
  field,
  data,
  customChildren
}) {
  const [open, setOpen] = useState(false)
  const [leave, setLeave] = useState(true)
  const [value, setValue] = useState(valueSelect)

  function actionSelect(data) {
    setValueSelect(data)
    setOpen(false)
  }

  useEffect(() => {
    setValue(valueSelect)
  }, [valueSelect])
  return (
    <Fragment>
      <div
        onMouseEnter={() => { setLeave(false) }}
        onMouseLeave={() => { setLeave(true) }}
        className={`dropdown is-width-100p ${open ? 'is-active' : ''}`}>
        <div
          className="dropdown-trigger is-width-100p"
          onClick={() => setOpen(!open)}
          onBlur={() =>{
            if (leave) setOpen(false)
          }}>
          <div className="field">
            <p className="control has-icons-right">
              <input
                className="input"
                type="text"
                placeholder=""
                value={field ? value[field] : value}
                readOnly={true}/>
              <span className="icon is-small has-text-black is-right">
                <i className="mdi mdi-unfold-more-horizontal"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="dropdown-menu is-width-100p" id="dropdown-menu" role="menu">
          <div className="dropdown-content divider">
            {customChildren && customChildren(actionSelect)}
            {!customChildren && data.map((item, index) => (
              <li
                key={index}  
                onClick={() => { actionSelect(item) }}
                className="dropdown-item is-clickable">
                <div className="level is-height-100p">
                  <div className="level-left">
                    <span className="">
                      {field ? item[field] : item}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CustomSelect
