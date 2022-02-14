import React, { useContext } from 'react'
import Validation from '../../../../images/verification.png'
import Print from '../../../../images/print.svg'
import { ModalAuthContext } from '../../../../Context'

function TopUpSection4(props) {

  const modal = useContext(ModalAuthContext)

  return (
    <div className="is-width-300px mx-auto">
      <article className="media mb-4 pl-6">
        <div className="media-content">
          <div className="content has-text-centered">
            <img src={Validation} alt="validation"/>
            <p className="is-size-14px txt-27C64B has-text-weight-semibold">Payment Successful</p>
          </div>
        </div>
        <div className="media-right">
          <button className="print">
            <img src={Print} alt="Print"/>
          </button>
        </div>
      </article>
      <div className="is-size-10px mb-4">
        <p className="is-size-7 txt-0C2E60">Transaction Details</p>
        <p className="txt-9E9E9E">Transaction: #45601</p>
        <p className="txt-9E9E9E">Date and time: 2021-12-09 at 01:22:33 PM</p>
        <p className="txt-9E9E9E">Amount: 117.3 Pound</p>
        <p className="txt-0C2E60 is-font-weight-400">
          Note: Login in will allow you to reuse previous transactions
          and card and proceed to payment in 2 clicks !
        </p>
      </div>
      <div className="columns is-mobile is-marginless ">
        <div className="column is-paddingless is-6 is-size-10px txt-0C2E60">
          <span
            className="txt-0C2E60 is-clickable"
            onClick={() => {
              modal.setAuthActif('SignIn')
              modal.setActiveModal(true)
            }}>
            {'->'} Login Now
          </span> <br/><br/>
          <span
            className="txt-0C2E60 is-clickable"
            onClick={() => {
              modal.setAuthActif('SignUp')
              modal.setActiveModal(true)
            }}>
            {'->'} Register Now
          </span>
        </div>
        <div className="column is-paddingless is-6">
          <button
            className="button is-fullwidth is-height-39px bg-0C2E60 has-text-white is-border-radius-8 is-size-14px has-text-weight-medium"
            onClick={() => props.setCurrentSection('TopUpSection1')}>
            Start New Topup
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopUpSection4
