import React from 'react'
import LiveChart from '../charts/LiveChart'

const kpis = [
  {
    title: 'Revenue',
    value: '$124,000',
    delta: '+12%'
    ,
    deltaType: 'increase',
    trend: [10, 12, 9, 14, 16, 18, 20]
  },
  {
    title: 'Active Users',
    value: '1,256',
    delta: '+8%'
    ,
    deltaType: 'increase',
    trend: [5, 6, 8, 7, 9, 11, 12]
  },
  {
    title: 'Churn',
    value: '3.2%',
    delta: '-0.4%'
    ,
    deltaType: 'decrease',
    trend: [4, 3.8, 3.6, 3.5, 3.4, 3.3, 3.2]
  },
  {
    title: 'New Insights',
    value: '3',
    delta: '—',
    deltaType: 'neutral',
    trend: [2, 2, 3, 3, 3, 3, 3]
  }
]

function Sparkline({ data = [], stroke = '#6366f1' }) {
  if (!data || data.length === 0) return null
  const width = 96
  const height = 28
  const max = Math.max(...data)
  const min = Math.min(...data)
  const diff = max - min || 1

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - ((d - min) / diff) * height
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <polyline points={points} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const Icon = ({ name }) => {
  switch (name) {
    case 'revenue':
      return (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
        </svg>
      )
    case 'users':
      return (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4h-1" />
        </svg>
      )
    case 'churn':
      return (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-6m0 6l-8-6" />
        </svg>
      )
    default:
      return (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6" />
        </svg>
      )
  }
}

const KPICards = () => {
  return (
    <section className="p-6 rounded-lg bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <article key={kpi.title} className="relative flex flex-col justify-between p-4 transition-shadow bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-md bg-indigo-50">
                    <Icon name={kpi.title.toLowerCase().includes('revenue') ? 'revenue' : kpi.title.toLowerCase().includes('user') ? 'users' : kpi.title.toLowerCase().includes('churn') ? 'churn' : 'default'} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">{kpi.title}</h3>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">{kpi.value}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${kpi.deltaType === 'increase' ? 'bg-green-100 text-green-800' : kpi.deltaType === 'decrease' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-700'}`}>
                    {kpi.delta}
                  </span>
                  <div className="mt-2">
                    <LiveChart width={120} height={36} stroke={kpi.deltaType === 'increase' ? '#10B981' : kpi.deltaType === 'decrease' ? '#EF4444' : '#6B7280'} interval={900} streamUrl="http://localhost:4000/events" streamKey={kpi.title.toLowerCase().includes('revenue') ? 'revenue' : kpi.title.toLowerCase().includes('user') ? 'users' : kpi.title.toLowerCase().includes('churn') ? 'churn' : null} />
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-500">Compared to last period</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KPICards
