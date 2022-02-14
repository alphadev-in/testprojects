import React, { Fragment, useState } from 'react'
import MobileMoney from './sectionServices/MobileMoney'
import PayToBank from './sectionServices/PayToBank'
import TopUp from './sectionServices/TopUp'

function SectionServices() {
  const [currentTab, setCurrentTab] = useState('TopUp')
  
  const tabs = {
    TopUp: {
      label: 'Top up',
      content: <TopUp />
    },
    MobileMoney: {
      label: 'Mobile Money',
      content: <MobileMoney />
    },
    PayToBank: {
      label: 'Pay to Bank',
      content: <PayToBank />
    },
  }

  return (
    <Fragment>
      <div className="column is-align-self-center">
        <div className="box is-border-radius-22 is-box-shadow-1 p-0 mx-auto is-min-height-500px is-max-width-469px">
          <div className="section-service tabs is-fullwidth">
            <ul>
              <li className={currentTab === 'TopUp' ? 'is-active' : ''}>
                <a
                  className="is-size-14px"
                  onClick={() => setCurrentTab('TopUp')}
                  href="#top-up">
                  Top up
                </a>
              </li>
              <li className={currentTab === 'MobileMoney' ? 'is-active' : ''}>
                <a
                  className="is-size-14px"
                  onClick={() => setCurrentTab('MobileMoney')}
                  href="#mobile-money">
                  Mobile Money
                </a>
              </li>
              <li className={currentTab === 'PayToBank' ? 'is-active' : ''}>
                <a
                  className="is-size-14px"
                  onClick={() => setCurrentTab('PayToBank')}
                  href="#pay-to-bank">
                  Pay to Bank
                </a>
              </li>
            </ul>
          </div>
          <div className="content px-6 pb-6 pt-4">
            { tabs[currentTab].content }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SectionServices
