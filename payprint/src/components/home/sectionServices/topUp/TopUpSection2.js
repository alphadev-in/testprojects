import React, {useState, useContext} from 'react'
import { ModalAuthContext } from '../../../../Context'

function TopUpSection2(props) {

  const [openSelect1, setOpenSeclect1] = useState(false)
  const [openSelect2, setOpenSeclect2] = useState(false)

  const modal = useContext(ModalAuthContext)

  return (
    <div>
      <div className="select-custom mb-3 is-custom-card-1">
        <div
          className="select-content"
          onClick={() => { props.setCurrentSection('TopUpSection1') }}>
          <div className="level is-mobile is-height-39px px-4">
            <div className="level-left is-size-7 pl-4 txt-0C2E60">
              Transaction Details
            </div>
            <div className="level-right">
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
          <div className="level-left is-size-7 txt-0C2E60">
            Sender’s Details
          </div>
          <div className="level-right">
            <span className="icon is-size-5 txt-0C2E60">
              <i className={`mdi mdi-play ${openSelect1 ? 'up' : 'down'}`}></i>
            </span>
          </div>
        </div>
        <div className={`px-4 ${openSelect1 ? 'is-hidden' : ''}`}>
          <div className="field has-addons mb-4">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-7 custom2 px-18px"
                type="text"
                placeholder="Sender Phone Number / Email"/>
            </p>
          </div>
          <div className="field has-addons mb-4">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-7 custom2 px-18px"
                type="text"
                placeholder="Sender Full Name"/>
            </p>
          </div>
          <div className="select-custom">
            <div
              className="select-content"
              onClick={() => setOpenSeclect2(!openSelect2)}>
              <div className="level is-mobile is-height-100p px-18px is-custom-card-1 is-height-40px">
                <div className="level-left is-size-7 txt-secondary">
                  <span className="has-text-weight-medimu txt-9E9E9E">Select Payment Method</span>
                </div>
                <div className="level-right">
                  <span className="icon is-size-5 txt-0C2E60">
                    <i className={`mdi mdi-play ${openSelect2 ? 'up' : 'down'}`}></i>
                  </span>
                </div>
              </div>
            </div>
            <ul className={`select-option ${openSelect2 ? 'open' : ''}`}></ul>
          </div>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column is-6-tablet">
          <button
            className="button is-fullwidth is-height-39px bg-0C2E60 has-text-white is-border-radius-8 is-size-14px has-text-weight-medium is-box-shadow-4"
            onClick={() => {
              props.setCurrentSection('TopUpSection3')
            }}>
            Checkout as Login
          </button>
        </div>
        <div className="column is-6-tablet is-size-10px txt-0C2E60">
          <span
            className="txt-0C2E60 is-clickable"
            onClick={() => {
              modal.setAuthActif('SignIn')
              modal.setActiveModal(true)
            }}>
            {'->'} Login and Checkout
          </span>
          <br/><br/>
          <span
            className="txt-0C2E60 is-clickable"
            onClick={() => {
              modal.setAuthActif('SignUp')
              modal.setActiveModal(true)
            }}>
            {'->'} SignUp and Checkout
          </span>
        </div>
      </div>
    </div>
  )
}

export default TopUpSection2
