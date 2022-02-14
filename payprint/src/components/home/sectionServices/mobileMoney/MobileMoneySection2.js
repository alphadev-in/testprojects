import React, { useState, useContext } from 'react'
import contries from '../../../../utils/countries.json'
import { generateListCountries } from '../../../../utils/data'
import { ModalAuthContext } from '../../../../Context'

function MobileMoneySection2(props) {
  
  const [openSelect1, setOpenSeclect1] = useState(false)
  const [openSelect2, setOpenSeclect2] = useState(false)
  const [contrieSelect, setContrieSelect] = useState(contries.find(el => el.alpha3Code === 'ENG'))

  const modal = useContext(ModalAuthContext)

  const actionSelect2 = (data) => {
    setContrieSelect(data)
    setOpenSeclect1(false)
  }

  return (
    <div>
      <div className="select-custom mb-3 is-custom-card-1">
        <div
          className="select-content"
          onClick={() => { props.setCurrentSection('MobileMoneySection1') }}>
          <div className="level is-mobile is-height-39px px-4">
            <div className="level-left is-size-7 pl-4 txt-0C2E60">
              Transaction Details
            </div>
            <div className="level-right">
            </div>
          </div>
        </div>
      </div>
      <div className={`is-border-radius-4 is-border-1 px-4 mb-6 ${openSelect2 ? '' : 'is-box-shadow-3 pb-4'}`}>
        <div
          className="level is-mobile pl-4 mb-0 is-height-39px"
          onClick={() => {
            setOpenSeclect2(!openSelect2)
          }}>
          <div className="level-left is-size-7 txt-0C2E60">
            Sender’s Details
          </div>
          <div className="level-right">
            <span className="icon is-size-5 txt-0C2E60">
              <i className={`mdi mdi-play ${openSelect2 ? 'up' : 'down'}`}></i>
            </span>
          </div>
        </div>
        <div className={`px-4 ${openSelect2 ? 'is-hidden' : ''}`}>
          <div className="select-custom">
            <div className="select-content">
              <div className="field has-addons mb-4">
                <p className="control mb-0 is-expanded">
                  <input
                    className="input is-size-7 custom2 px-18px is-border-right-none"
                    type="text"
                    placeholder="Phone Number / Email" />
                </p>
                <p className="control mb-0">
                  <button
                    onClick={() => setOpenSeclect1(!openSelect1)}
                    className="button bg-0C2E60 has-text-white is-height-40px is-border-radius-4">
                    <img
                      src={contrieSelect.flag}
                      alt={`flag-${contrieSelect.alpha3Code}`}
                      className="mr-2"
                      style={{
                        borderRadius: '50%',
                        height: '28px',
                        width: '28px',
                      }}/>
                      <span className="is-size-14px">
                        {contrieSelect.alpha3Code}
                      </span>
                      <span className="icon is-size-5">
                        <i className={`mdi mdi-play ${openSelect1 ? 'up' : 'down'}`}></i>
                      </span>
                  </button>
                </p>
              </div>
            </div>
            <ul className={`select-option ${openSelect1 ? 'open' : ''}`}>
              { generateListCountries(actionSelect2) }
            </ul>
          </div>
          <div className="field has-addons mb-4">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-7 custom2 px-18px"
                type="password"
                placeholder="Password"/>
            </p>
          </div>
          <div className="is-size-10px txt-0C2E60 has-text-right">
            <p>Forgot?</p>
          </div>
        </div>
      </div>
      <div className="columns is-mobile is-align-items-center mt-6">
        <div className="column is-6 is-size-14px txt-0C2E60">
          <span
            className="txt-0C2E60 is-clickable"
            onClick={() => {
              modal.setAuthActif('SignUp')
              modal.setActiveModal(true)
            }}>Sign-Up?</span>
        </div>
        <div className="column is-6">
          <button
            className="button is-fullwidth is-height-39px bg-0C2E60 has-text-white is-border-radius-8 is-size-14px has-text-weight-medium"
            onClick={() => {
              props.setCurrentSection('MobileMoneySection3')
            }}>
            Checkout as Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileMoneySection2
