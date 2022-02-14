import React, {useState} from 'react'
import Section1 from '../general/Section1'
import { dataSelectTopUp, generateDataSelectTopUp } from '../../../../utils/data'

function TopUpSection1(props) {

  const [select, setSelect] = useState(dataSelectTopUp[0])

  return (
    <Section1
      labelField1="Receiver Phone Number"
      placeholderField1="+44 7657 333633"
      valueSelect1={select}
      setSelect1={setSelect}
      generateDataList={generateDataSelectTopUp}
      actionNext={() => props.setCurrentSection('TopUpSection2')}
      displayFooter={props.displayFooter}
    />
  )
}

export default TopUpSection1
