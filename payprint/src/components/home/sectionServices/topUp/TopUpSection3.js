import React, {useContext} from 'react'
import { ModalAuthContext } from '../../../../Context'
import CreditCart from '../../../general/CreditCard'

function TopUpSection3(props) {

  const modal = useContext(ModalAuthContext)

  return (
    <div className="is-max-width-339px mx-auto">
      <CreditCart/>
      <div className="columns is-mobile mt-3">
        <div className="column is-6 has-text-right">
          <button
            className="button is-width-106px is-height-39px bg-0C2E60 has-text-white is-border-radius-8 is-size-14px has-text-weight-medium"
            onClick={() => props.setCurrentSection('TopUpSection2')}>
            Back
          </button>
        </div>
        <div className="column is-6">
          <button
            className="button is-fullwidth is-height-39px bg-0C2E60 has-text-white is-border-radius-8 is-size-14px has-text-weight-medium"
            onClick={() => props.setCurrentSection('TopUpSection4')}>
            Pay
          </button>
        </div>
      </div>
      <div className="has-text-right is-size-10px txt-0C2E60 mr-6">
        <span
          className="txt-0C2E60 is-clickable"
          onClick={() => {
            modal.setAuthActif('SignIn')
            modal.setActiveModal(true)
          }}>
          {'->'} SignUp
        </span>
      </div>
    </div>
  )
}

export default TopUpSection3
