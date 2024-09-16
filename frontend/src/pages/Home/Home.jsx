import React, { useEffect, useState } from 'react'
import User from '@components/User/User'
import Link from '@components/Link/Link'
import deviceConfig from '@utils/deviceConfig'
import '@styles/reset.scss'
import '@styles/blocks/main.scss'
import '@styles/blocks/header.scss'
import { useTranslation } from 'react-i18next'
import requests from '@utils/apiDataFetcher'

function Home() {
  const { fingerprint, deviceInfo } = deviceConfig
  const { t } = useTranslation()
  const [user, setuser] = useState({
    fingerprint
  })

  useEffect(() => {
    (async () => {
      try {
        await requests.users.getOne(fingerprint)
        const { payload } = await requests.users.updateOne(fingerprint)
        setuser(payload)
      } catch (error) {
        if (error.response.status === 404) {
          try {
            const { browser, os, deviceType } = deviceInfo
            const { payload } = await requests.users.insertOne(
              fingerprint,
              browser.value,
              os.value,
              deviceType.value
            )

            setuser(payload)
          } catch (postError) {
            console.log(postError.message)
          }
        } else {
          console.log('Failed to fetch user', error.response.data)
        }
      }
    })()
  }, [])

  return (
    <main className="main">
      <h2 className="main__heading"> {t('main.heading-2')}</h2>
      <p className="main__description">
        {t('main.description')}
      </p>
      <Link
        text={t('research')}
        href="https://arxiv.org/pdf/1905.01051"
        modifier="link--color-red"
      />
      <User user={user} deviceInfo={deviceInfo} />
    </main>
  )
}

export default Home
