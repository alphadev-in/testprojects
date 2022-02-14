import React, { Fragment } from 'react'
import '../../../css/Checkbox.scss'
import Check from '../../../images/check-box.svg'

function Checkbox({label, classLabel, value, customClass}) {
  return (
    <Fragment>
      <label className={`checkbox-custom ${customClass || ''}`}>
        <span className="checkbox__input">
          <input
            type="checkbox"
            name="checkbox"
            checked={value}
            onChange={() => {}}/>
          <span className="checkbox__control">
            <img src={Check} alt="check"/>
          </span>
        </span>
        {label && <span className={classLabel}> {label} </span>}
      </label>
    </Fragment>
  )
}

export default Checkbox
