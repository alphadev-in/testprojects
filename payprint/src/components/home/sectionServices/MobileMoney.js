import React, { useState } from 'react'
import MobileMoneySection1 from './mobileMoney/MobileMoneySection1'
import MobileMoneySection2 from './mobileMoney/MobileMoneySection2'
import MobileMoneySection3 from './mobileMoney/MobileMoneySection3'

function MobileMoney() {
  const [currentSection, setCurrentSection] = useState('MobileMoneySection1')
  const sections = {
    MobileMoneySection1: {
      content: <MobileMoneySection1 setCurrentSection={setCurrentSection}/>
    },
    MobileMoneySection2: {
      content: <MobileMoneySection2 setCurrentSection={setCurrentSection}/>
    },
    MobileMoneySection3: {
      content: <MobileMoneySection3 setCurrentSection={setCurrentSection}/>
    },
  }

  return (
    sections[currentSection].content
  )
}

export default MobileMoney
