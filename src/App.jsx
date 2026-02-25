import { useState } from 'react'
import Home from './pages/Home'
import { Customers, Analytics, Reports, Settings } from './pages/Dashboard'
import Navbar from './components/Navbar'

function App() {
  const [activeSection, setActiveSection] = useState('Home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const isLanding = activeSection === 'Home' || activeSection === 'About' || activeSection === 'Team' || activeSection === 'Contact'

  // Helper to handle navigation and scrolling
  const handleNavigate = (section) => {
    setActiveSection(section)
    if (section === 'Home' || section === 'About' || section === 'Team' || section === 'Contact') {
      const id = section === 'Home' ? 'home' : section.toLowerCase()
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 0)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen overflow-hidden relative bg-white">
      {isLanding && <Navbar activeSection={activeSection} onNavigate={handleNavigate} />}

      {/* Mobile overlay backdrop */}
      {!isLanding && isSidebarOpen && (
        <div
          className="absolute inset-0 bg-black/50 z-[90]"
          onClick={toggleSidebar}
        />
      )}


      {/* Sidebar — hidden in landing mode */}
      {!isLanding && (
        <aside
          className={`
            w-full lg:w-[280px] h-auto lg:h-full bg-black text-white box-border border-b lg:border-b-0 lg:border-r border-gray-800
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] z-[100]
            lg:relative lg:translate-x-0
            ${isSidebarOpen ? 'max-lg:block' : 'max-lg:hidden'}
          `}
        >
          <div className="flex px-4 sm:px-6 py-4 justify-between items-center border-b border-gray-800">
            <h2 className="text-lg sm:text-xl font-black text-blue-400 tracking-tight">ThesisDash</h2>
            <button
              className="lg:hidden bg-transparent border-none text-white text-2xl cursor-pointer"
              onClick={toggleSidebar}
            >
              ×
            </button>
          </div>

          <div className="px-4 sm:px-6 py-4 lg:py-5 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:gap-2">
            {['Home', 'Dashboard', 'Analytics', 'Reports', 'Settings'].map(section => (
              <button
                key={section}
                className={`
                  w-full lg:w-auto py-2 sm:py-3 px-4 border-none text-center lg:text-left text-sm sm:text-base lg:text-lg font-semibold cursor-pointer
                  transition-all duration-200 rounded-[12px] whitespace-nowrap
                  ${activeSection === section
                    ? 'bg-blue-600 text-white'
                    : 'bg-transparent text-gray-400 hover:bg-gray-900 hover:text-white'}
                `}
                onClick={() => handleNavigate(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </aside>
      )}

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col w-full h-auto lg:h-full min-w-0">
        {/* Dashboard header (not shown in landing mode) */}
        {!isLanding && (
          <header className="h-auto lg:h-[80px] w-full bg-white border-b border-gray-200 flex items-center px-4 sm:px-6 py-3 lg:py-0 sticky top-0 z-50">
            <button
              className="lg:hidden bg-transparent border-none text-xl cursor-pointer text-blue-600 mr-4 font-bold"
              onClick={toggleSidebar}
            >
              ☰
            </button>
            <h1 className="text-lg sm:text-xl font-black text-black">Dashboard</h1>
          </header>
        )}

        {/* Page content */}
        <main className={`flex-1 w-full overflow-y-auto scroll-smooth bg-white ${isLanding ? 'snap-y snap-mandatory' : ''}`}>

          <div className="min-h-full flex flex-col">
            {isLanding && <Home onNavigate={handleNavigate} />}
          </div>
          {activeSection === 'Dashboard' && <Customers />}
          {activeSection === 'Analytics' && <Analytics />}
          {activeSection === 'Reports' && <Reports />}
          {activeSection === 'Settings' && <Settings />}
        </main>
      </div>
    </div>
  )
}

export default App

