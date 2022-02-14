import React from 'react'

const Header = () => {

  return (
    <header className="py-3 bg-primary has-text-white">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <span className="icon-text">
              <span className="icon">
                <i className="mdi mdi-18px mdi-phone"></i>
              </span>
              <span className="is-size-14px">+1 0222 772</span>
              <span className="icon ml-3">
                <i className="mdi mdi-18px mdi-email"></i>
              </span>
              <span className="is-size-14px">info@mail.com</span>
            </span>
          </div>
          <div className="level-right">
            <span className="icon-text">
              <a href="#root" className="icon has-text-white">
                <i className="mdi mdi-18px mdi-facebook"></i>
              </a>
              <a href="#root" className="icon has-text-white ml-3">
                <i className="mdi mdi-18px mdi-twitter"></i>
              </a>
              <a href="#root" className="icon has-text-white ml-3">
                <i className="mdi mdi-18px mdi-instagram"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
