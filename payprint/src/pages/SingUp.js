import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../images/facebook.svg'
import Google from '../images/google.svg'

const Login = () => {
  return (
    <Fragment>
      <section className="hero bg-primary is-fullheight auth">

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-centered">
              <div className="column is-5 box px-5">
                <h1 className="is-size-26px has-text-weight-semibold mt-6">Sign Up</h1>
                <div className="field has-addons">
                  <p className="control mb-0 is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Fullname" />
                  </p>
                </div>
                <div className="field has-addons">
                  <p className="control mb-0 is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Email" />
                  </p>
                </div>
                <div className="field has-addons">
                  <p className="control mb-0 is-expanded">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password" />
                  </p>
                </div>
                <div className="has-text-left">
                  <label className="checkbox is-size-7">
                    <input type="checkbox" className="mr-3"/>
                    Agree with <span className="txt-primary">Terms and Conditions</span>
                  </label>
                </div>
                <div className="">
                  <button
                    className="button bg-primary mt-6"
                    type="submit">
                    SIGN UP
                  </button>
                </div>
                <div className="my-6">
                  <p
                    className="is-size-18px has-text-weight-light">
                    Or login with
                  </p>
                </div>
                <div className="">
                  <button
                    className="button mr-3"
                    type="auth">
                    <img src={Facebook} alt="facebook" />
                  </button>
                  <button
                    className="button"
                    type="auth">
                    <img src={Google} alt="facebook" />
                  </button>
                </div>
                <div className="my-6">
                  <Link
                    className="is-size-5 has-text-weight-bold txt-primary"
                    to="/sing-in">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Login;
