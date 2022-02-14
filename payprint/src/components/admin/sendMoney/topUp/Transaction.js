import React, { Fragment, useState, useEffect } from 'react'
import InputSelectCountry from '../../../general/form/InputSelectCountry'
import countries from '../../../../utils/countries.json'
import { getCountries } from '../../../../api/countries'

function Transaction() {
  const [allCountries, setAllCountries] = useState([])
  const [countrySend, setCountrySend] = useState(countries.find(el => el.alpha3Code === 'IDN'))
  const [countryReceive, setCountryReceive] = useState(countries.find(el => el.alpha3Code === 'USA'))
  
  useEffect(() => {
    async function fetchData() {
      const data = await getCountries()
      setAllCountries(data)
      setCountrySend(data.find(el => el.alpha3Code === 'IDN'))
      setCountryReceive(data.find(el => el.alpha3Code === 'USA'))
    }
    fetchData()
  }, [])
  return (
    <Fragment>
      <div className="box box-admin-content px-6">
        <h4 className="txt-0C2E60 has-text-weight-semibold has-text-centered mb-45px">
          Transaction
        </h4>
        <div className="columns">
          <div className="column">
            <InputSelectCountry
              valueInput="28,530"
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
          <div className="column">
            <InputSelectCountry
              valueInput="28,530"
              setValueInput={() => {}}
              valueSelect={countryReceive}
              setValueSelect={setCountryReceive}
              allCountries={allCountries}
              label="He/She Receives"
              placeholder=""
              customClass=""
              classLabel="txt-575757"
              classField="custom2"
              showArrow={false}
              showText={false}
              showCurrency={true}
            />
            <p className="is-size-7 txt-8F8F8F my-1">Fees : 2</p>
            <p className="is-size-7 txt-8F8F8F">Tax : 1</p>
          </div>
        </div>
        <div className="is-size-5 has-text-centered">
          Total Pay: 115.22 Pound
        </div>
      </div>
    </Fragment>
  )
}

export default Transaction
