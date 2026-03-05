import React from 'react'

const Navbar = ({ activeSection, onNavigate }) => {

    const navItems = [
        { name: 'Home', label: 'Home' },
        { name: 'About', label: 'About' },
        { name: 'Team', label: 'Our Team' },
        { name: 'Contact', label: 'Contact Us' },
        // { name: 'Docs', label: 'Docs' }
    ]

    return (
        <div className="fixed top-0 left-0 right-0 z-[2000] flex justify-center py-6">
            <nav className="bg-white/80 backdrop-blur-md border border-gray-100 px-8 py-3 
                rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center justify-center
                    gap-15 min-h-[60px] min-w-[750px]" style={{ marginTop: '20px' }} >
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => onNavigate(item.name)}
                        className={`relative py-1 bg-transparent border-none text-lg font-bold cursor-pointer transition-all duration-300
              ${activeSection === item.name ? 'text-black-600' : 'text-gray-500 hover:text-blue-400'}`}
                    >
                        {item.label}
                        {activeSection === item.name && (
                            <span className="absolute bottom-[-2px] left-0 right-0 h-[2.5px] bg-blue-400 rounded-full" />
                        )}
                    </button>
                ))}
            </nav>
        </div>
    )
}



export default Navbar
