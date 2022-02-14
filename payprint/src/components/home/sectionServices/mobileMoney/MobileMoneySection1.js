import React, {useState} from 'react'
import Section1 from '../general/Section1'
import Mpesa from '../../../../images/mpesa.png'

function MobileMoneySection1(props) {

  const [select, setSelect] = useState({
    src: Mpesa,
    value: '1'
  })

  const listDataSelect = [
    { src: Mpesa, value: '1' },
  ]
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
    <Section1
      labelField1="Receiver Mobile Money Number"
      placeholderField1="+44 7657 333633"
      valueSelect1={select}
      setSelect1={setSelect}
      generateDataList={generateDataList}
      actionNext={() => props.setCurrentSection('MobileMoneySection2')}
      displayFooter={props.displayFooter}
    />
  )
}

export default MobileMoneySection1
