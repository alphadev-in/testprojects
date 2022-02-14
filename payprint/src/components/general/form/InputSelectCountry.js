import React, { Fragment, useState } from 'react'
import '../../../css/InputSelectCountry.scss'

function InputSelectCountry({
  valueInput,
  setValueInput,
  valueSelect,
  setValueSelect,
  allCountries,
  label,
  customClass,
  placeholder,
  classLabel = 'txt-0C2E60',
  classField = 'custom1',
  showCurrency = false,
  showArrow = true,
  showText = true,
  isBtnCountry = false,
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
        className={`dropdown select-countries ${customClass} ${open ? 'is-active' : ''}`}>
        <div className="dropdown-trigger">
          {label &&
          <label className={`label has-text-weight-semibold is-size-10px ${classLabel}`}>
            {label}
          </label>
          }
          <div className={`field has-addons ${classField}`}>
            <p className="control mb-0 is-expanded">
              <input
                className="input pl-3"
                value={valueInput}
                onInput={(e) => setValueInput(e.target.value)}
                type="text"
                placeholder={placeholder} />
            </p>
            <p className="control mb-0">
              {!isBtnCountry &&
                <button
                  className={`button mr-2 ${showCurrency ? 'is-width-max-content' : ''}`}
                  onClick={() => setOpen(!open)}
                  onBlur={() =>{
                    if (leave) setOpen(false)
                  }}>
                  <img
                    src={valueSelect.flag}
                    alt={`flag-${valueSelect.alpha3Code}`}
                    className="mr-2"
                    style={{ height: '17px', width: "23px" }}/>
                  {showText &&
                    <span className="is-size-7 txt-0C2E60 has-text-weight-medium alpha3Code">
                      {valueSelect.alpha3Code === 'GBR' ? 'ENG' : valueSelect.alpha3Code}
                    </span>
                  }
                  {showArrow &&
                    <span className="icon is-size-5 txt-0C2E60">
                      <i className={`mdi mdi-play ${open ? 'up' : 'down'}`}></i>
                    </span>
                  }
                  {showCurrency &&
                    <span className="is-size-7 txt-9E9E9E currency">
                      {
                        valueSelect.currencies
                        ? valueSelect.currencies[0].symbol
                        : '$'
                      }
                    </span>
                  }
                </button>
              }
              {isBtnCountry &&
                <button
                  className={`button bg-0C2E60 has-text-white`}
                  onClick={() => setOpen(!open)}
                  onBlur={() =>{
                    if (leave) setOpen(false)
                  }}>
                  <img
                    src={valueSelect.flag}
                    alt={`flag-${valueSelect.alpha3Code}`}
                    className="mr-1"
                    style={{ width: '20px', }}/>
                  <span className="is-size-14px">
                    {valueSelect.alpha3Code === 'GBR' ? 'ENG' : valueSelect.alpha3Code}
                  </span>
                </button>
              }
            </p>
          </div>
        </div>
        <div
          className="dropdown-menu"
          id="dropdown-menu"
          role="menu">
          <div className="dropdown-content">
            {
              allCountries.map((item, index) => (
                <li
                  key={index}  
                  onClick={() => { actionSelect(item) }}
                  className="dropdown-item">
                  <div className="level is-height-100p">
                    <div className="level-left">
                      <img
                        src={item.flag}
                        alt={`flag-${item.alpha3Code}`} 
                        style={{ height: '17px', width: "23px" }}
                        className="mr-2"
                      />
                      <span className="is-size-7 txt-0C2E60 has-text-weight-medium">
                        {item.alpha3Code}
                      </span>
                    </div>
                  </div>
                </li>
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default InputSelectCountry
