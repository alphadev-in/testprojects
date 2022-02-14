import React, { Fragment } from 'react'

function ProfileInformation() {
  return (
    <Fragment>
      <div className="columns is-marginless">
        <div className="column is-3">
          <strong>Name</strong>
        </div>
        <div className="column">
          Jhon Due
        </div>
      </div>
      <hr className="my-3"/>
      <div className="columns is-marginless">
        <div className="column is-3">
          <strong>Date of birth day</strong>
        </div>
        <div className="column">
          16-02-1978
        </div>
      </div>
      <hr className="my-3"/>
      <div className="columns is-marginless">
        <div className="column is-3">
          <strong>Account Status</strong>
        </div>
        <div className="column">
          <span className="icon is-size-5 txt-23A6F0">
            <i className="mdi mdi-check-circle"></i>
          </span>
        </div>
      </div>
      <hr className="my-3"/>
      <div className="columns is-marginless">
        <div className="column is-3">
          <strong>Email</strong>
          <span className="txt-9E9E9E"> (Primary)</span>
        </div>
        <div className="column">
          compagny@demon.com <br/>
          Send and receive <span className="txt-primary"> mobile payments </span>
        </div>
      </div>
      <div className="columns is-marginless">
        <div className="column is-3">
          <strong>Email</strong>
          <span className="txt-9E9E9E"> (Personal)</span>
        </div>
        <div className="column">
          compagny@my.com
        </div>
      </div>
      <hr className="my-3"/>
      <div className="columns is-marginless">
        <div className="column is-3">
          <strong>Mobile</strong>
          <span className="txt-9E9E9E"> (Primary)</span>
        </div>
        <div className="column">
          +2 321-5234-0112
        </div>
      </div>
      <div className="columns is-marginless">
        <div className="column is-3">
          <strong>Landline</strong>
          <span className="txt-9E9E9E"> (Home)</span>
        </div>
        <div className="column">
          +2 321-5234-0112
        </div>
      </div>
      <hr className="my-3"/>
      <div className="columns is-marginless">
        <div className="column is-3">
          <strong>Address</strong>
        </div>
        <div className="column">
          1601 Austin Farms Rd, Ortonville, Mi, 48462, Suite 100-18, San Ditego, California - 2434, United State
        </div>
      </div>
      <hr className="my-3"/>
      <div className="columns is-marginless">
        <div className="column is-3">
          <strong>Customer service ID</strong>
        </div>
        <div className="column">
          When you call Customer Service, we'll ask you to confirm your identity using this account information. <span className="txt-primary"> Update </span>
        </div>
      </div>
    </Fragment>
  )
}

export default ProfileInformation
