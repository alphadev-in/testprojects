import React, { Fragment, useState } from 'react'
import ReceiverDetail from '../../components/admin/myReceiver/ReceiverDetail'
import TemplateReceiverList from '../../components/admin/myReceiver/TemplateReceiverList'
import myReceiverList from '../../utils/admin/myReceiver'

function MyReceiver() {

  const [receiverSelect, setReceiverSelect] = useState(myReceiverList[0])

  return (
    <Fragment>
      <div className="content box box-admin container-admin is-flex-grow-1 my-receiver-page">
        <div className="content-search">
          <h3 className="has-text-centered has-text-white has-text-weight-medium">
            My Receivers
          </h3>

          <div className="columns is-centered">
            <div className="column is-8">
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search"/>
                  <span className="icon is-left">
                    <i className="mdi mdi-24px mdi-magnify"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-marginless px-5 mb-6">
          <div className="column my-receiver-list">
            {
              myReceiverList
                .map((receiver, index) =>
                  <TemplateReceiverList
                    receiver={receiver}
                    key={index}
                    index={index}
                    receiverSelect={receiverSelect}
                    setReceiverSelect={setReceiverSelect}
                  />
                )
            }
          </div>
          <div className="column">
            <ReceiverDetail
              receiver={receiverSelect}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MyReceiver
