import React, { Fragment } from 'react'
import img1 from '../../images/cash-1.png'
import img2 from '../../images/cash-2.png'

function SectionHomeBloc1() {
  return (
    <Fragment>
      <section className="" id="SectionHomeBloc1">
        <div className="container">
          <div className="columns is-marginless">
            <div className="column is-align-self-center has-text-black">
              <h1 className="is-size-36px has-text-weight-semibold is-line-height-43px mb-5">
                Access your money anytime, anywhere in the world
              </h1>
              <p className="is-size-6 has-text-weight-normal mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                ccumsanamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
              </p>
              
              <div className="buttons are-medium pt-4">
                <button className="button bg-0C2E60 has-text-white is-border-radius-8 mr-5">
                  <article className="media is-align-items-center">
                    <figure className="media-left">
                    <span className="icon">
                      <i className="mdi mdi-24px mdi-google-play"></i>
                    </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <div className="is-size-10px has-text-weight-bold">Download on the</div>
                        <div className="is-size-15px">Google Play</div>
                      </div>
                    </div>
                  </article>
                </button>
                <button className="button bg-0C2E60 has-text-white is-border-radius-8">
                  <article className="media is-align-items-center">
                    <figure className="media-left">
                    <span className="icon">
                      <i className="mdi mdi-24px mdi-apple"></i>
                    </span>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <div className="is-size-10px has-text-weight-bold">Download on the</div>
                        <div className="is-size-15px">App Store</div>
                      </div>
                    </div>
                  </article>
                </button>
              </div>
            </div>
            <div className="column">
              <figure className="is-relative has-text-centered">
                <img src={img2} alt="" className="img2 is-hidden-mobile" />
                <img src={img1} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default SectionHomeBloc1
