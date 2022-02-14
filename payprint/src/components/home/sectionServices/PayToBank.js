import React, {useState} from 'react'
import PayToBankSection1 from './payToBank/PayToBankSection1'
import PayToBankSection2 from './payToBank/PayToBankSection2'
import PayToBankSection3 from './payToBank/PayToBankSection3'

function PayToBank() {
  const [currentSection, setCurrentSection] = useState('PayToBankSection1')
  const sections = {
    PayToBankSection1: {
      content: <PayToBankSection1 setCurrentSection={setCurrentSection}/>
    },
    PayToBankSection2: {
      content: <PayToBankSection2 setCurrentSection={setCurrentSection}/>
    },
    PayToBankSection3: {
      content: <PayToBankSection3 setCurrentSection={setCurrentSection}/>
    },
  }

  return (
    sections[currentSection].content
  )
}

export default PayToBank
