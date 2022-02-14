import React, { Fragment } from 'react'
import CustomSelect from '../../../../general/form/CustomSelect'

function ProfileEditChangePassword() {
  const questions = [
    'What us the title and artiste of your favorite song?',
  ]
  return (
    <Fragment>
      <div className="profile-page box p-3">
        <h4 className="is-size-5 txt-0C2E60 has-text-weight-semibold">
          Change Password
        </h4>
        <div className="columns is-multiline">
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-weight-normal">
                Current Password
              </label>
              <div className="control">
                <input
                  className="input is-fullwidth"
                  type="password"
                  placeholder="Enter current password"/>
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-weight-normal">
                New Password
              </label>
              <div className="control">
                <input
                  className="input is-fullwidth"
                  type="password"
                  placeholder="Enter New password"/>
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-weight-normal">
                Confirm new Password
              </label>
              <div className="control">
                <input
                  className="input is-fullwidth"
                  type="password"
                  placeholder="Enter confirm new password"/>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label has-text-weight-normal">
                Security question
              </label>
              <div className="control">
                <CustomSelect
                  valueSelect={questions[0]}
                  setValueSelect={() => {}}
                  data={questions}
                />
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="field">
              <label className="label has-text-weight-normal">
                Security Name or Number
              </label>
              <div className="control">
                <input
                  className="input is-fullwidth"
                  type="text"
                  placeholder="22434"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProfileEditChangePassword
