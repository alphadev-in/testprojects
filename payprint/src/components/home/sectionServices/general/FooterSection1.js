import React, { Fragment, useContext } from 'react'
import { ModalAuthContext } from '../../../../Context'

function FooterSection1(props) {
  
  const modal = useContext(ModalAuthContext)

  return (
    <Fragment>
      <div className="column is-12 px-6 py-4">
        <button
          className="button is-fullwidth is-height-39px bg-0C2E60 has-text-white is-size-14px has-text-weight-medium is-border-radius-8"
          onClick={props.actionNext}>
          Next
        </button>
      </div>
      <div className="column is-12 pt-0 is-size-7 has-text-centered txt-9E9E9E">
        Already a user? <span className="txt-0C2E60 is-clickable" onClick={() => {
          modal.setAuthActif('SignIn')
          modal.setActiveModal(true)
        }}>Login</span>
      </div>
      <div className="column is-12 is-size-10px has-text-centered txt-686868">
        By clicking Next, you are agree with our <span className="txt-0C2E60">Terms & Policy</span>
      </div>
    </Fragment>
  )
}

export default FooterSection1
