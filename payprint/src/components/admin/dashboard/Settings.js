import React, { Fragment } from 'react'
import Checkbox from '../../general/form/Checkbox'
import TableCustom from '../../general/TableCustom'

function Settings() {

  const columns = [
    {
      title: 'Notification',
      field: 'notification',
      customRows: (row) => <div className="">
        {row.notification} <br/>
        {row.type}
    </div>
    },
    {
      title: 'Email',
      field: 'email',
      class: 'has-text-centered',
      customRows: (row) => <div className="is-flex is-justify-content-center">
        <Checkbox customClass="is-medium is-primary" value={row.email}/>
      </div>
    },
    {
      title: 'Push',
      field: 'push',
      class: 'has-text-centered',
      customRows: (row) => <div className="is-flex is-justify-content-center">
        <Checkbox customClass="is-medium is-primary" value={row.push}/>
      </div>
    },
  ]

  const rows = [
    {
      type: 'Mobile Recharge.',
      notification: 'Be the first to know about new features and other news.',
      email: true,
      push: false,
    },
    {
      type: 'Bill Payment',
      notification: 'Send me an email when our bill payment successfully.',
      email: false,
      push: true,
    },
    {
      type: 'Have a problem with payment',
      notification: 'Send me an email when have a problem with a payment.',
      email: true,
      push: false,
    },
    {
      type: 'Special offers',
      notification: 'Receive last-minute offers from us',
      email: false,
      push: true,
    },
    {
      type: 'Reviews Surveys',
      notification: 'Share your payment experience to better inform users.',
      email: true,
      push: false,
    },
    {
      type: 'Password Change',
      notification: 'When you\'re change the Password',
      email: false,
      push: true,
    },
  ]
  return (
    <Fragment>
    <div className="content box box-admin container-admin is-flex-grow-1">
      <div className="p-5">
        <div className="box header-block mb-0">
          <div className="level">
            <div className="level-left">
              <div className="is-flex is-align-items-center">
                <button className="button bg-3DA8E4 has-text-white mr-3">
                  <span className="icon is-large">
                    <i className="mdi mdi-24px mdi-cog"></i>
                  </span>
                </button>
                <span className="is-size-18px has-text-black">
                  Settings
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="my-4">
          Select subscriptions to be delivered to
          <span className="has-text-weight-medium has-text-black"> demo@compagny.com</span>
        </p>

        <TableCustom
          classTable="table-block"
          columns={columns}
          rows={rows}
        />
        <div className="level">
          <div className="level-left">
            <button className="button bg-primary has-text-white px-6 is-height-58px">
              <span>Save changes</span>
            </button>
          </div>
          <div className="level-right"></div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Settings
