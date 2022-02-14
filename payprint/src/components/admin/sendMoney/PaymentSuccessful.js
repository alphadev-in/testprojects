import React, { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Validation from '../../../images/verification.png'
import Print from '../../../images/print.svg'

function PaymentSuccessful() {
  const query = new URLSearchParams(useLocation().search);
  let from = 'top-up';
  if (!!query.get('from') && ['mobile-money', 'pay-to-bank'].includes(query.get('from'))) from = query.get('from')
  return (
    <Fragment>
      <div className="content">
        <div className="p-4">
          <h3 className="has-text-centered has-text-white has-text-weight-medium mb-40px">
            Checkout
          </h3>
          <div className="columns is-centered">
            <div className="column is-narrow payement-successful">
              <article className="media mb-4 pl-6">
                <div className="media-content">
                  <div className="has-text-centered">
                    <img src={Validation} alt="validation"/>
                    <p className="is-size-14px txt-27C64B has-text-weight-semibold">Payment Successful</p>
                  </div>
                </div>
                <div className="media-right">
                  <button className="print">
                    <img src={Print} alt="Print" width="30"/>
                  </button>
                </div>
              </article>
              <div className="is-size-10px mb-4 txt-AAAAAA">
                <p className="is-size-7 txt-0C2E60 has-text-weight-semibold">
                  Transaction Details
                </p>
                <p className="">Transaction: #45601</p>
                <p className="">Amount Sent : 115.22 RSD</p>
                <p className="">Amount: 117.3 Pound</p>
                <p className="">Receiver Gets : 117.22 Pound</p>
                <p className="">Fee: 2 Pound</p>
                <p className="">Tax: 1 Pound</p>
                <p className="">Receiver Mobile Money #: +44 2263 2271 221</p>
                <p className="">Date and time: 2021-12-09 at01:22:33 PM</p>
                <hr className="bg-D9D9D9 mt-6 mb-1"/>
                <p className="">Total Paid  : 107.22 Pund</p>
                <div className="mb-5">
                  <span className="txt-0C2E60 is-size-14px has-text-weight-semibold">
                    Payment Policy
                  </span>
                  <p className="is-size-10px txt-8F8F8F">
                    The payments regulations require authorized
                    payment institutions to safeguard funds
                    received from customer so that, in case
                    of an insolvency event of the payment institution,
                    the funds are protected at all time from other
                    creditor’s claims and can be repaid to customers.
                  </p>
                </div>
                <div className="buttons is-justify-content-space-between">
                  <Link
                    to={`/admin/send-money/${from}`}
                    className="button bg-3F4D56 has-text-white is-border-radius-16 has-text-weight-semibold px-5">
                    Send Again
                  </Link>
                  <button className="button bg-3F4D56 has-text-white is-border-radius-16 has-text-weight-semibold px-5">
                    Summary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PaymentSuccessful
