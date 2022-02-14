import React, { Fragment } from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import ProfileView from '../../components/admin/myProfile/ProfileView';
import ProfileEdit from '../../components/admin/myProfile/profileView/ProfileEdit';
import '../../css/Profile.scss'

function MyProfile() {
  const { path } = useRouteMatch();
  const currentPath = window.location.pathname
  return (
    <Fragment>
      <div className="box box-admin container-admin is-flex-grow-1">
        <div className="p-5">
          <div className="box header-block mb-0">
            <div className="level">
              <div className="level-left">
                <div className="is-flex is-align-items-center">
                  <button className="button bg-3DA8E4 has-text-white mr-3">
                    <span className="icon is-large">
                      <i className="mdi mdi-24px mdi-account"></i>
                    </span>
                  </button>
                  <span className="is-size-18px has-text-black">
                    Personal Profile
                  </span>
                </div>
              </div>
              <div className="level-left">
                <div className="is-flex is-align-items-center">
                  <Link
                    to={`${path}/profile-edit`}
                    className={`is-size-7 ${currentPath === `${path}/profile-edit` ? 'txt-9E9E9E' : 'txt-primary'}`}>
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path={path}>
              <Redirect to={`${path}/profile-view`} />
            </Route>
            <Route path={`${path}/profile-view`}  component={ProfileView}/>
            <Route path={`${path}/profile-edit`}  component={ProfileEdit}/>
          </Switch>
        </div>
      </div>
    </Fragment>
  )
}

export default MyProfile
