import React, { Fragment } from 'react'

function SectionInfo() {
  return (
    <Fragment>
      <div className="column is-align-self-center">
        <h1 className="is-size-52px has-text-weight-bold">
          Money Transfer Service Worldwide
        </h1>
        <p className="is-size-5 is-max-width-425px mb-5">
          Send money around the world instantly to anyone you like.
        </p>
        <div className="buttons are-medium">
          <button className="button is-border-radius-8 is-box-shadow-1">
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
          <button className="button is-border-radius-8 is-box-shadow-1">
            <article className="media is-align-items-center">
              <figure className="media-left">
              <span className="icon">
                <i className="mdi mdi-24px mdi-apple"></i>
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
        </div>
      </div>
    </Fragment>
  )
}

export default SectionInfo
