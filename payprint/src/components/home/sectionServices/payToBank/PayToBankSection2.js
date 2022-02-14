import React, { useState } from 'react'

function PayToBankSection2(props) {
  
  const [openSelect1, setOpenSeclect1] = useState(false)

  return (
    <div>
      <div className="select-custom mb-3 is-custom-card-1">
        <div
          className="select-content"
          onClick={() => {
            props.setCurrentSection('PayToBankSection1')
          }}>
          <div className="level is-mobile is-mobile is-height-39px px-4">
            <div className="level-left is-size-7 pl-4 txt-0C2E60">
              Bic/Swift/Routing Number
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
            Account Number/IBAN
          </div>
          <div className="level-right">
            <span className="icon is-size-5 txt-0C2E60">
              <i className={`mdi mdi-play ${openSelect1 ? 'up' : 'down'}`}></i>
            </span>
          </div>
        </div>
        <div className={`px-4 pt-38px ${openSelect1 ? 'is-hidden' : ''}`}>
          <div className="field has-addons">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-7 custom2 px-18px"
                type="text"
                placeholder="e.g. 46545564321"/>
            </p>
          </div>
        </div>
      </div>
      <div className="columns is-align-items-center px-6">
        <div className="column is-12 px-6">
          <button
            className="button is-fullwidth is-height-39px bg-0C2E60 has-text-white is-border-radius-8 is-size-14px has-text-weight-medium"
            onClick={() => props.setCurrentSection('PayToBankSection3')}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default PayToBankSection2
