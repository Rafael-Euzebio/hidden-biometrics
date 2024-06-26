import React from 'react'
import PropTypes from 'prop-types'
import List from '@components/List/List'
import Collapsible from '@components/Collapsible/Collapsible'
import '@styles/blocks/user.scss'
import '@styles/blocks/box.scss'

const UserInfo = ({ userInfo }) => {
  const collapsibles = Object.keys(userInfo).map(key => {
    if (userInfo[key].value !== undefined) {
      return (
      <Collapsible
        label={userInfo[key].text}
        content={userInfo[key].value}
        key={userInfo[key].text}
      />
      )
    }
    return <div data-testid="empty-div" key={userInfo[key].text}></div>
  }
  )

  return (
    <div>
      <p className="main__description">These are <strong>some</strong> information used to generate that fingerprint:</p>
      <List items={collapsibles} />
    </div>
  )
}
const User = ({ fingerprint, userInfo }) => {
  return (
    <div className="user">
      <div className="box">
        <p className="box__content">Your Fingerprint:</p>
        <p className="box__content box__content--large" id="fingerprint">{fingerprint}</p>
        <p className="box__content">Try switching to an anonymous tab or activating a VPN. <br/> It won't change.</p>
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
