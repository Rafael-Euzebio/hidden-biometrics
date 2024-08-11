import React from 'react'
import PropTypes from 'prop-types'
import List from '@components/List/List'
import Collapsible from '@components/Collapsible/Collapsible'
import '@styles/blocks/user.scss'
import '@styles/blocks/box.scss'
import { Trans, useTranslation } from 'react-i18next'

const UserInfo = ({ deviceInfo }) => {
  const collapsibles = Object.keys(deviceInfo).map(key => {
    if (deviceInfo[key].value !== undefined) {
      return (
      <Collapsible
        label={deviceInfo[key].text}
        content={deviceInfo[key].value}
        key={deviceInfo[key].text}
      />
      )
    }
    return <div data-testid="empty-div" key={deviceInfo[key].text}></div>
  }
  )

  return (
    <div>
      <List items={collapsibles} />
    </div>
  )
}
const User = ({ user }) => {
  const { t } = useTranslation()

  return (
    <div className="user">
      <div className="box">
        <p className="box__content">{ t('box.upper')}</p>
        <p className="box__content box__content--large" id="fingerprint">{user.fingerprint}</p>
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
      <UserInfo deviceInfo={user.deviceInfo}/>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired
}

UserInfo.propTypes = {
  deviceInfo: PropTypes.object.isRequired
}

export default User
