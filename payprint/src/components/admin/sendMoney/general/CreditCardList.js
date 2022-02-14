import React, { Fragment, useState } from 'react'
import Dropdown from '../../../general/form/Dropdown'
import ImgPlus from '../../../../images/plus.svg'
import Visa from '../../../../images/visa.png'
import PayPal from '../../../../images/8.png'
import { Link } from 'react-router-dom'

function CreditCardList() {

  const receiverList = [
    {
      name: 'XXXX XXXX XXXX ...4591',
      img: Visa
    },
    {
      name: 'XXXXX@gmail.com',
      img: PayPal
    }
  ];

  const [receiverSelect, setReceiverSelect] = useState(receiverList[0])
  const [open, setOpen] = useState(false)

  const input = () => (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input
          value={receiverSelect.name}
          className="input is-fullwidth input-dropdown"
          type="text"
          placeholder="Jacques Kabeya"
          readOnly={true}
          style={{
            paddingLeft: '4rem'
          }}/>
        <span className="icon is-left is-height-100p">
          <img src={receiverSelect.img} alt="visa" className="ml-3" />
        </span>
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
            <a href="#root" className="dropdown-item receiver-list is-width-inherit pr-3" onClick={ () => {
              setReceiverSelect(item)
              setOpen(false)
            }}>
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <img src={item.img} alt="visa" width="40" className="" />
                  </div>
                  <div className="level-item is-size-14px">
                    <input
                      value={item.name}
                      className="input is-static"
                      type="text"
                      readOnly={true}/>
                  </div>
                </div>
                <div className="level-right">
                <span className="icon is-size-5 is-height-100p mx-3">
                  <i className="mdi mdi-dots-vertical"></i>
                </span>
                </div>
              </div>
            </a>
            { index + 1 !== receiverList.length && <hr className="dropdown-divider"/>}
          </Fragment>
        ))
      }
    </Fragment>
  )

  return (
    <Fragment>
      <div className="box box-admin-content px-5">
        <div className="box-content  is-min-height-207px">
          <label className="label txt-0C2E60 has-text-weight-semibold is-size-10px pb-5">
            Payment Method
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
        </div>
      </div>
    </Fragment>
  )
}

export default CreditCardList
