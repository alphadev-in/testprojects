import React, { Fragment } from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom';
import ProfileInformation from './profileView/ProfileInformation';
import ProfileLoginSecurity from './profileView/ProfileLoginSecurity';

function ProfileView() {
  const { path } = useRouteMatch();
  const currentPath = window.location.pathname
  return (
    <Fragment>
      <div className="profile-page box is-paddingless my-4">
        <div className="tabs is-boxed is-fullwidth">
          <ul>
            <li className={currentPath && currentPath === `${path}/profile-information` ? 'is-active' : ''}>
              <Link to={`${path}/profile-information`}>
                <span>Personal Information </span>
              </Link>
            </li>
            <li className={currentPath && currentPath === `${path}/profile-login-security` ? 'is-active' : ''}>
              <Link to={`${path}/profile-login-security`}>
                <span>Login and security</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-4 pt-0">
          <Switch>
            <Route exact path={path}>
              <Redirect to={`${path}/profile-information`} />
            </Route>
            <Route exact path={`${path}/profile-information`}  component={ProfileInformation}/>
            <Route exact path={`${path}/profile-login-security`}  component={ProfileLoginSecurity}/>
          </Switch>
        </div>
      </div>
    </Fragment>
  )
}

export default ProfileView
