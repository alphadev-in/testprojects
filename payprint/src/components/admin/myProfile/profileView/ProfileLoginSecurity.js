import React, { Fragment } from 'react'

function ProfileLoginSecurity() {
  return (
    <Fragment>
    <div className="columns is-marginless">
      <div className="column is-3">
        <strong>Language</strong>
      </div>
      <div className="column">
        English (United State)
      </div>
    </div>
    <hr className="my-3"/>
    <div className="columns is-marginless">
      <div className="column is-3">
        <strong>Time Zone</strong>
      </div>
      <div className="column">
        (GMT-06:00) America
      </div>
    </div>
    <hr className="my-3"/>
    <div className="columns is-marginless">
      <div className="column is-3">
        <strong>Password</strong>
      </div>
      <div className="column">
        <div className="field">
          <p className="control">
            <input
              className="input is-static py-0"
              type="password"
              value="me@example.com"
              readonly={true}
              style={{
                fontSize: '30px',
                height: '20px',
              }}/>
          </p>
        </div>
      </div>
    </div>
    <hr className="my-3"/>
    <div className="columns is-marginless">
      <div className="column is-3">
        <strong>2-step verification</strong>
      </div>
      <div className="column">
        Add an extra layer of security to your account by using a one-time security code in addition to your password each time you log in.
        <span className="txt-primary">
          <span className="icon is-size-5 txt-23A6F0">
            <i className="fas fa-wrench"></i>
          </span> Update
        </span>
      </div>
    </div>
    <hr className="my-3"/>
    <div className="columns is-marginless">
      <div className="column is-3">
        <strong>Stay logged in for faster purchases</strong>
      </div>
      <div className="column">
        Add an extra layer of security to your account by using a one-time security code in addition to your password each time you log in.
        <span className="txt-primary">
          Update
        </span>
      </div>
    </div>
    <hr className="my-3"/>
    <div className="columns is-marginless">
      <div className="column is-3">
        <strong>Security question</strong>
      </div>
      <div className="column">
        <div className="field">
          <p className="control">
            <input
              className="input is-static py-0"
              type="password"
              value="me@example.com"
              readonly={true}
              style={{
                fontSize: '30px',
                height: '20px',
              }}/>
          </p>
        </div>
      </div>
    </div>
    <hr className="my-3"/>
    <div className="columns is-marginless">
      <div className="column is-3">
        <strong>Account type</strong>
      </div>
      <div className="column">
        <div className="level">
          <div className="level-left">
            Business
          </div>
          <div className="level-right txt-23A6F0">
            <span className="icon is-size-5">
              <i className="mdi mdi-close"></i>
            </span> Close account
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default ProfileLoginSecurity
