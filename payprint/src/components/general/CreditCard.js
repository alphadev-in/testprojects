import React, { Fragment } from 'react'
import PuceCarte from '../../images/puce-carte.png'
import Visa from '../../images/visa.png'

function CreditCard() {
  return (
    <Fragment>
      <div className="credit-card box mb-0 is-box-shadow-none is-border-radius-13 px-4">
        <div className="columns is-mobile is-multiline is-align-items-center">
          <div className="column is-12">
            <div className="field has-addons">
              <p className="control mb-0 is-expanded">
                <input
                  className="input is-size-7 custom2 px-18px is-border-right-none"
                  type="text"
                  placeholder="Card Number"/>
              </p>
              <p className="control mb-0">
                <button className="button is-border-radius-5">
                  <img src={Visa} alt="flag-en"/>
                </button>
              </p>
            </div>
          </div>
          <div className="column is-narrow">
            <img src={PuceCarte}  alt="#" className="is-block is-height-40px" />
          </div>
          <div className="column">
            <div className="field has-addons">
              <p className="control mb-0 is-expanded">
                <input
                  className="input is-size-7 custom2 px-18px"
                  type="text"
                  placeholder="MM / YY"/>
              </p>
            </div>
          </div>
          <div className="column">
            <div className="field has-addons">
              <p className="control mb-0 is-expanded">
                <input
                  className="input is-size-7 custom2 px-18px"
                  type="text"
                  placeholder="CVC"/>
              </p>
            </div>
          </div>
          <div className="column is-12">
            <div className="field has-addons">
              <p className="control mb-0 is-expanded">
                <input
                  className="input is-size-7 custom2 px-18px"
                  type="text"
                  placeholder="Card Holder Name"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreditCard
