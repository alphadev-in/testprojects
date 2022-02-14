import React, {useState} from 'react'
import TopUpSection1 from './topUp/TopUpSection1'
import TopUpSection2 from './topUp/TopUpSection2'
import TopUpSection3 from './topUp/TopUpSection3'
import TopUpSection4 from './topUp/TopUpSection4'

function TopUp() {
  const [currentSection, setCurrentSection] = useState('TopUpSection1')
  const sections = {
    TopUpSection1: {
      content: <TopUpSection1 setCurrentSection={setCurrentSection}/>
    },
    TopUpSection2: {
      content: <TopUpSection2 setCurrentSection={setCurrentSection}/>
    },
    TopUpSection3: {
      content: <TopUpSection3 setCurrentSection={setCurrentSection}/>
    },
    TopUpSection4: {
      content: <TopUpSection4 setCurrentSection={setCurrentSection}/>
    },
  }

  return (
    sections[currentSection].content
  )
}

export default TopUp
