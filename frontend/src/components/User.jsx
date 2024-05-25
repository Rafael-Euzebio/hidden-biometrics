import React from 'react'
import PropTypes from 'prop-types'
import '@styles/blocks/user.scss'

const UserInfo = ({ userInfo }) => {
  return (
    <div>
      <p className="main__description">These are <strong>some</strong> information used to generate that fingerprint</p>
      <ul>
        {
          Object.keys(userInfo).map(key => {
            return (
              <li className="main__description" key={key}>
                {userInfo[key].text}: {userInfo[key].value}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
const User = ({ fingerprint, userInfo }) => {
  return (
    <div className="user">
      <p className="main__description">This is yours:</p>
      <span className="user__fingerprint">{fingerprint}</span>
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
