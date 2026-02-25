import React from 'react'

const Settings = () => {
    return (
        <div className="p-10 bg-white min-h-full">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-3xl font-black text-black mb-6">Settings</h2>
                <div className="max-w-2xl bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                    <div className="space-y-8">
                        <div>
                            <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Profile Name</label>
                            <input type="text" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl font-bold text-black" defaultValue="Yves Alcantara" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                            <input type="email" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl font-bold text-black" defaultValue="yves@example.com" />
                        </div>
                        <button className="px-10 py-4 bg-black text-white font-bold rounded-2xl hover:bg-gray-900 transition-colors">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
