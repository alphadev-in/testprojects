import React, { Fragment } from 'react'
import GooglePlay from '../../images/Google-Play-Badge.png'
import AppStore from '../../images/App-Store-Badge.png'

function Footer({isAdmin}) {
  const bgColorFooter = isAdmin ? 'bg-3DA8E4' : 'bg-2375F0';
  const bgColorHr = isAdmin ? 'bg-50b1e7' : 'bg-67A9F1';
  const classSocialIcon = isAdmin ? 'admin' : '';
  return (
    <Fragment>
      <footer className={`${bgColorFooter} has-text-white`}>
        <section className="container py-6">
          <div className="columns has-text-centered-mobile">
            <div className="column">
              <h3 className="is-size-5 has-text-weight-semibold mb-5">
                Company
              </h3>
              <p className="has-text-weight-normal mb-4">About us</p>
              <p className="has-text-weight-normal mb-4">Blog</p>
              <p className="has-text-weight-normal mb-4">Careers</p>
              <p className="has-text-weight-normal mb-4">Contact Us</p>
            </div>
            <div className="column">
              <h3 className="is-size-5 has-text-weight-semibold mb-5">
                Support
              </h3>
              <p className="has-text-weight-normal mb-4">Help Center</p>
              <p className="has-text-weight-normal mb-4">Safety Center</p>
              <p className="has-text-weight-normal mb-4">Community Guidelines</p>
            </div>
            <div className="column">
              <h3 className="is-size-5 has-text-weight-semibold mb-5">
                Legal
              </h3>
              <p className="has-text-weight-normal mb-4">Cookies Policy</p>
              <p className="has-text-weight-normal mb-4">Privacy Policy</p>
              <p className="has-text-weight-normal mb-4">Terms of Service </p>
              <p className="has-text-weight-normal mb-4">Law Enforcement</p>
            </div>
            <div className="column">
              <h3 className="is-size-5 has-text-weight-semibold mb-5">
                Install App
              </h3>
              <div className="buttons pt-4 btn-app">
                <button className="button bg-2375F0 is-border-none px-0 mb-3">
                  <img src={GooglePlay} alt=""/>
                </button>
                <button className="button bg-2375F0 is-border-none px-0">
                  <img src={AppStore} alt=""/>
                </button>
              </div>
            </div>
          </div>
        </section>
        <hr className={`my-0 ${bgColorHr}`}/>
        <section className="container">
          <div className="level py-5">
            <div className="level-left has-text-weight-normal">
              <div className="level-item">
                Copyright ©2021. Designed by Figma
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <span className="icon-text">
                  <a href="#root" className={`icon icon-social ${classSocialIcon} has-text-white`}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#root" className={`icon icon-social ${classSocialIcon} has-text-white ml-3`}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#root" className={`icon icon-social ${classSocialIcon} has-text-white ml-3`}>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#root" className={`icon icon-social ${classSocialIcon} has-text-white ml-3`}>
                    <i className="fab fa-youtube"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </Fragment>
  )
}

export default Footer
