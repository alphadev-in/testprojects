import React, { Fragment } from 'react'
import DatePicker from '../../../../general/form/DatePicker'

function ProfileEditPersonalInformation() {
  return (
    <Fragment>
      <div className="profile-page box p-3">
        <h4 className="is-size-5 txt-0C2E60 has-text-weight-semibold">
          Personal Information
        </h4>
        <div className="columns is-multiline">
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-weight-bold">First Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Jhone"/>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-weight-bold">Last Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Doue"/>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-weight-bold">Date of Birth</label>
              <div className="control">
                <DatePicker/>
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-weight-normal">
                Email ID <span className="txt-9E9E9E"> (Primary)</span>
              </label>
              <div className="control">
                <input
                  className="input is-fullwidth"
                  type="text"
                  placeholder="compagny@demon.com"/>
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-weight-normal">
                Email ID <span className="txt-9E9E9E"> (Personal)</span>
              </label>
              <div className="control">
                <input
                  className="input is-fullwidth"
                  type="text"
                  placeholder="compagny@my.com"/>
              </div>
            </div>
            <div className="txt-23A6F0 has-text-right">
              <span className="icon is-size-5">
                <i className="mdi mdi-plus-circle"></i>
              </span> Add another email
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-weight-normal">
                Mobile <span className="txt-9E9E9E"> (Primary)</span>
              </label>
              <div className="control">
                <input
                  className="input is-fullwidth"
                  type="text"
                  placeholder="+2 321-5234-0112"/>
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-weight-normal">
                Mobile <span className="txt-9E9E9E"> (Home)</span>
              </label>
              <div className="control">
                <input
                  className="input is-fullwidth"
                  type="text"
                  placeholder="+2 321-5234-0112"/>
              </div>
            </div>
            <div className="txt-23A6F0 has-text-right">
              <span className="icon is-size-5">
                <i className="mdi mdi-plus-circle"></i>
              </span> Add another email
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProfileEditPersonalInformation
