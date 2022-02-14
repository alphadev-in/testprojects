import React, { Fragment } from 'react'
import img1 from '../../images/1.svg'
import img2 from '../../images/2.svg'
import img3 from '../../images/3.svg'
import img4 from '../../images/4.svg'

function SectionBlocService() {
  return (
    <Fragment>
      <section className="container is-hidden-touch" id="SectionBlocService">
        <div className="box columns is-multiline is-gapless">
          <div className="column is-align-self-center">
            <div className="has-text-centered">
              <img src={img1} alt="" />
              <p className="is-size-14px txt-0C2E60">Fast Transfer</p>
            </div>
          </div>
          <div className="column border-left">
            <div className="has-text-centered">
              <img src={img2} alt="" />
              <p className="is-size-14px txt-0C2E60">Low Cost</p>
            </div>
          </div>
          <div className="column border-left">
            <div className="has-text-centered">
              <img src={img3} alt="" />
              <p className="is-size-14px txt-0C2E60">Trusted Services</p>
            </div>
          </div>
          <div className="column border-left">
            <div className="has-text-centered">
              <img src={img4} alt="" />
              <p className="is-size-14px txt-0C2E60">24/7 Active Services</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default SectionBlocService
