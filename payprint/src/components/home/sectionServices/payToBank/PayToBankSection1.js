import React, {useState} from 'react'
import Section1 from '../general/Section1'
import DeutsheBank from '../../../../images/deutsheBank.png'

function PayToBankSection1(props) {

  const [select, setSelect] = useState({
    src: DeutsheBank,
    value: '1'
  })

  const listDataSelect = [
    { src: DeutsheBank, value: '1' },
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
      labelField1="Bic/Swift/Routing Number"
      placeholderField1="e.g 610002"
      valueSelect1={select}
      setSelect1={setSelect}
      generateDataList={generateDataList}
      actionNext={() => props.setCurrentSection('PayToBankSection2')}
    />
  )
}

export default PayToBankSection1
