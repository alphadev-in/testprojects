import React, { Fragment, useState } from 'react'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import { dataSelectTopUp } from '../../../utils/data'
import BtnToggle from '../../general/BtnToggle'
import CreditCard from '../../general/CreditCard'
import Checkbox from '../../general/form/Checkbox'
import CreditCardList from './general/CreditCardList'
import ReceiverDetails from './topUp/ReceiverDetails'
import ReceiverList from './topUp/ReceiverList'
import Transaction from './topUp/Transaction'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function TopUp() {
  const [select, setSelect] = useState(dataSelectTopUp[0])

  const query = useQuery();
  const { path } = useRouteMatch();

  const receiverList = [
    {
      name: 'John Smith',
      img: dataSelectTopUp[0]
    },
    {
      name: 'Carolle BONOU',
      img: dataSelectTopUp[1]
    }
  ];
  return (
    <Fragment>
      <div className="content">
        <div className="p-4">
          <div className="level mb-40px px-6">
            <div className="level-left"></div>
            <div className="level-item">
              <h3 className="has-text-centered has-text-white has-text-weight-medium mb-0">
                Checkout
              </h3>
            </div>
            <div className="level-right">
              <BtnToggle path={path}/>
            </div>
          </div>
          <div className="columns">
            <div className="column">

              {!query.get("receiver-list") &&
                <ReceiverDetails
                  select={select}
                  setSelect={setSelect}
                />
              }
              {!!query.get("receiver-list") &&
                <ReceiverList
                  receiverList={receiverList}
                />
              }

              <Transaction/>
            </div>
            <div className="column content-credit-card">

              {!query.get("credit-card-list") &&
                <CreditCard/>
              }
              {!!query.get("credit-card-list") &&
                <CreditCardList/>
              }

              <div className="detail-payment-policy">
                {!query.get("credit-card-list") &&
                  <Checkbox
                    label="Save Card"
                    classLabel="is-size-14px"
                    value={true}
                  />
                }
                <p className="is-size-7">
                  Is your billing address the same as your home address ?
                </p>
                <div className="is-flex">
                  <span className="mr-2">
                    <Checkbox
                      label="Yes"
                      classLabel="is-size-14px"
                      value={true}
                    />
                  </span>
                  <span>
                    <Checkbox
                      label="No"
                      classLabel="is-size-14px"
                    />
                  </span>
                </div>
                <div className="my-5 py-5">
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
                <div className="has-text-right">
                  <Link to="/admin/send-money/payment-successful">
                    <button className="button bg-3F4D56 has-text-white is-width-173px is-border-radius-16 has-text-weight-semibold">
                      Pay
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TopUp
