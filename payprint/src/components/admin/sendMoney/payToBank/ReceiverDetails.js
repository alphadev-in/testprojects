import React, { Fragment, useState } from 'react'
import Checkbox from '../../../general/form/Checkbox'
import DeutsheBank from '../../../../images/deutsheBank.png'
import Accordion from '../../../general/Accordion'
import InputSelectImage from '../../../general/form/InputSelectImage'

function ReceiverDetails() {

  const listDataSelect = [
    { src: DeutsheBank, value: '1' },
  ]
  const [checkSelect, setCheckSelect] = useState(listDataSelect[0])
  const generateDataList = (actionSelect) => {
    return listDataSelect.map((item, index) =>
      <li
        onClick={() => actionSelect(item)}
        key={index}
        className="px-3 dropdown-item">
        <div className="level is-width-100p is-height-100p">
          <img
            src={item.src} alt="flag-en" 
            style={{ height: '20px' }}
          />
        </div>
      </li>
    )
  }
  return (
    <Fragment>
      <div className="box box-admin-content px-6 mb-90px">
        <label className="label txt-0C2E60 has-text-weight-semibold is-size-10px">
          Receiver Details
        </label>
        <Accordion label="Bic/Swift/Routing Number">
          <div className="field has-addons">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-14px custom3 px-18px"
                type="text"
                placeholder="e.g 610002"/>
            </p>
          </div>
        </Accordion>
        <Accordion label="Account Number/IBAN">
          <div className="field has-addons">
            <p className="control mb-0 is-expanded">
              <input
                className="input is-size-14px custom3 px-18px"
                type="text"
                placeholder="e.g. 46545564321"/>
            </p>
          </div>
        </Accordion>
        <Accordion label="Personal Information" defaultValue={true}>
        <div className="columns is-multiline is-variable is-1 mb-0">
            <div className="column is-6 pb-0">
              <div className="field has-addons">
                <p className="control mb-0 is-expanded">
                  <input
                    className="input is-size-14px custom3 px-18px"
                    type="text"
                    placeholder="First Name"/>
                </p>
              </div>
            </div>
            <div className="column is-6 pb-0">
              <div className="field has-addons">
                <p className="control mb-0 is-expanded">
                  <input
                    className="input is-size-14px custom3 px-18px"
                    type="text"
                    placeholder="Last Name"/>
                </p>
              </div>
            </div>
            <div className="column is-12 pb-0">
              <div className="field has-addons">
                <p className="control mb-0 is-expanded">
                  <input
                    className="input is-size-14px custom3 px-18px"
                    type="text"
                    placeholder="Address"/>
                </p>
              </div>
            </div>
            <div className="column is-12 pb-0">
              <div className="field has-addons">
                <p className="control mb-0 is-expanded">
                  <input
                    className="input is-size-14px custom3 px-18px"
                    type="text"
                    placeholder="Phone Number"/>
                </p>
              </div>
            </div>
            <div className="column is-12 is-narrow pb-0 is-flex is-align-items-center is-justify-content-end">
              <div className="level">
                <Checkbox
                  label=""
                  classLabel="is-size-14px"
                  value={true}
                />
                <InputSelectImage
                  generateDataList={generateDataList}
                  valueSelect={checkSelect}
                  setValueSelect={setCheckSelect}
                  showArrow={false}
                  customClassTrigger="custom2"
                />
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </Fragment>
  )
}

export default ReceiverDetails
