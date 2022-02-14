import React, { Fragment } from 'react'
import CustomSelect from '../../../../general/form/CustomSelect'

function ProfileEditAccountSettings() {
  const langs = [
    'English (United state)',
  ]
  const timesZone = [
    '(GMT-06:00) America',
  ]
  const accountStatus = [
    'Active',
  ]
  return (
    <Fragment>
      <div className="profile-page box p-3">
        <h4 className="is-size-5 txt-0C2E60 has-text-weight-semibold">
          Account Settings
        </h4>
        <div className="columns is-multiline">
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-weight-normal">
                Language
              </label>
              <div className="control">
                <CustomSelect
                  valueSelect={langs[0]}
                  setValueSelect={() => {}}
                  data={langs}
                />
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-weight-normal">
                Time zone
              </label>
              <div className="control">
                <CustomSelect
                  valueSelect={timesZone[0]}
                  setValueSelect={() => {}}
                  data={timesZone}
                />
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-weight-normal">
                Account Status
              </label>
              <div className="control">
                <CustomSelect
                  valueSelect={accountStatus[0]}
                  setValueSelect={() => {}}
                  data={accountStatus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProfileEditAccountSettings
