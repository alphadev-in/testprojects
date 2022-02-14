import React, { Fragment } from 'react'
import TableCustom from '../../general/TableCustom'

function DashboardIndex() {

  const columns = [
    {
      title: 'Date',
      field: 'date',
      customRows: () => {}
    },
    {
      title: 'Description',
      field: 'description',
      customRows: () => {}
    },
    {
      title: 'Status',
      field: 'status',
      class: 'has-text-centered',
      classCell: 'has-text-centered',
      customRows: () =>
        <span className="icon is-size-5 txt-23A6F0">
          <i className="mdi mdi-check-circle"></i>
        </span>
    },
    {
      title: 'Free',
      field: 'free',
      class: 'has-text-centered',
      classCell: 'has-text-centered',
      customRows: () => {}
    },
    {
      title: 'Amount',
      field: 'amount',
      customRows: () => {}
    },
  ]

  const rows = [
    {
      date: '17 JAN',
      description: 'Received money from 88xxxxxx10',
      status: '',
      free: '- $0,2',
      amount: '+ $342 (USD)',
    },
    {
      date: '15 APR',
      description: 'Received money from 88xxxxxx10',
      status: '',
      free: '- $0,2',
      amount: '+ $912 (USD)',
    },
    {
      date: '25 MAR',
      description: 'Sent money TO 73xxxxxx45',
      status: '',
      free: '- $0,2',
      amount: '+ $1231 (USD)',
    },
    {
      date: '15 APR',
      description: 'Sent money TO 71xxxxxx41',
      status: '',
      free: '- $0,2',
      amount: '+ $562 (USD)',
    },
    {
      date: '17 JAN',
      description: 'Received money from 88xxxxxx10',
      status: '',
      free: '- $0,2',
      amount: '+ $342 (USD)',
    },
    {
      date: '15 APR',
      description: 'Received money from 88xxxxxx10',
      status: '',
      free: '- $0,2',
      amount: '+ $912 (USD)',
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
                      <i className="mdi mdi-24px mdi-gauge"></i>
                    </span>
                  </button>
                  <span className="is-size-18px has-text-black">
                    Recent activity
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3"/>
          <TableCustom
            classTable="table-block"
            columns={columns}
            rows={rows}
          />
          <div className="level">
            <div className="level-left"></div>
            <div className="level-right">
              {/* <button className="button bg-primary has-text-white px-6 is-height-58px">
                <span>Show more</span>
                <span className="icon">
                  <i className="mdi mdi-24px mdi-chevron-down"></i>
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default DashboardIndex
