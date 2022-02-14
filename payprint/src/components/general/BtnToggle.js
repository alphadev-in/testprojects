import React, { Fragment, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function BtnToggle({path}) {
  const [toggle, setToggle] = useState(false)
  
  const history = useHistory();

  useEffect(() => {
    const actionToggle = () => {
      if (toggle) history.push(path + '?receiver-list=true&credit-card-list=true')
      else history.push(path)
    }
    actionToggle()
  }, [history, path, toggle])

  return (
    <Fragment>
      <div
        className="bg-3DA8E4"
        onClick={() => {
          setToggle(!toggle)
        }}
        style={{
          outline: 'none',
        }}>
        <span className="icon has-text-white">
          <i className={`mdi mdi-36px mdi-toggle-switch${toggle ? '' : '-off-outline'}`}></i>
        </span>
      </div>
    </Fragment>
  )
}

export default BtnToggle
