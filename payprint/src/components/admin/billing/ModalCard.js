import React, { Fragment, useState } from 'react'
import CreditCard from './modalCard/CreditCard'
import PayPal from './modalCard/PayPal'

function ModalCard({openModal, setOpenModal}) {
  const [currentTab, setCurrentTab] = useState(0)
  return (
    <Fragment>
      <div className={`modal modal-billing ${openModal ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="columns is-centered is-marginless is-width-100p">

        <div className="column is-paddingless is-8 modal-content">
          <div className="box billing">
            <div className="is-relative">
              {currentTab === 0 &&
                <span
                  onClick={() => { setOpenModal(false) }}
                  className="icon is-height-100p txt-8F8F8F is-clickable btn-close-modal-billing">
                  <i className="mdi mdi-48px mdi-close"></i>
                </span>
              }

              {currentTab === 1 &&
                <span
                  onClick={() => { setOpenModal(false) }}
                  className="icon is-height-100p txt-8F8F8F is-clickable btn-close-modal-billing right">
                  <i className="mdi mdi-48px mdi-close"></i>
                </span>
              }
              <h4 className="has-text-black has-text-weight-semibold has-text-centered is-size-5">
                Add New Payment
              </h4>
              <div className={`section-service tabs is-fullwidth`}>
                <ul>
                  <li
                    className={`is-relative  ${currentTab === 0 ? 'is-active' : ''}`}
                    onClick={() => { setCurrentTab(0) }}>
                    <a
                      className="is-size-14px"
                      href="#root">
                      PayPal
                    </a>
                  </li>
                  <li
                    className={`is-relative  ${currentTab === 1 ? 'is-active' : ''}`}
                    onClick={() => { setCurrentTab(1) }}>
                    <a
                      className="is-size-14px"
                      href="#root">
                      Debit/Credit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="is-flex-grow-1 box-content">
              <div className="columns is-centered is-height-100p is-marginless">
                <div className="column is-5">
                  {currentTab === 0 && <PayPal/>}
                  {currentTab === 1 && <CreditCard/>}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ModalCard
