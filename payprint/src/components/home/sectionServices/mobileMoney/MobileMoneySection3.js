import React, { useState, useContext } from 'react'
import { ModalAuthContext } from '../../../../Context'

function MobileMoneySection3(props) {
  
  const [openSelect1, setOpenSeclect1] = useState(false)

  const modal = useContext(ModalAuthContext)

  return (
    <div>
      <div className="select-custom mb-3 is-custom-card-1">
        <div
          className="select-content"
          onClick={() => {
            props.setCurrentSection('MobileMoneySection1')
          }}>
          <div className="level is-mobile is-height-39px px-4">
            <div className="level-left is-size-7 pl-4 text-0C2E60">
              Transaction Details
            </div>
          </div>
        </div>
      </div>
      <div className={`is-border-radius-4 is-border-1 px-4 mb-6 ${openSelect1 ? '' : 'is-box-shadow-3 pb-4'}`}>
        <div
          className="level is-mobile pl-4 mb-0 is-height-39px"
          onClick={() => {
            setOpenSeclect1(!openSelect1)
          }}>
          <div className="level-left is-size-7 text-0C2E60">
            Sign-Up
          </div>
          <div className="level-right">
            <span className="icon is-size-5 txt-0C2E60">
              <i className={`mdi mdi-play ${openSelect1 ? 'up' : 'down'}`}></i>
            </span>
          </div>
        </div>
        <div className={`columns is-mobile is-multiline px-4 ${openSelect1 ? 'is-hidden' : ''}`}>
          <div className="column py-2 mb-0 is-6 field has-addons">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-7 custom2 px-18px"
                type="text"
                placeholder="First Name" />
            </p>
          </div>
          <div className="column py-2 mb-0 is-6 field has-addons">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-7 custom2 px-18px"
                type="text"
                placeholder="Last Name" />
            </p>
          </div>
          <div className="column py-2 mb-0 is-12 field has-addons">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-7 custom2 px-18px"
                type="text"
                placeholder="Address" />
            </p>
          </div>
          <div className="column py-2 mb-0 is-6 field has-addons">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-7 custom2 px-18px"
                type="text"
                placeholder="Mobile Number" />
            </p>
          </div>
          <div className="column py-2 mb-0 is-6 field has-addons">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-7 custom2 px-18px"
                type="password"
                placeholder="Password" />
            </p>
          </div>
        </div>
      </div>
      <div className="columns is-mobile is-align-items-center">
        <div className="column is-6-tablet is-size-14px txt-0C2E60">
          <span
            className="txt-0C2E60 is-clickable"
            onClick={() => {
              modal.setAuthActif('SignUp')
              modal.setActiveModal(true)
            }}>Sign-Up?</span>
        </div>
        <div className="column is-6-tablet">
          <button
            className="button is-fullwidth is-height-39px bg-0C2E60 has-text-white is-border-radius-8 is-size-14px has-text-weight-medium is-size-14px"
            onClick={() => {
              modal.setAuthActif('SignIn')
              modal.setActiveModal(true)
            }}>
            Checkout as Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileMoneySection3
