import React from 'react'

const Reports = () => {
    return (
        <div className="p-10 bg-white min-h-full">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-3xl font-black text-black mb-6">Reports</h2>
                <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-8 py-4 font-bold text-gray-500 uppercase text-sm tracking-wider">Report Name</th>
                                <th className="px-8 py-4 font-bold text-gray-500 uppercase text-sm tracking-wider">Date</th>
                                <th className="px-8 py-4 font-bold text-gray-500 uppercase text-sm tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[1, 2, 3].map(i => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-8 py-6 font-bold text-black">Weekly Thesis Progress UI-00{i}</td>
                                    <td className="px-8 py-6 text-gray-500">Oct {10 + i}, 2025</td>
                                    <td className="px-8 py-6 text-emerald-600 font-bold uppercase text-xs">Generated</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Reports
