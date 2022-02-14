import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router'
import menuAdmin from '../../utils/admin/menuAdmin'

function TopHeaderAdmin() {
  const [showMenu, setShowMenu] = useState(false)
  const [leave, setLeave] = useState(true)

  const history = useHistory()

  const classActiveMenu = showMenu ? 'is-active' : ''
  const currentMenu = menuAdmin.find(el => window.location.pathname.includes(el.path));
  return (
    <Fragment>
      <div className="columns is-marginless mb-5">
        <div className="column box box-admin pl-38px is-height-max-content">
          <div className="level">
            <div className="level-left">
              <div className="is-flex is-align-items-center">
                <button className="button bg-3DA8E4 has-text-white mr-5">
                  <span className="icon is-large">
                    <currentMenu.iconTitle fill="white"/>
                  </span>
                </button>
                <span className="is-size-18px has-text-black">
                  {currentMenu.title}
                </span>
              </div>
            </div>
            <div className="level-right">
              <div className="media is-align-items-center ml-4">
                <div className="media-left">
                  <figure className="image">
                    <img
                      className="is-rounded is-40x40"
                      src="https://c8.alamy.com/compfr/tc65kj/l-homme-manger-saucisse-savoureuse-barbu-et-verre-en-papier-concept-de-l-alimentation-de-rue-mode-de-vie-urbain-de-la-nutrition-la-malbouffe-hipster-sans-soucis-manger-malbouffe-tandis-que-s-asseoir-des-escaliers-snack-pour-la-bonne-humeur-guy-eating-hot-dog-tc65kj.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content is-width-77px is-size-14px has-text-black">
                  Welcome ! ABC
                </div>
                <div className="media-right ml-0">
                  <div
                    onMouseEnter={() => { setLeave(false) }}
                    onMouseLeave={() => { setLeave(true) }}
                    className={`dropdown top-header-admin ${classActiveMenu}`}>
                    <div className="dropdown-trigger">
                      <div
                        onClick={() => setShowMenu(!showMenu)}
                        onBlur={() =>{
                          if (leave) setShowMenu(false)
                        }}
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        className="is-clickable">
                        <span className="icon is-large txt-23A6F0">
                          <i className={`mdi mdi-24px mdi-chevron-${showMenu ? 'down' : 'up'}`}></i>
                        </span>
                      </div>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <li
                          onClick={() => {setShowMenu(false)
                            history.push('/')}}
                          className="dropdown-item is-clickable">
                          Logout
                        </li>
                        <li
                          onClick={() => {
                            setShowMenu(false)
                            history.push('/admin/dashboard/settings')
                          }}
                          className="dropdown-item is-clickable">
                          Settings
                        </li>
                        <li
                          onClick={() => {setShowMenu(false)
                          history.push('/admin/my-profile')}}
                          className="dropdown-item is-clickable">
                          Account
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TopHeaderAdmin
