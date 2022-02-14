import React, { Fragment } from 'react'
import PayPalImg from '../../../../images/8.png'

function PayPal() {
  return (
    <Fragment>
      <div className="is-height-100p is-flex is-align-items-end">
        <div className="">
          <div className="has-text-centered py-6">
            <button className="button btn-pay-pal">
              <img
                src={PayPalImg}
                alt="img-pay-pal"
                style={{
                  height: '80px'
                }}
              />
            </button>
          </div>
          <div className="mt-6 py-6">
            <span className="txt-0C2E60 is-size-14px has-text-weight-semibold">
              Payment Policy
            </span>
            <p className="is-size-7">
              The payments regulations require authorized
              payment institutions to safeguard funds
              received from customer so that, in case
              of an insolvency event of the payment institution,
              the funds are protected at all time from other
              creditor’s claims and can be repaid to customers.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PayPal
