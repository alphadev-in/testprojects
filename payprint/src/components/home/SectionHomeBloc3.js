import React, { Fragment } from 'react'
import img1 from '../../images/1.svg'
import img2 from '../../images/2.svg'
import img3 from '../../images/3.svg'
import banner from '../../images/banner-img1.png'

function SectionHomeBloc3() {
  return (
    <Fragment>
      <section className="" id="SectionHomeBloc3">
        <div className="has-text-centered has-text-black">
          <div className="columns is-marginless is-justify-content-center">
            <div className="column is-12-mobile is-8">
              <h1 className="is-size-36px has-text-weight-semibold">
                Our Features
              </h1>
              <p className="is-size-6 has-text-weight-normal mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </div>
          <div className="columns is-marginless is-align-content-center">
            <div className="column is-6 is-align-self-center">
              <div className="is-max-width-469px has-text-left ml-auto">
                <section className="media">
                  <div className="media-left">
                    <div className="figure-img one">
                      <img
                        src={img1}
                        alt=""
                        className="is-30x30"/>
                    </div>
                  </div>
                  <div className="media-content">
                    <h1 className="has-text-weight-semibold is-size-5 mb-3">
                      Easy Transaction
                    </h1>
                    Lorem ipsum qitame coctetr asipm scing elised eiusm tempor incidid untdolore consistal.
                  </div>
                </section>
                <section className="media">
                  <div className="media-left">
                    <div className="figure-img two">
                      <img
                        src={img2}
                        alt=""
                        className="is-30x30"/>
                    </div>
                  </div>
                  <div className="media-content">
                    <h1 className="has-text-weight-semibold is-size-5 mb-3">
                      Low Cost
                    </h1>
                    Lorem ipsum qitame coctetr asipm scing elised eiusm tempor incidid untdolore consistal.
                  </div>
                </section>
                <section className="media">
                  <div className="media-left">
                    <div className="figure-img tree">
                      <img
                        src={img3}
                        alt=""/>
                    </div>
                  </div>
                  <div className="media-content">
                    <h1 className="has-text-weight-semibold is-size-5 mb-3">
                      Trusted Services
                    </h1>
                    Lorem ipsum qitame coctetr asipm scing elised eiusm tempor incidid untdolore consistal.
                  </div>
                </section>
              </div>
            </div>
            <div className="column is-6 p-0">
              <img src={banner} className="is-width-100p" alt=""/>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default SectionHomeBloc3
