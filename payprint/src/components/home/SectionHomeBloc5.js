import React, { Fragment } from 'react'
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import img8 from '../../images/8.png'
import img9 from '../../images/9.png'

function SectionHomeBloc5() {

  const partners = [
    { src: '' },
    { src: img2 },
    { src: img7 },
    { src: img4 },
    { src: '' },
    { src: img1 },
    { src: '' },
    { src: '' },
    { src: '' },
    { src: img9 },
    { src: '' },
    { src: img3 },
    { src: img6 },
    { src: img8 },
  ].map((el, index) =>
    <div className={`column is-one-third-mobile is-one-fifth-tablet ${el.src ? '' : 'is-hidden-mobile'}`} key={index}>
      <figure className={el.src ? 'logo mx-auto' : ''}>
        <img src={el.src} alt="" />
      </figure>
    </div>
  )

  return (
    <Fragment>
      <section className="" id="SectionHomeBloc5">
        <div className="container has-text-centered has-text-black">
          <div className="columns is-justify-content-center">
            <div className="column is-12-mobile is-8">
              <h1 className="is-size-36px has-text-weight-semibold">
                Our Parrner Programs
              </h1>
              <p className="is-size-6 has-text-weight-normal mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </div>
          <div className="columns is-marginless is-justify-content-center">
            <div className="column is-12-mobile is-10 columns is-mobile is-marginless order-logo">
              { partners }
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default SectionHomeBloc5
