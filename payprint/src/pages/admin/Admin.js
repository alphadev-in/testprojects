import React, { Fragment } from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import EarnAdmin from '../../components/admin/EarnAdmin'
import MenuAdmin from '../../components/admin/MenuAdmin'
import TopHeaderAdmin from '../../components/admin/TopHeaderAdmin'
import Footer from '../../components/general/Footer'
import menuAdmin from '../../utils/admin/menuAdmin'
import '../../css/Admin.scss'

function Admin() {
  const { path } = useRouteMatch();
  const defaultRoute = `${path}/send-money`;
  return (
    <Fragment>
      <section className="hero bg-FEFEFE is-fullheight">
        <div className="hero-body is-align-items-start">
          <div className="container">
            <div className="columns">
              <section className="column is-narrow">
                <div className="is-width-290px is-flex is-flex-direction-column is-justify-content-space-between is-height-100p">
                  <div className="mb-5">
                    <div className="box box-admin min"></div>
                    <MenuAdmin/>
                  </div>
                  <EarnAdmin/>
                </div>
              </section>
              <section className="column is-flex is-flex-direction-column">
                <TopHeaderAdmin/>
                <div className="is-flex-grow-1 is-flex is-flex-direction-column">
                  <Switch>
                    <Route exact path={path}>
                      <Redirect to={defaultRoute} />
                    </Route>
                    {menuAdmin.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.content />}
                      />
                    ))}
                  </Switch>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <Footer isAdmin={true}/>
        </div>
      </section>
    </Fragment>
  )
}

export default Admin
