import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ModalAuthContext } from '../../Context';

const Menu = () => {

  const [activeMenu, setActiveMenu] = useState(false)

  const modal = useContext(ModalAuthContext)

  return (
    <nav className="py-4">
      <div className="container">
        <div className="level is-mobile">
          <div className="level-left"></div>
          <ul className="level-right is-size-14px txt-secondary is-menu is-hidden-touch">
            <li className="level-item mr-10_5px">
              <NavLink
                to="/home"
                className="is-link"
                activeClassName="is-active">
                Home
              </NavLink>
            </li>
            <li className="level-item mx-10_5px">
              <NavLink
                to="/our-company"
                className="is-link"
                activeClassName="is-active">
                Our Company
              </NavLink>
            </li>
            <li className="level-item mx-10_5px">
              <NavLink
                to="/how-it-works"
                className="is-link"
                activeClassName="is-active">
                How it Works
              </NavLink>
            </li>
            <li className="level-item mx-10_5px">
              <NavLink
                to="/faqs"
                className="is-link"
                activeClassName="is-active">
                FAQs
              </NavLink>
            </li>
            <li className="level-item ml-10_5px mr-0">
              <NavLink
                to="/contact"
                className="is-link"
                activeClassName="is-active">
                Contact
              </NavLink>
            </li>
            <li className="level-item mx-45px">
              <span
                className="txt-primary is-clickable"
                onClick={() => {
                  modal.setAuthActif('SignIn')
                  modal.setActiveModal(true)
                }}>
                Login
              </span>
            </li>
            <li className="level-item ml-1 mr-0">
              <button
                className="button is-height-58px is-width-166px is-border-radius-5 bg-primary has-text-white"
                onClick={() => {
                  modal.setAuthActif('SignUp')
                  modal.setActiveModal(true)
                }}>
                <span className="is-size-14px has-text-weight-medium mr-2">Sign up now</span>
                <span className="icon ml-2">
                  <i className="mdi mdi-arrow-right"></i>
                </span>
              </button>
            </li>
          </ul>
          <div className="level-right is-hidden-desktop">
            <div className="level-item">
              <button
                className="button is-height-58px is-width-166px is-border-radius-5 bg-primary has-text-white"
                onClick={() => {
                  modal.setAuthActif('SignUp')
                  modal.setActiveModal(true)
                }}>
                <span className="is-size-14px has-text-weight-medium mr-2">Sign up now</span>
                <span className="icon ml-2">
                  <i className="mdi mdi-arrow-right"></i>
                </span>
              </button>
            </div>
            <div className="level-item mr-4">
              <div className={`dropdown is-right ${activeMenu ? 'is-active' : ''}`}>
                <div className="dropdown-trigger">
                  <button
                    className="button is-white is-height-58px"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu-mobile"
                    onClick={() => {
                      setActiveMenu(!activeMenu)
                    }}
                  >
                    <span className="icon ml-2">
                      <i className={`mdi mdi-36px mdi-${activeMenu ? 'close-thick' : 'menu'}`}></i>
                    </span>
                  </button>
                </div>
                <ul className="dropdown-menu" id="dropdown-menu-mobile" role="menu">
                  <div className="dropdown-content">
                    <li className="dropdown-item is-size-14px txt-secondary">
                      <NavLink
                        to="/home"
                        className="txt-secondary"
                        activeClassName="is-active">
                        Home
                      </NavLink>
                    </li>
                    <li className="dropdown-item is-size-14px txt-secondary">
                      <NavLink
                        to="/our-company"
                        className="txt-secondary"
                        activeClassName="is-active">
                        Our Company
                      </NavLink>
                    </li>
                    <li className="dropdown-item is-size-14px txt-secondary">
                      <NavLink
                        to="/how-it-works"
                        className="txt-secondary"
                        activeClassName="is-active">
                        How it Works
                      </NavLink>
                    </li>
                    <li className="dropdown-item is-size-14px txt-secondary">
                      <NavLink
                        to="/faqs"
                        className="txt-secondary"
                        activeClassName="is-active">
                        FAQs
                      </NavLink>
                    </li>
                    <li className="dropdown-item is-size-14px txt-secondary">
                      <NavLink
                        to="/contact"
                        className="txt-secondary"
                        activeClassName="is-active">
                        Contact
                      </NavLink>
                    </li>
                    <li className="dropdown-item is-size-14px txt-secondary">
                      <span
                        className="txt-primary is-clickable"
                        onClick={() => {
                          modal.setAuthActif('SignIn')
                          modal.setActiveModal(true)
                          setActiveMenu(false)
                        }}>
                        Login
                      </span>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu;
