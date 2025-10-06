import React, { useState, useMemo } from 'react'

const activitiesData = [
  {
    id: 1,
    user: { name: 'Sarah Chen', avatar: 'SC', role: 'Data Analyst' },
    action: 'uploaded',
    target: 'Q3 sales data',
    type: 'upload',
    status: 'completed',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    details: 'Dataset includes 12,450 records from EMEA region'
  },
  {
    id: 2,
    user: { name: 'Marcus Johnson', avatar: 'MJ', role: 'Product Manager' },
    action: 'generated',
    target: 'Monthly performance report',
    type: 'report',
    status: 'completed',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    details: 'Includes KPI trends and forecasting for Q4'
  },
  {
    id: 3,
    user: { name: 'AI Assistant', avatar: 'AI', role: 'System' },
    action: 'updated',
    target: 'AI insights dashboard',
    type: 'system',
    status: 'completed',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    details: 'Discovered 3 new high-priority insights'
  },
  {
    id: 4,
    user: { name: 'Emma Rodriguez', avatar: 'ER', role: 'Marketing Lead' },
    action: 'created',
    target: 'Campaign performance dashboard',
    type: 'create',
    status: 'completed',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    details: 'Dashboard tracking 5 active campaigns'
  },
  {
    id: 5,
    user: { name: 'David Park', avatar: 'DP', role: 'Sales Director' },
    action: 'shared',
    target: 'Revenue forecast Q4',
    type: 'share',
    status: 'completed',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    details: 'Shared with executive team and finance'
  },
  {
    id: 6,
    user: { name: 'System', avatar: 'SY', role: 'Automation' },
    action: 'synced',
    target: 'CRM database',
    type: 'sync',
    status: 'in-progress',
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    details: 'Syncing 2,340 customer records...'
  }
]

const activityTypes = [
  { value: 'all', label: 'All Activity', icon: '📋' },
  { value: 'upload', label: 'Uploads', icon: '⬆️' },
  { value: 'report', label: 'Reports', icon: '📊' },
  { value: 'create', label: 'Created', icon: '✨' },
  { value: 'share', label: 'Shared', icon: '🔗' },
  { value: 'system', label: 'System', icon: '🤖' },
  { value: 'sync', label: 'Sync', icon: '🔄' }
]

const ActivityIcon = ({ type, status }) => {
  const baseClasses = 'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-medium'
  
  const iconMap = {
    upload: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    report: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    create: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    share: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    system: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    sync: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }

  const colorMap = {
    upload: 'bg-blue-500',
    report: 'bg-indigo-500',
    create: 'bg-green-500',
    share: 'bg-purple-500',
    system: 'bg-gray-500',
    sync: status === 'in-progress' ? 'bg-yellow-500 animate-pulse' : 'bg-teal-500'
  }

  return (
    <div className={`${baseClasses} ${colorMap[type] || 'bg-gray-400'}`}>
      {iconMap[type] || iconMap.system}
    </div>
  )
}

const getRelativeTime = (timestamp) => {
  const now = new Date()
  const past = new Date(timestamp)
  const diffMs = now - past
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
  return past.toLocaleDateString()
}

const RecentActivity = () => {
  const [selectedType, setSelectedType] = useState('all')
  const [expandedId, setExpandedId] = useState(null)

  const filteredActivities = useMemo(() => {
    if (selectedType === 'all') return activitiesData
    return activitiesData.filter((act) => act.type === selectedType)
  }, [selectedType])

  return (
    <section className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="mb-6">
        <h2 className="mb-1 text-xl font-bold text-gray-900">Recent Activity</h2>
        <p className="text-sm text-gray-500">Track team actions and system events</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {activityTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => setSelectedType(type.value)}
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedType === type.value
                ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-500'
                : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200'
            }`}
          >
            <span className="mr-1">{type.icon}</span>
            {type.label}
            {selectedType === type.value && type.value !== 'all' && (
              <span className="ml-1.5 px-1.5 py-0.5 text-xs bg-indigo-500 text-white rounded-full">
                {activitiesData.filter((a) => a.type === type.value).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, index) => (
            <div
              key={activity.id}
              className={`relative pl-8 pb-4 ${
                index !== filteredActivities.length - 1 ? 'border-l-2 border-gray-200' : ''
              }`}
            >

              <div className="absolute left-0 -ml-1 mt-1.5">
                <div className={`w-2 h-2 rounded-full ${activity.status === 'in-progress' ? 'bg-yellow-500 animate-pulse' : 'bg-indigo-500'}`} />
              </div>

              <div className="ml-4">
                <div className="flex items-start space-x-3">

                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold text-white rounded-full shadow-md bg-gradient-to-br from-indigo-400 to-indigo-600">
                      {activity.user.avatar}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <span className="font-semibold">{activity.user.name}</span>
                          <span className="text-gray-600"> {activity.action} </span>
                          <span className="font-medium text-indigo-600">{activity.target}</span>
                        </p>
                        <div className="flex items-center mt-1 space-x-2 text-xs text-gray-500">
                          <span>{activity.user.role}</span>
                          <span>•</span>
                          <span>{getRelativeTime(activity.timestamp)}</span>
                          {activity.status === 'in-progress' && (
                            <>
                              <span>•</span>
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                In Progress
                              </span>
                            </>
                          )}
                        </div>


                        {expandedId === activity.id && (
                          <div className="p-3 mt-2 border border-gray-200 rounded-md bg-gray-50">
                            <p className="text-sm text-gray-700">{activity.details}</p>
                          </div>
                        )}
                      </div>

       
                      <div className="flex-shrink-0 ml-3">
                        <ActivityIcon type={activity.type} status={activity.status} />
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedId(expandedId === activity.id ? null : activity.id)}
                      className="mt-2 text-xs font-medium text-indigo-600 hover:text-indigo-800 focus:outline-none"
                    >
                      {expandedId === activity.id ? 'Show less' : 'Show details'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center">
            <svg
              className="w-12 h-12 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No activities</h3>
            <p className="mt-1 text-sm text-gray-500">No activities match the selected filter.</p>
          </div>
        )}
      </div>

      
      {filteredActivities.length > 0 && (
        <div className="pt-4 mt-6 border-t border-gray-200">
          <button className="w-full text-sm font-medium text-center text-indigo-600 hover:text-indigo-800 focus:outline-none">
            View all activity →
          </button>
        </div>
      )}
    </section>
  )
}

export default RecentActivity
