import React, { useEffect, Fragment } from 'react';

import './login.scss';

import {
  isMobileWidth,
  isTabletWidth
} from '../../components/common/util/util';

import {
  MEMBERFULL_LOGIN_REDIRECT_URL,
  MEMBERFULL_SUBSCRIBE_URL,
  MEMBERFULL_SUBSCRIBE_URL_SECOND
} from './../../../server/util/config';

import Footer from '../Footer/Footer';

// import logodark from '../../assets/images/logodark.png';

export default function Login() {
  useEffect(() => {
    //  if(props.history.location.search)
    //  {
    //    props.history.push("/home")
    //  }
  }, []);

  const mobileWidth = isMobileWidth();
  const tabletWidth = isTabletWidth();
  return (
    <Fragment>
      <div
        className="w-100 d-flex justify-content-center align-item-center pt-5"
        style={{ minHeight: '80vh' }}>
        <div
          className={`${
            mobileWidth || tabletWidth ? 'w-100' : 'w-50'
          } d-flex flex-column`}>
          <div style={{ marginBottom: 20 }}>{/* <img src={logodark} /> */}</div>
          <div style={{ fontSize: 19 }} className="pt-1">
            Sorry, you need to subscribe to The Mixcast to access our Spotify
            App. <i className="fa fa-lock"></i>
          </div>
          <div className="pt-4">
            <div className="d-flex align-items-center">
              <span style={{ fontSize: 7 }} className="fas fa-circle"></span>
              <div style={{ fontSize: 19 }} className="pl-2">
                Current subscribers to The Mixcast can{' '}
                <a
                  className="text-primary-theme"
                  href={MEMBERFULL_LOGIN_REDIRECT_URL}>
                  login here
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span style={{ fontSize: 7 }} className="fas fa-circle"></span>
              <div style={{ fontSize: 19 }} className="pl-2">
                <a
                  className="text-primary-theme"
                  href={MEMBERFULL_SUBSCRIBE_URL}>
                  Subscribe Here
                </a>{' '}
                for $4.99 a month (comes with 14 day free trial)
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span style={{ fontSize: 7 }} className="fas fa-circle"></span>
              <div style={{ fontSize: 19 }} className="pl-2">
                <a
                  className="text-primary-theme"
                  href={MEMBERFULL_SUBSCRIBE_URL_SECOND}>
                  Subscribe here
                </a>{' '}
                for $50 a year (comes with 14 day free trial)
              </div>
            </div>
            <div
              style={{ borderTop: '1px solid black' }}
              className="mt-4"></div>
            <div style={{ fontSize: 19 }} className="pt-4">
              Subscribers Get -
            </div>
            <div className="d-flex align-items-center pt-4">
              <span style={{ fontSize: 7 }} className="fas fa-circle"></span>
              <div style={{ fontSize: 19 }} className="pl-2">
                Access to The Mixcast Spotify App
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span style={{ fontSize: 7 }} className="fas fa-circle"></span>
              <div style={{ fontSize: 19 }} className="pl-2">
                Access to our Playlist Archives (over 250 tracklists)
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span style={{ fontSize: 7 }} className="fas fa-circle"></span>
              <div style={{ fontSize: 19 }} className="pl-2">
                Our weekly newsletter highlighting the best new releases
              </div>
            </div>
            <div
              style={{ borderTop: '1px solid black' }}
              className="mt-4"></div>
            <div style={{ fontSize: 19 }} className="pt-4">
              Have Questions Before You Subscribe?
            </div>
            <div className="d-flex align-items-center pt-4">
              <span style={{ fontSize: 7 }} className="fas fa-circle"></span>
              <div style={{ fontSize: 19 }} className="pl-2">
                Check Out Our{' '}
                <a
                  className="text-primary-theme"
                  href="https://themixcast.com/pricing"
                  target="_blank">
                  Pricing Plans And Member Benefits
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span style={{ fontSize: 7 }} className="fas fa-circle"></span>
              <div style={{ fontSize: 19 }} className="pl-2">
                Our{' '}
                <a
                  className="text-primary-theme"
                  href="https://themixcast.com/faq"
                  target="_blank">
                  FAQS
                </a>{' '}
                May Help You Find An Answer Quickly
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span style={{ fontSize: 7 }} className="fas fa-circle"></span>
              <div style={{ fontSize: 19 }} className="pl-2">
                Or{' '}
                <a
                  className="text-primary-theme"
                  href="https://themixcast.com/about"
                  target="_blank">
                  Contact Us
                </a>{' '}
                For More Help
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
