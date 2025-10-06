import React, { useState, useMemo } from 'react'

const insightsData = [
  {
    id: 1,
    title: 'Sales increased 12% last month in Europe',
    description: 'Strong performance driven by Product A and B campaigns across EMEA region.',
    category: 'Sales',
    priority: 'high',
    date: '2025-10-05',
    tags: ['revenue', 'growth', 'EMEA'],
    impact: 'positive'
  },
  {
    id: 2,
    title: 'Product B shows a potential growth opportunity',
    description: 'Market analysis indicates 18% TAM expansion in Q4 if positioned correctly.',
    category: 'Product',
    priority: 'medium',
    date: '2025-10-04',
    tags: ['opportunity', 'market'],
    impact: 'positive'
  },
  {
    id: 3,
    title: 'Customer churn decreased by 5% this quarter',
    description: 'Improved onboarding flow and customer success initiatives reduced early churn.',
    category: 'Customer Success',
    priority: 'high',
    date: '2025-10-03',
    tags: ['retention', 'churn'],
    impact: 'positive'
  },
  {
    id: 4,
    title: 'Support ticket volume spiked 22% last week',
    description: 'Spike correlated with recent product release; team monitoring resolution time.',
    category: 'Support',
    priority: 'medium',
    date: '2025-10-02',
    tags: ['support', 'volume'],
    impact: 'neutral'
  },
  {
    id: 5,
    title: 'Marketing ROI improved by 8% in September',
    description: 'Optimized ad spend and A/B testing drove higher conversion rates.',
    category: 'Marketing',
    priority: 'low',
    date: '2025-09-30',
    tags: ['ROI', 'conversion'],
    impact: 'positive'
  },
  {
    id: 6,
    title: 'Infrastructure costs trending up 3% monthly',
    description: 'Cloud resource usage increasing; recommend cost optimization review.',
    category: 'Operations',
    priority: 'medium',
    date: '2025-10-01',
    tags: ['costs', 'infrastructure'],
    impact: 'negative'
  }
]

const categories = ['All', 'Sales', 'Product', 'Customer Success', 'Support', 'Marketing', 'Operations']
const priorities = ['All', 'high', 'medium', 'low']

const CategoryIcon = ({ category }) => {
  switch (category) {
    case 'Sales':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    case 'Product':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    case 'Customer Success':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    case 'Support':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    case 'Marketing':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    default:
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
  }
}

const AllInsights = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriority, setSelectedPriority] = useState('All')

  const filteredInsights = useMemo(() => {
    return insightsData.filter((insight) => {
      const matchesSearch =
        insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory
      const matchesPriority = selectedPriority === 'All' || insight.priority === selectedPriority

      return matchesSearch && matchesCategory && matchesPriority
    })
  }, [searchTerm, selectedCategory, selectedPriority])

  return (
    <section className="p-6 rounded-lg bg-gray-50">
      <div className="mx-auto max-w-7xl">

        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">AI-Powered Insights</h2>
          <p className="text-gray-600">Actionable intelligence derived from your business data</p>
        </div>

        <div className="mb-6 space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search insights, tags, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Priority</label>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {priorities.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                  setSelectedPriority('All')
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600">
          Showing {filteredInsights.length} of {insightsData.length} insights
        </div>

        {filteredInsights.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredInsights.map((insight) => (
              <article
                key={insight.id}
                className="relative flex flex-col p-5 transition-shadow duration-200 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
              >

                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      insight.priority === 'high'
                        ? 'bg-red-100 text-red-800'
                        : insight.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {insight.priority}
                  </span>
                </div>

       
                <div className="flex items-center mb-3 space-x-2">
                  <div className="flex-shrink-0 p-2 text-indigo-600 rounded-md bg-indigo-50">
                    <CategoryIcon category={insight.category} />
                  </div>
                  <span className="text-sm font-medium text-gray-500">{insight.category}</span>
                </div>

                <h3 className="mb-2 text-base font-semibold text-gray-900 line-clamp-2">{insight.title}</h3>

                <p className="flex-grow mb-4 text-sm text-gray-600 line-clamp-3">{insight.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {insight.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{new Date(insight.date).toLocaleDateString()}</span>
                  <div className="flex items-center space-x-1">
                    {insight.impact === 'positive' ? (
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ) : insight.impact === 'negative' ? (
                      <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    )}
                    <span className="text-xs text-gray-500 capitalize">{insight.impact}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <svg
              className="w-12 h-12 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No insights found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default AllInsights
