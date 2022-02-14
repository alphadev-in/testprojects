import React, { Fragment } from 'react'
import Checkbox from '../../general/form/Checkbox'

function ReceiverDetail({receiver}) {
  return (
    <Fragment>
      <div className="receiver-detail">
        <div className="receiver-detail-header">
          Receiver Details
        </div>
        <div className="receiver-detail-content">
          <h4 className="has-text-centered txt-0C2E60 is-size-6 has-text-weight-medium mb-4">
            Account Type
          </h4>
          <div className="is-flex is-justify-content-space-between mb-6">
            <span className="mr-2">
              <Checkbox
                label="TopUp"
                classLabel="is-size-7 txt-575757"
              />
            </span>
            <span>
              <Checkbox
                label="Mobile Money"
                classLabel="is-size-7 txt-575757"
                value={true}
              />
            </span>
            <span>
              <Checkbox
                label="Bank"
                classLabel="is-size-7 txt-575757"
              />
            </span>
          </div>
          <div className="txt-0C2E60 is-size-6">
            <p>Name: {receiver.name}</p>
            <p>Phone Number: +44 567 4764 4894</p>
            <p>Mobile Money Number : None</p>
            <p>Bank Account : xxxxxxxx765      (Show)</p>
            <p>Bank Code : xxxx765      (Show)</p>
            <p>Address : xxxx765      (Show)</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ReceiverDetail
