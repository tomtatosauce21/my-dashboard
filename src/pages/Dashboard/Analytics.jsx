import React from 'react'

const Analytics = () => {
    return (
        <div className="p-10 bg-white min-h-full">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-3xl font-black text-black mb-6">Analytics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-[32px] h-[400px] flex items-center justify-center border-2 border-dashed border-gray-200">
                        <p className="text-gray-400 font-bold">Chart: Progression Rate</p>
                    </div>
                    <div className="bg-gray-50 rounded-[32px] h-[400px] flex items-center justify-center border-2 border-dashed border-gray-200">
                        <p className="text-gray-400 font-bold">Chart: Time Distribution</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics
