import React, { Fragment } from 'react'
import CustomSelect from '../../../../general/form/CustomSelect'

function ProfileEditPersonalAddress() {
  const states = [
    'California',
  ]
  const countries = [
    'United State',
  ]
  return (
    <Fragment>
      <div className="profile-page box p-3">
        <h4 className="is-size-5 txt-0C2E60 has-text-weight-semibold">
          Personal Address
        </h4>
        <div className="columns is-multiline">
          <div className="column is-12">
            <div className="field">
              <label className="label has-text-weight-normal">
                Address
              </label>
              <div className="control">
                <input
                  className="input is-fullwidth"
                  type="text"
                  placeholder="4th Floor, Plot No.22, Above Public Park"/>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-weight-normal">
                City
              </label>
              <div className="control">
                <input
                  className="input is-fullwidth"
                  type="text"
                  placeholder="San Ditego"/>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-weight-normal">
                State
              </label>
              <div className="control">
                <CustomSelect
                  valueSelect={states[0]}
                  setValueSelect={() => {}}
                  data={states}
                />
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-weight-normal">
                Zip Code
              </label>
              <div className="control">
                <input
                  className="input is-fullwidth"
                  type="text"
                  placeholder="22434"/>
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label className="label has-text-weight-normal">
                Country
              </label>
              <div className="control">
                <CustomSelect
                  valueSelect={countries[0]}
                  setValueSelect={() => {}}
                  data={countries}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProfileEditPersonalAddress
