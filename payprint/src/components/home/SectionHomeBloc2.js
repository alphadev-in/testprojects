import React, { Fragment } from 'react'

function SectionHomeBloc2() {
  return (
    <Fragment>
      <section className="" id="SectionHomeBloc2">
        <div className="container has-text-centered has-text-black">
          <div className="columns is-marginless is-justify-content-center">
            <div className="column is-12-mobile is-8">
              <h1 className="is-size-46px has-text-weight-semibold">
                Easy and Fast Way to Send Money
              </h1>
              <p className="is-size-6 has-text-weight-normal mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </div>
          <div className="columns is-marginless is-justify-content-center">
            <div className="column is-12-mobile is-mobile is-9 columns is-multiline">
              <div className="column is-half-mobile is-one-quarter-tablet">
                <div className="number vector">1</div>
                <p className="has-text-weight-semibold">Select Country</p>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <div className="number vector">2</div>
                <p className="has-text-weight-semibold">Choose Service</p>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <div className="number vector">3</div>
                <p className="has-text-weight-semibold">Input Information</p>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <div className="number">4</div>
                <p className="has-text-weight-semibold">Confirm & Send</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default SectionHomeBloc2
