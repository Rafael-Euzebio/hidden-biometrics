import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import 'chart.js/auto'
import { Doughnut, Bar } from 'react-chartjs-2'
import { useTranslation } from 'react-i18next'
import requests from '@utils/apiDataFetcher'
import '@styles/blocks/main.scss'
import '@styles/blocks/charts.scss'
import '@styles/blocks/box.scss'

const chartColors = ['#F92672', '#A6E22E', '#66D9EF', '#FD971F', '#E6DB74', '#AE81FF', '#FF6F61', '#DC143C']
const chartWhite = '#F8F8F2'

const Chart = ({Type, title, data, additionalOptions, t}) => {
  return (
    <>
      <h2 tabIndex="0" className="charts-wrapper__chart--sr-only">{t('statistics.sr-only.title') + title}</h2>
      <ul className="charts-wrapper__chart--sr-only">
        {Object.keys(data).map((item) => {
          return (
            <li key={item} tabIndex="0">{item}: {t('statistics.label')}: {data[item]}</li>
          )
        })}
      </ul>

      <div className="charts-wrapper__box">
        <Type className="charts-wrapper__chart" 
          data-testid={`chart-${title}`}
          data={{
            labels: Object.keys(data),
            datasets: [{
              label: t('statistics.label'),
              data: Object.values(data),
              borderWidth: 1,
              backgroundColor: chartColors
            }],
          }} 
          options={{
            ...additionalOptions,
            responsive: true,
            maintainAspectRatio: false,
            color: chartWhite,
            plugins: {
              title: {
                display: true,
                text: title,
                color: chartWhite,
                font: {
                  size: 18,
                },
                padding: {
                  top: 0,
                  bottom: 0
                }
              },
              legend: {
                labels: {
                  font: {
                    size: 16
                  }
                }
              }
            } 
          }
        }/>
      </div>
    </>
  )
}

const Statistics = () => {
  const [statistics, setstatistics] = useState(null)
  const { t } = useTranslation()
  const barOptions = {
    scales: {
      x: {
        ticks: {
          color: chartWhite
        },
        grid: {
          color: chartWhite
        }
      },
      y: {
        ticks: {
          color: chartWhite
        },
        grid: {
          color: chartWhite
        }
      }
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const { payload } = await requests.statistics.getAll()
        setstatistics(payload)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])


  return (
    <main className="main">
      { statistics !== null ?
        (
        <div className="charts-wrapper">
          <Chart Type={Doughnut} title={t('statistics.browsers')} data={statistics.browsers} t={t} />
          <Chart Type={Doughnut} title={t('statistics.os')} data={statistics.os} t={t} />
          <Chart Type={Bar} title={t('statistics.deviceType')} data={statistics.deviceType} additionalOptions={barOptions} t={t} />
        </div>
        ) :
        <div></div>
      }
    </main>
  )
}

Chart.propTypes = {
  Type: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}
export default Statistics
