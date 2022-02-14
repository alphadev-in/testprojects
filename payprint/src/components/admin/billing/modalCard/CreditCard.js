import React, { Fragment, useState, useEffect } from 'react'
import CreditCardCard from '../../../general/CreditCard'
import Checkbox from '../../../general/form/Checkbox'
import InputSelectCountry from '../../../general/form/InputSelectCountry'
import countries from '../../../../utils/countries.json'
import { getCountries } from '../../../../api/countries'

function CreditCard() {
  const [allCountries, setAllCountries] = useState([])
  const [countrySend, setCountrySend] = useState(countries.find(el => el.alpha3Code === 'USA'))

  useEffect(() => {
    async function fetchData() {
      const data = await getCountries()
      setAllCountries(data)
      setCountrySend(data.find(el => el.alpha3Code === 'USA'))
    }
    fetchData()
  }, [])
  return (
    <Fragment>
      <div className="is-relative is-flex is-flex-direction-column is-align-items-center">

        <CreditCardCard/>
        <div className="detail-payment-policy pr-0">
          <p className="is-size-7">
            Is your billing address the same as your home address ?
          </p>
          <div className="is-flex mb-4">
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
          <div className="columns is-multiline">
            <div className="column pb-1 is-12">
              <div className="field has-addons">
                <p className="control mb-0 is-expanded">
                  <input
                    className="input px-18px"
                    type="text"
                    placeholder=""/>
                </p>
              </div>
            </div>
            <div className="column is-6 pb-1 is-6">
              <div className="field has-addons">
                <p className="control mb-0 is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="City"/>
                </p>
              </div>
            </div>
            <div className="column is-6 pb-1 is-6">
              <div className="field has-addons">
                <p className="control mb-0 is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="ZIP Code"/>
                </p>
              </div>
            </div>
            <div className="column is-12 pb-1 is-6">
              <InputSelectCountry
                valueInput=""
                setValueInput={() => {}}
                valueSelect={countrySend}
                setValueSelect={setCountrySend}
                allCountries={allCountries}
                label="You send"
                placeholder=""
                customClass=""
                classLabel="txt-575757"
                classField="custom2"
              />
            </div>
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
            <button className="button btn-add px-6 txt-0C2E60 is-size-18px has-text-weight-semibold">
              Add
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreditCard
