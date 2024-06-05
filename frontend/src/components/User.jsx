import React from 'react'
import PropTypes from 'prop-types'
import '@styles/blocks/user.scss'
import '@styles/blocks/box.scss'
import Collapsible from './Collapsible'

const UserInfo = ({ userInfo }) => {
  return (
    <div>
      <p className="main__description">These are <strong>some</strong> information used to generate that fingerprint</p>
        {
          Object.keys(userInfo).map(key => {
            return (
              <Collapsible
                label={userInfo[key].text}
                content={userInfo[key].value}
                key={userInfo[key].text}
              />
            )
          })
        }
    </div>
  )
}
const User = ({ fingerprint, userInfo }) => {
  return (
    <div className="user">
      <div className="box">
        <span className="box__content">Your Fingerprint:</span>
        <span className="box__content box__content--large" id="fingerprint">{fingerprint}</span>
        <span className="box__content">Try switching to an anonymous tab or activating a VPN. It won't change</span>
      </div>
      <UserInfo userInfo={userInfo}/>
    </div>
  )
}

User.propTypes = {
  fingerprint: PropTypes.number.isRequired,
  userInfo: PropTypes.object.isRequired
}

UserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired
}
export default User
