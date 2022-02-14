import React, { Fragment } from 'react'

function SignUp(props) {
  return (
    <Fragment>
      <div className="box px-5">
        <h1 className="is-size-26px has-text-weight-semibold mt-6 mb-5">
          Sign Up
        </h1>
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
            className="button bg-primary mt-5"
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
            <img src={props.Facebook} alt="facebook" />
          </button>
          <button
            className="button"
            type="auth">
            <img src={props.Google} alt="facebook" />
          </button>
        </div>
        <div className="my-6">
          <span
            className="is-size-5 has-text-weight-semibold txt-primary is-clickable"
            onClick={() => props.setCurrentAuth('SignIn')}>
            Sign In
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default SignUp
