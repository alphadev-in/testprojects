import React, { Fragment, useState } from 'react'

function InputSelectImage({
  generateDataList,
  valueSelect,
  setValueSelect,
  showArrow = true,
  customClassTrigger = 'custom1',
}) {
  const [open, setOpen] = useState(false)
  const [leave, setLeave] = useState(true)

  const actionSelect = (data) => {
    setValueSelect(data)
    setOpen(false)
  }
  return (
    <Fragment>
      <div
        onMouseEnter={() => { setLeave(false) }}
        onMouseLeave={() => { setLeave(true) }}
        className={`dropdown select-image ${open ? 'is-active' : ''}`}>
        <button
          className={`dropdown-trigger ${customClassTrigger}`}
          onClick={() => setOpen(!open)}
          onBlur={() =>{
            if (leave) setOpen(false)
          }}>
          <div className="level is-mobile is-height-100p">
            <div className="level-left">
              <img
                src={valueSelect.src} alt="flag-en"
                style={{ height: '20px' }}/>
            </div>
            {showArrow &&
            <div className="level-right">
              <span className="icon is-size-5 txt-0C2E60">
                <i className={`mdi mdi-play ${open ? 'up' : 'down'}`}></i>
              </span>
            </div>
            }
          </div>
        </button>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            { generateDataList(actionSelect) }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default InputSelectImage
