import React, { Fragment, useState } from 'react'
import Img from '../../../images/credit-card.svg'
import PayPal from '../../../images/8.png'

function PayPalCreditCard() {

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
        <div className="credit-card-verso-content pay-pal">
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
          <div className="logo-pay-pal">
            <img
              src={PayPal}
              alt="logo-pay-pal"
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PayPalCreditCard
