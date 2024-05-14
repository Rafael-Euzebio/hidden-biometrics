import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userInfo }) => {
  return (
    <div>
      <p>These are <strong>some</strong> information used to generate that fingerprint</p>
      <ul>
        {
          Object.keys(userInfo).map(key => {
            return (
              <li key={key}>
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
    <div>
      <p>This is yours: {fingerprint}</p>
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
