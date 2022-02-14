import React, { Fragment, useState } from 'react'
import Img from '../../images/credit-card.svg'
import PuceCard from '../../images/puce-carte.png'
import Visa from '../../images/visa.png'

function CreditCardVerso({isDefault, code}) {

  const [open, setOpen] = useState(false)
  const [leave, setLeave] = useState(true)

  return (
    <Fragment>
      <div className="credit-card-verso mb-5">
        <img
          src={Img}
          alt="img-credit-card"
          className="is-width-100p"
        />
        <div className="credit-card-verso-content">
          {isDefault &&
            <div className="default">
              Default
            </div>
          }
          <div className="level is-mobile">
            <div className="level-left"></div>
            <div className="level-right">
              <div
                onMouseEnter={() => { setLeave(false) }}
                onMouseLeave={() => { setLeave(true) }}
                className={`dropdown is-right ${ open ? 'is-active' : ''}`}>
                <button 
                  onClick={() => setOpen(!open)}
                  onBlur={() =>{
                    if (leave) setOpen(false)
                  }}
                  className="dropdown-trigger">
                  <span
                    className="icon is-clickable"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu">
                    <i className="mdi mdi-24px mdi-dots-vertical"></i>
                  </span>
                </button>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <li className="dropdown-item is-clickable" onClick={() => setOpen(false)}>
                      Make Default
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
          <div className="">
            <div className="mb-6">
              <img src={PuceCard}  alt="#" className="is-block is-height-40px" />
            </div>
            <div className="code-card">
              {code}
            </div>
          </div>
          <div className="level is-mobile bottom">
            <div className="level-left name">
              Jhon Doe
            </div>
            <div className="level-right expire">
              10/24
              <img src={Visa}  alt="#" className="is-block" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreditCardVerso
