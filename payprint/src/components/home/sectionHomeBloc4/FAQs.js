import React, { Fragment, useState } from 'react'

function FAQs(props) {
  const [show, setshow] = useState(false)
  return (
    <Fragment>
      <div className="box">
        <div
          className={`level is-mobile is-clickable ${show? '' : 'mb-0'}`}
          onClick={() => { setshow(!show) }}>
          <div className="level-left">
            <h3 className="has-text-weight-semibold faq">
              {props.title}
            </h3>
          </div>
          <div className="level-right">
            <span className="icon is-size-5 txt-primary">
              <i className={`mdi mdi-chevron-${show ? 'up' : 'down'}`}></i>
            </span>
          </div>
        </div>
        <p className={`is-size-6 has-text-weight-normal ${show ? '' : 'is-hidden'}`}>
          {props.content}
        </p>
      </div>
    </Fragment>
  )
}

export default FAQs
