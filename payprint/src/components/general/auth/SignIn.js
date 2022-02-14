import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

function SignIn(props) {

  const history = useHistory();

  const login = () => {
    history.push('/admin/send-money')
    props.setActive(false)
  }

  return (
    <Fragment>
      <div className="box px-5">
        <h1 className="is-size-26px has-text-weight-semibold mt-6 mb-5">
          Sign In
        </h1>
        <div className="field has-addons">
          <p className="control mb-0 is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Username or email" />
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
        <div className="">
          <button
            className="button bg-primary mt-38px"
            type="submit"
            onClick={() => { login() }}>
            SIGN IN
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
            onClick={() => props.setCurrentAuth('SignUp')}>
            Sign Up
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default SignIn
