import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import ProfileEditAccountSettings from './prodileEdit/ProfileEditAccountSettings'
import ProfileEditChangePassword from './prodileEdit/ProfileEditChangePassword'
import ProfileEditPersonalAddress from './prodileEdit/ProfileEditPersonalAddress'
import ProfileEditPersonalInformation from './prodileEdit/ProfileEditPersonalInformation'

function ProfileEdit() {
  return (
    <Fragment>
      <div className="profile-page box p-3 my-4">
        <Link
          to="/admin/my-profile/profile-view/profile-information"
          className="close">
          <span className="icon">
            <i className="mdi mdi-close-thick"></i>
          </span>
        </Link>
        <ProfileEditPersonalInformation/>
        <ProfileEditPersonalAddress/>
        <ProfileEditAccountSettings/>
        <ProfileEditChangePassword/>
        <button className="button is-primary is-fullwidth">
          <span className="icon">
            <i className="mdi mdi-content-save-outline"></i>
          </span>
          <span>Save Change</span>
        </button>
      </div>
    </Fragment>
  )
}

export default ProfileEdit
