import React, { useState, useContext } from 'react'
import { ModalAuthContext } from '../../../../Context'

function PayToBankSection3(props) {
  
  const [openSelect1, setOpenSeclect1] = useState(false)

  const modal = useContext(ModalAuthContext)

  return (
    <div>
      <div className="select-custom mb-3 is-custom-card-1">
        <div
          className="select-content"
          onClick={() => {
            props.setCurrentSection('PayToBankSection1')
          }}>
          <div className="level is-mobile is-height-39px px-4">
            <div className="level-left is-size-7 pl-4 text-0C2E60">
              Bic/Swift/Routing Number
            </div>
          </div>
        </div>
      </div>
      <div className="select-custom mb-3 is-custom-card-1">
        <div
          className="select-content"
          onClick={() => {
            props.setCurrentSection('PayToBankSection2')
          }}>
          <div className="level is-mobile is-height-39px px-4">
            <div className="level-left is-size-7 pl-4 text-0C2E60">
              Account Number/IBAN
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
            Sender’s Details
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
                className="input is-size-14px"
                type="text"
                placeholder="First Name" />
            </p>
          </div>
          <div className="column py-2 mb-0 is-6 field has-addons">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-14px"
                type="text"
                placeholder="Phone Number" />
            </p>
          </div>
          <div className="column py-2 mb-0 is-12 field has-addons">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-14px"
                type="text"
                placeholder="Address" />
            </p>
          </div>
        </div>
      </div>
      <div className="columns is-mobile is-multiline is-align-items-center">
        <div className="column is-6">
          <button
            className="button is-fullwidth bg-0C2E60 has-text-white is-border-radius-8 is-size-14px"
            onClick={() => {
              modal.setAuthActif('SignUp')
              modal.setActiveModal(true)
            }}>
            Sign-up & Pay
          </button>
        </div>
        <div className="column is-6">
          <button
            className="button is-fullwidth bg-0C2E60 has-text-white is-border-radius-8 is-size-14px"
            onClick={() => {
              modal.setAuthActif('SignIn')
              modal.setActiveModal(true)
            }}>
            Login & Pay
          </button>
        </div>
        <div className="column is-12 is-size-10px has-text-centered">
          By clicking Next, you are agree with our <span className="txt-0C2E60">Terms & Policy</span>
        </div>
      </div>
    </div>
  )
}

export default PayToBankSection3