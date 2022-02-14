import React, { Fragment } from 'react'
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import MobileMoney from '../../components/admin/sendMoney/MobileMoney';
import PaymentSuccessful from '../../components/admin/sendMoney/PaymentSuccessful';
import PayToBank from '../../components/admin/sendMoney/PayToBank';
import TopUp from '../../components/admin/sendMoney/TopUp';

function SendMoney() {
  const { path } = useRouteMatch();
  const tabs = [
    {
      name: 'Top up',
      path: `${path}/top-up`,
    },
    {
      name: 'Mobile Money',
      path: `${path}/mobile-money`,
    },
    {
      name: 'Pay to Bank',
      path: `${path}/pay-to-bank`,
    },
  ]
  const currentPath = window.location.pathname
  const pathNoTabs = ['/admin/send-money/payment-successful']
  return (
    <Fragment>
      <div className={`section-service tabs is-fullwidth ${pathNoTabs.includes(currentPath) ? 'is-invisible' : ''}`}>
        <ul>
          {
            tabs.map((tab, index) => (
              <li
                key={index}
                className={currentPath && currentPath.includes(tab.path) ? 'is-active' : ''}>
                <Link
                  className="is-size-14px"
                  to={tab.path}>
                  {tab.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="content box box-admin container-admin is-flex-grow-1">
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/top-up`} />
          </Route>
          <Route path={`${path}/top-up`} component={TopUp}/>
          <Route path={`${path}/mobile-money`} component={MobileMoney}/>
          <Route path={`${path}/pay-to-bank`} component={PayToBank}/>
          <Route path={`${path}/payment-successful`} component={PaymentSuccessful}/>
        </Switch>
      </div>
    </Fragment>
  )
}

export default SendMoney
