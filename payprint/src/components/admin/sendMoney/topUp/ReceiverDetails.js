import React, { Fragment, useState, useEffect } from 'react'
import countries from '../../../../utils/countries.json'
import { getCountries } from '../../../../api/countries'
import { generateDataSelectTopUp } from '../../../../utils/data'
import InputSelectCountry from '../../../general/form/InputSelectCountry'
import InputSelectImage from '../../../general/form/InputSelectImage'

function ReceiverDetails({select, setSelect}) {

  const [allCountries, setAllCountries] = useState([])
  const [receiverDetailCountry, setReceiverDetailCountry] = useState(countries.find(el => el.alpha3Code === 'ENG'))
  useEffect(() => {
    async function fetchData() {
      const data = await getCountries()
      setAllCountries(data)
      setReceiverDetailCountry(data.find(el => el.alpha3Code === 'GBR'))
    }
    fetchData()
  }, [])
  return (
    <Fragment>
      <div className="box box-admin-content px-6 mb-90px">
        <div className="box-content ">          
          <div className="mb-4">
            <InputSelectCountry
              valueInput=""
              setValueInput={() => {}}
              valueSelect={receiverDetailCountry}
              setValueSelect={setReceiverDetailCountry}
              allCountries={allCountries}
              label="Receiver Details"
              placeholder="+44 7657 333633"
              customClass=""
              isBtnCountry={true}
            />
          </div>
          <div className="select-custom z2 mb-3">            
            <InputSelectImage
              generateDataList={generateDataSelectTopUp}
              valueSelect={select}
              setValueSelect={setSelect}
            />
          </div>
          <div className="columns is-variable is-1 mb-0">
            <div className="column pb-0">
              <div className="field has-addons">
                <p className="control mb-0 is-expanded">
                  <input
                    className="input is-size-14px custom3 px-18px"
                    type="text"
                    placeholder="First Name"/>
                </p>
              </div>
            </div>
            <div className="column pb-0">
              <div className="field has-addons">
                <p className="control mb-0 is-expanded">
                  <input
                    className="input is-size-14px custom3 px-18px"
                    type="text"
                    placeholder="Last Name"/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ReceiverDetails
