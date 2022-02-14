import React, { Fragment } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import DashboardIndex from '../../components/admin/dashboard/DashboardIndex';
import Settings from '../../components/admin/dashboard/Settings';

function Dashboard() {
  const { path } = useRouteMatch();

  return (
    <Fragment>
      <Switch>
        <Route exact path={path}  component={DashboardIndex}/>
        <Route exact path={`${path}/settings`}  component={Settings}/>
      </Switch>
    </Fragment>
  )
}

export default Dashboard
