import React, { useState, useEffect } from 'react'
import Facebook from '../../images/facebook.svg'
import Google from '../../images/google.svg'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'

function Auth({active, setActive, authActif}) {

  const [currentAuth, setCurrentAuth] = useState('SignIn')

  const content = {
    SignIn: <SignIn
      Facebook={Facebook}
      Google={Google}
      setCurrentAuth={setCurrentAuth}
      setActive={setActive}
    />,
    SignUp: <SignUp
      Facebook={Facebook}
      Google={Google}
      setCurrentAuth={setCurrentAuth}
    />
  }

  useEffect(() => {
    if (['SignIn', 'SignUp'].includes(authActif)) setCurrentAuth(authActif)
    else setCurrentAuth('SignIn')
    return () => {}
  }, [authActif])

  return (
    <div className={`modal ${active ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-content auth-content">
        <button
          className="button btn-modal-close"
          onClick={() => setActive(false)}>
          <span className="icon">
            <i className="mdi mdi-36px mdi-close"></i>
          </span>
        </button>
        { content[currentAuth] }
      </div>
    </div>
  )
}

export default Auth
