import React from 'react'

const Customers = () => {
    const stats = [
        { label: 'Total Words', value: '12,458', change: '+12%', color: 'text-blue-600' },
        { label: 'Hours Spent', value: '164h', change: '+5%', color: 'text-pink-600' },
        { label: 'Upcoming Deadlines', value: '3', change: 'Next: 2 days', color: 'text-indigo-600' },
        { label: 'Research Completion', value: '68%', change: '+8%', color: 'text-emerald-600' },
    ]

    const activities = [
        { title: 'Chapter 2 Draft Updated', time: '2 hours ago', status: 'Completed' },
        { title: 'Literature Review Sync', time: '5 hours ago', status: 'In Progress' },
        { title: 'Data Viz Components Added', time: '1 day ago', status: 'Review' },
    ]

    return (
        <div className="p-6 lg:p-10 bg-white min-h-full">
            <div className="max-w-[1400px] mx-auto">
                <header className="mb-10">
                    <h2 className="text-3xl font-black text-black mb-2">Welcome Back, Yves!</h2>
                    <p className="text-gray-500 font-medium">Here's what's happening with your thesis progress today.</p>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white border border-gray-100 p-6 rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{stat.label}</p>
                            <div className="flex items-end justify-between">
                                <h3 className={`text-3xl font-black ${stat.color}`}>{stat.value}</h3>
                                <span className="text-xs font-bold bg-gray-50 px-2 py-1 rounded-full text-gray-500">{stat.change}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Activity */}
                    <div className="lg:col-span-2 bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-black mb-6">Recent Activity</h3>
                        <div className="space-y-6">
                            {activities.map((act, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <div className="w-2 h-2 rounded-full bg-current" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-black">{act.title}</p>
                                            <p className="text-sm text-gray-400">{act.time}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{act.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Widget */}
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-6">Next Milestone</h3>
                        <div className="mb-8">
                            <p className="text-blue-100 mb-1">Defense Preparation</p>
                            <h4 className="text-2xl font-black">March 15, 2026</h4>
                        </div>
                        <div className="w-full bg-white/20 h-2 rounded-full mb-4">
                            <div className="bg-white h-full rounded-full" style={{ width: '45%' }} />
                        </div>
                        <p className="text-sm font-medium text-blue-100">45% items completed for this milestone.</p>
                        <button className="w-full mt-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors">
                            View Roadmap
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
