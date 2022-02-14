import React, { Fragment, useState } from 'react'
import ModalCard from '../../components/admin/billing/ModalCard'
import PayPalCreditCard from '../../components/admin/billing/PayPalCreditCard'
import CreditCardVerso from '../../components/general/CreditCardVerso'
import ImgPlus from '../../images/plus.svg'

function Billing() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <Fragment>
      <div className="content box box-admin container-admin is-flex-grow-1">
        <div className="content">
          <div className="billing-page">
            <div className="columns is-multiline">
              <div className="column is-full-tablet is-half-widescreen">
                <CreditCardVerso
                  isDefault={true}
                  code="4334 34332 4232 2324"
                />
                <CreditCardVerso
                  code="xxxx xxxx xxxx xx24"
                />
                <CreditCardVerso
                  code="xxxx xxxx xxxx xx24"
                />
              </div>
              <div className="column">
                <PayPalCreditCard
                />
                <PayPalCreditCard
                />
                <PayPalCreditCard
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-8">
          <button
            onClick={() => { setOpenModal(!openModal) }}
            className="button button-new is-fullwidth">
            <span>
              New
            </span>
            <img src={ImgPlus} alt="img-plus" />
          </button>
        </div>
      </div>
      <ModalCard
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Fragment>
  )
}

export default Billing
