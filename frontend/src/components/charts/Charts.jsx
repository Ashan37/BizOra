import React from 'react'
import LiveChart from './LiveChart'

const Charts = () => {
	return (
		<section className="p-6 mx-auto max-w-7xl">
			<h2 className="mb-4 text-lg font-semibold text-gray-700">Live metrics</h2>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<div className="p-4 bg-white rounded-lg shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-gray-500">Revenue</p>
							<p className="text-xl font-semibold text-gray-900">$124,000</p>
						</div>
						<LiveChart stroke="#10B981" streamUrl="http://localhost:4000/events" streamKey="revenue" />
					</div>
				</div>

				<div className="p-4 bg-white rounded-lg shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-gray-500">Active Users</p>
							<p className="text-xl font-semibold text-gray-900">1,256</p>
						</div>
						<LiveChart stroke="#6366F1" streamUrl="http://localhost:4000/events" streamKey="users" />
					</div>
				</div>

				<div className="p-4 bg-white rounded-lg shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-gray-500">Churn %</p>
							<p className="text-xl font-semibold text-gray-900">3.2%</p>
						</div>
						<LiveChart stroke="#EF4444" streamUrl="http://localhost:4000/events" streamKey="churn" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Charts