import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import menuAdmin from '../../utils/admin/menuAdmin';

function MenuAdmin() {
  const currentPath = window.location.pathname
  return (
    <Fragment>
      <div className="box box-admin px-0">
        <ul className="menu">
          {
            menuAdmin.map((data, index) =>(
              <Link
                key={index}
                className={`is-flex is-align-items-center ${currentPath.includes(data.path) ? 'is-active' : ''}`}
                to={data.path}>
                <span
                  className="icon is-large"
                  children={<data.icon fill={currentPath.includes(data.path) ? '#23a6f0' : '#BABABA'}/>}>
                </span>
                <span>{data.name}</span>
              </Link>
            ))
          }
        </ul>
      </div>
    </Fragment>
  )
}

export default MenuAdmin
