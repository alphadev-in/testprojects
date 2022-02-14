import React, { Fragment, useState } from 'react'
import Dropdown from '../../../general/form/Dropdown'
import ImgPlus from '../../../../images/plus.svg'
import { Link } from 'react-router-dom'

function ReceiverList({
  receiverList,
}) {

  const [receiverSelect, setReceiverSelect] = useState(receiverList[0])
  const [open, setOpen] = useState(false)

  const valueInput =  !!receiverSelect ? receiverSelect.name : ''


  const input = () => (
    <div className="field">
      <p className="control has-icons-right">
        <input
          value={valueInput}
          className="input is-fullwidth input-dropdown"
          type="text"
          placeholder="Jacques Kabeya"
          readOnly={true}/>
        <span className="icon is-size-5 txt-0C2E60 is-right is-height-100p">
          <i className={`mdi mdi-play ${!!open ? 'up' : 'down'}`}></i>
        </span>
      </p>
    </div>
  )
  const list = () => (
    <Fragment>
      {
        receiverList.map((item, index) => (
          <Fragment key={index}>
            <a href="#root" className="dropdown-item receiver-list" onClick={ () => {
              setReceiverSelect(item)
              setOpen(false)
            }}>
              { item.name }
            </a>
            { index + 1 !== receiverList.length && <hr className="dropdown-divider"/>}
          </Fragment>
        ))
      }
    </Fragment>
  )

  return (
    <Fragment>
      <div className="box box-admin-content px-6 mb-90px">
        <div className="box-content  is-min-height-207px">
          <label className="label txt-0C2E60 has-text-weight-semibold is-size-10px pb-5">
            Receiver Details
          </label>
          <div className="columns is-variable is-1 mb-0">
            <div className="column">
              <Dropdown
                dropdownTrigger={input}
                dropdownContent={list}
                open={open}
                setOpen={setOpen}
              />
            </div>
            <div className="column is-narrow">
              <Link to="/admin/send-money/top-up">
                <button className="button button-new">
                  <span>
                    New
                  </span>
                  <img src={ImgPlus} alt="img-plus" />
                </button>
              </Link>
            </div>
          </div>
          
          {!!receiverSelect &&
            <div className="box receiver-img p-1">
              <img
                src={receiverSelect.img.src} alt="flag-en"
                style={{ height: '25px' }}/>
            </div>
          }
        </div>
      </div>
    </Fragment>
  )
}

export default ReceiverList
