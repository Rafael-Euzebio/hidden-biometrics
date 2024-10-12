import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import List from '@components/List/List'
import Collapsible from '@components/Collapsible/Collapsible'
import FadeIn from '@components/FadeIn/FadeIn'
import '@styles/blocks/user.scss'
import '@styles/blocks/box.scss'
import { Trans, useTranslation } from 'react-i18next'

const FingerprintScramble = ({ fingerprint }) => {
  const characters = '0123456789' 
  const [text, settext] = useState('0000000000')

  useEffect(() => {
    let requestId = null 
    const start = Date.now()
    let frameStart = start
    let fps = 8

    const scrambleText = () => {
      let scrambledText = ''
      for (let i = 0; i < text.length; i++){
          scrambledText += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      settext(scrambledText)

      const finish = Date.now()
      const elapsed = finish - start
      if (elapsed >= 2500) {
        cancelAnimationFrame(requestId)
        settext(fingerprint)
        return
      } else {
        requestId = requestAnimationFrame(animate)
      }
    }

    const animate = () => {
      const now = Date.now()  
      const elapsedSinceLastFrame = now - frameStart

      if (elapsedSinceLastFrame > 1000 / fps) {
        frameStart = Date.now()
        requestId = requestAnimationFrame(scrambleText)
      } else {
        requestId = requestAnimationFrame(animate)
      }
    }

    requestId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [])


  return (
    <p id="fingerprint" className="box__content box__content--large">{text}</p>
  )

}

const DeviceInfo = ({ deviceInfo }) => {
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

const AccessCount = ({ accessCount, t }) => {
  return (
    <p className="box__content">
      <Trans i18nKey="box.lower.accessCount" count={accessCount}><strong></strong></Trans>
    </p>
  )
}

const User = ({ user, deviceInfo }) => {
  const { t } = useTranslation()

  return (
    <div className="user">
      <div className="box">
        <p className="box__content">{ t('box.upper')}</p>
        <FingerprintScramble fingerprint={user.fingerprint} />
        <p className="box__content">
          <Trans i18nKey="box.lower.vpn">
            <br/>
          </Trans>
        </p>
        {user.accessCount
          ? <AccessCount accessCount={user.accessCount} t={t}/>
          : <></>}
      </div>

      <FadeIn>
        <p className="main__description">
          <Trans i18nKey="main.collapsibles.description">
            <strong></strong>
          </Trans>
        </p>
        <DeviceInfo deviceInfo={deviceInfo}/>
      </FadeIn>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  deviceInfo: PropTypes.object.isRequired
}

DeviceInfo.propTypes = {
  deviceInfo: PropTypes.object.isRequired
}

AccessCount.propTypes = {
  accessCount: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired
}

export default User
