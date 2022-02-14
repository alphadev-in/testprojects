import React from 'react';

import './footer.scss';

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-main">
        <div className="container main d-flex align-items-center flex-wrap justify-content-between">
          <div className="d-flex">
            <div className="text-white d-flex flex-column flex-wrap">
              <h5>The Mixcast</h5>
              <h6 className="text-primary-theme" style={{ cursor: 'pointer' }}>
                <a
                  href="https://www.themixcast.com/about"
                  target="_blank"
                  className="linkColor">
                  About Us
                </a>
              </h6>
              <h6 className="text-primary-theme" style={{ cursor: 'pointer' }}>
                <a
                  href="https://www.themixcast.com/gear"
                  target="_blank"
                  className="linkColor">
                  Gear & Apparel
                </a>
              </h6>
              <h6 className="text-primary-theme" style={{ cursor: 'pointer' }}>
                <a
                  href="https://www.themixcast.com/forum"
                  target="_blank"
                  className="linkColor">
                  Member Forum
                </a>
              </h6>
            </div>
            <div className="text-white d-flex flex-column flex-wrap pl-5">
              <h5>Mixcast Playlists</h5>
              <h6 className="text-primary-theme" style={{ cursor: 'pointer' }}>
                <a
                  href="https://www.themixcast.com/archive"
                  target="_blank"
                  className="linkColor">
                  Previous Playlists
                </a>
              </h6>
              <h6 className="text-primary-theme" style={{ cursor: 'pointer' }}>
                <a
                  href="https://www.themixcast.com/release-schedule"
                  target="_blank"
                  className="linkColor">
                  Release Schedule
                </a>
              </h6>
              <h6 className="text-primary-theme" style={{ cursor: 'pointer' }}>
                <a
                  href="https://www.themixcast.com/submissions"
                  target="_blank"
                  className="linkColor">
                  Submit Songs
                </a>
              </h6>
            </div>
          </div>
          <div className="d-flex flex-column flex-wrap">
            <h4 className="text-white">Follow The Mixcast</h4>
            <div className="d-flex">
              <div
                style={{ width: 30, height: 30, borderRadius: 100 }}
                className="d-flex justify-content-center align-items-center bg-primary-theme">
                <a
                  href="https://open.spotify.com/user/themixcast?si=kwGoaW8MSQOy0rGeuw5P-w"
                  target="_blank">
                  <i className="fab fa-spotify text-white"></i>
                </a>
              </div>
              <div
                style={{ width: 30, height: 30, borderRadius: 100 }}
                className="d-flex justify-content-center align-items-center bg-primary-theme ml-3">
                <a href="https://instagram.com/themixcast" target="_blank">
                  <i className="fab fa-instagram text-white"></i>
                </a>
              </div>
              <div
                style={{ width: 30, height: 30, borderRadius: 100 }}
                className="d-flex justify-content-center align-items-center bg-primary-theme ml-3">
                <a href="https://facebook.com/themixcast" target="_blank">
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
              </div>
              <div
                style={{ width: 30, height: 30, borderRadius: 100 }}
                className="d-flex justify-content-center align-items-center bg-primary-theme ml-3">
                <a href="https://twitter.com/the_mixcast" target="_blank">
                  <i className="fab fa-twitter text-white"></i>
                </a>
              </div>
            </div>
            <div className="text-white font-weight-bolder pt-3 flex-wrap">
              "The Mixcast is not affilated with Spotify"
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-theme bottom">
        <div className="container bottom d-flex align-items-center justify-content-between">
          <div className="text-white d-flex flex-wrap justify-content-between">
            <div>@{new Date().getFullYear()} The Mixcast</div>
            <div></div>
          </div>
          <div className="d-flex flex-wrap">
            <div className="text-white" style={{ cursor: 'pointer' }}>
              {' '}
              <a
                href="https://www.themixcast.com/privacy"
                target="_blank"
                className="linkColorBottom">
                Privacy Policy
              </a>
            </div>
            <div className="text-white pl-3" style={{ cursor: 'pointer' }}>
              <a
                href="https://www.themixcast.com/terms"
                target="_blank"
                className="linkColorBottom">
                Terms
              </a>
            </div>
            <div className="text-white pl-3" style={{ cursor: 'pointer' }}>
              <a
                href="https://www.themixcast.com/disclaimer"
                target="_blank"
                className="linkColorBottom">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
