import React from 'react'
import PropTypes from 'prop-types'
import List from '@components/List/List'
import Collapsible from '@components/Collapsible/Collapsible'
import '@styles/blocks/user.scss'
import '@styles/blocks/box.scss'
import { Trans, useTranslation } from 'react-i18next'

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
      <List items={collapsibles} />
    </div>
  )
}
const User = ({ fingerprint, userInfo }) => {
  const { t } = useTranslation()

  return (
    <div className="user">
      <div className="box">
        <p className="box__content">{ t('box.upper')}</p>
        <p className="box__content box__content--large" id="fingerprint">{fingerprint}</p>
        <p className="box__content">
          <Trans i18nKey="box.lower">
            <br/>
          </Trans>
        </p>
      </div>
      <p className="main__description">
        <Trans i18nKey="main.collapsibles.description">
          <strong></strong>
        </Trans>
    </p>
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
