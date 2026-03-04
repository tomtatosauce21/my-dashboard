import { useState } from 'react'
import adminDp from '../assets/admin_dp.png'
import studDp from '../assets/stud_dp.png'
import Rbai from '../assets/Rbai.png'

const inputClass = `
  w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[12px] font-[inherit] text-base
  text-black transition-all duration-200 outline-none
  focus:border-blue-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]
`

const CopyableItem = ({ item }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(item).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <button
            type="button"
            onClick={handleCopy}
            title={`Click to copy: ${item}`}
            className="w-full text-left px-5 py-3 text-[1.2rem] text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-b border-gray-100 last:border-0 flex items-center justify-between gap-3 cursor-copy select-none"
        >
            <span>{item}</span>
            {copied ? (
                <span className="text-emerald-500 text-sm font-bold shrink-0 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                </span>
            ) : (
                <svg className="w-4 h-4 text-gray-400 shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            )}
        </button>
    )
}

const CircleMenu = ({ items }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative flex flex-col items-start" style={{ marginTop: '5px' }}>
            {/* Row: label + circle button */}
            <div className="flex items-center gap-4">
                {/* Label on the left */}
                <span className="text-[1.3rem] font-semibold text-gray-300">
                    Click for Contact List
                </span>

                {/* Circle toggle button */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 active:scale-95 shrink-0"
                    style={{
                        background: 'linear-gradient(135deg, #0d96e0ff, #37edb4ff)',
                    }}
                    title={open ? 'Close contacts' : 'Show contacts'}
                >
                    <svg
                        className={`w-5 h-5 text-white transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* Dropdown item list - absolutely positioned so it doesn't resize the container */}
            {open && (
                <div
                    className="absolute right-0 bg-white border border-gray-200 rounded-[14px] shadow-xl overflow-hidden z-50"
                    style={{ minWidth: '220px', top: '56px', padding: '10px 15px' }}
                >
                    {items.map((item) => (
                        <CopyableItem key={item} item={item} />
                    ))}
                </div>
            )}
        </div>
    )
}

const Home = ({ onNavigate }) => {

    const team = [
        { name: 'Lily Ann Dela Cruz, MIT', role: 'Adviser', type: 'adviser', img: adminDp },
        { name: 'Allan Khester Mesa', role: 'Leader', type: 'leader', img: studDp },
        { name: 'Yves Alcantara', role: 'Member', type: 'member', img: studDp },
        { name: 'Kennroe Basseg', role: 'Member', type: 'member', img: studDp },
        { name: 'Shine Telan', role: 'Member', type: 'member', img: studDp },
    ]

    const inputbox = {
        minHeight: '50px',
        maxWidth: '350px',
        marginLeft: '10px',
        fontSize: '1.2rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box '
    }

    const labelStyle = {
        marginBottom: '10px',
        marginLeft: '5px',
        fontSize: '1.3rem'
    }

    return (
        <div className="w-full flex flex-col bg-transparent">
            {/* Global Starry Animation Background */}
            <div className="stars-bg">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>

            {/* Hero section */}
            <div id="home" className="relative w-full px-4 sm:px-6 md:px-8 text-center min-h-screen flex flex-col items-center justify-center snap-start snap-always overflow-hidden bg-transparent">
                {/* Logo Section */}
                <div className="absolute top-5 left-10 z-20">
                    <img src={Rbai} alt="Rbai" className="h-30 w-auto" />
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto mb-10">
                    <h2 className="text-[4.5rem] md:text-[6rem] font-black leading-[1.05] text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" style={{ marginTop: '170px' }}>
                        Identify True
                        <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent" style={{ marginTop: '10px', paddingBottom: '20px' }}>
                            Mastery in Learning
                        </span>
                    </h2>
                </div>

                {/* Floating Content Section */}
                <div className="relative z-10 max-w-[850px] mx-auto flex flex-col items-center">
                    <p className="text-[1.4rem] sm:text-[1.8rem] font-medium leading-relaxed text-gray-400 mb-12 max-w-[780px] drop-shadow-sm" style={{ marginBottom: '50px' }}>
                        rbAI modern dashboard designed to help students and educators eliminate the illusion of competence with precision real-time analytics.
                    </p>

                    <button
                        className="px-12 py-7 min-w-[290px] min-h-[70px] border-2 border-blue-400 shadow-[0_0_15px_rgba(9, 9, 121, 0.65)] text-white font-bold rounded-xl cursor-pointer text-[1.7rem] 
                            transition-all duration-300 inline-flex items-center justify-center
                            hover:bg-blue-700 hover:shadow-[0_12px_24px_rgba(37,99,235,0.4)]
                            active:scale-95" style={{ marginBottom: '100px', marginTop: '70px' }}
                        onClick={() => onNavigate('Dashboard')}
                    >
                        Launch
                    </button>
                </div>
            </div>

            {/* About section */}
            <section id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center snap-start snap-always px-4 sm:px-8 overflow-hidden bg-transparent border-t border-white/5">
                <div className="relative z-10 max-w-[1200px] w-full mx-auto">

                    {/* Title */}
                    <div className="text-center mb-10">
                        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-[3.4] tracking-tight mt-3 text-white" style={{ marginTop: '10px' }}>
                            About <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Us</span>
                        </h2>
                    </div>

                    {/* Two cards side by side */}
                    <div className="flex flex-col xl:flex-row items-center justify-between gap-20 lg:gap-20" style={{ marginTop: '10px' }}>

                        {/* Mission Card */}
                        <div className="group bg-transparent border border-white/10 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md overflow-hidden flex flex-col w-full max-w-[800px] hover:border-blue-400/50 transition-colors duration-300" style={{ padding: '40px' }}>
                            <div className="p-8 flex flex-col items-center flex-1">
                                <h3 className="text-[2.8rem] font-black text-white text-center mb-4">Our Mission</h3>
                                <p className="text-[1.6rem] leading-[2.0] text-gray-300 text-center max-w-[90%]">
                                    We believe every student deserves accurate feedback. Our mission is to give educators tools to identify genuine understanding versus superficial knowledge — powered by real-time analytics.
                                </p>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="group bg-transparent border border-white/10 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md overflow-hidden flex flex-col w-full max-w-[800px] hover:border-pink-400/50 transition-colors duration-300" style={{ padding: '40px' }}>
                            <div className="p-8 flex flex-col items-center flex-1" >
                                <h3 className="text-[2.8rem] font-black text-white text-center mb-4">Our Vision</h3>
                                <p className="text-[1.6rem] leading-[2.0] text-gray-300 text-center max-w-[90%]">
                                    We envision a future where learning assessment is intelligent, fair, and accessible worldwide. By leveraging data science and pedagogy, we transform how institutions measure learning outcomes.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Team section */}
            <section id="team" className="relative w-full pt-24 min-h-screen flex flex-col items-center justify-between snap-start snap-always overflow-hidden bg-transparent border-t border-white/5">
                <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-center">
                    <h2 className="text-[2.8rem] md:text-[6rem] font-black text-center mb-16 text-white" style={{ marginBottom: '150px' }}>
                        Meet Our <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 bg-clip-text text-transparent" >Team</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 justify-center w-full">
                        {team.map((person, index) => (
                            <div
                                key={index}
                                className="team-card flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-[200px] h-[200px] overflow-hidden rounded-full mb-6 bg-gray-100 border-4 border-blue-50 shadow-sm">
                                    <img src={person.img} alt={person.name} className="team-img w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-white text-center" style={{ marginTop: '20px' }}>{person.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact section */}
            <section id="contact" className="relative w-full pt-24 min-h-screen flex flex-col items-center justify-between snap-start snap-always overflow-hidden bg-transparent border-t border-white/5">
                <div className="relative z-10 max-w-[1300px] flex flex-col items-center w-full px-4 sm:px-6 md:px-8 flex-1 justify-center">
                    {/* Info side (Now Top) */}
                    <div className="px-4 text-center mb-16 flex flex-col items-center">
                        <span className="font-black text-sm text-blue-400 tracking-[0.4em] uppercase bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Let's Start a Conversation</span>
                        <h2 className="text-[clamp(2.7rem,5vw,4rem)] font-black my-6 tracking-tight text-white flex items-center gap-4" style={{ marginBottom: '50px' }}>
                            Contact <span className=" leading-[0.9] bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Us</span>
                        </h2>
                    </div>

                    {/* Horizontal layout: 3 side-by-side standalone containers */}
                    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-15 w-full max-w-[1400px]">

                        {/* Text Us */}
                        <div className="bg-white/30 backdrop-blur-3xl border border-gray-100 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col flex-1" style={{ padding: '44px' }}>
                            <div className="flex items-center gap-6 mb-4">
                                <div className="w-17 h-17 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                                    📱
                                </div>
                                <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 via-indigo-4500 to-emerald-500 bg-clip-text text-transparent tracking-tight">Message Us</h3>
                            </div>
                            <p className="text-[1.4rem] text-gray-300" style={{ marginBottom: '20px', marginTop: '20px' }}>
                                For quick questions and mobile support.
                            </p>
                            <CircleMenu items={['8940437812', '8940437812', '8940437812', '8940437812']} />
                        </div>

                        {/* Chat with Specialist */}
                        <div className="bg-white/30 backdrop-blur-3xl border border-gray-100 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col flex-1" style={{ padding: '44px' }}>
                            <div className="flex items-center gap-6 mb-4">
                                <div className="w-17 h-17 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                                    💬
                                </div>
                                <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 via-indigo-4500 to-emerald-500 bg-clip-text text-transparent tracking-tight">Chat with Specialist</h3>
                            </div>
                            <p className="text-[1.4rem] text-gray-300" style={{ marginBottom: '35px', marginTop: '2.5rem' }}>
                                Chat with us via Messenger.
                            </p>
                            <CircleMenu items={['Yves alcantara', 'Allan Mesa', 'Kenn Basseg', 'Shine Telan']} />
                        </div>

                        {/* Send Us Email */}
                        <div className="bg-white/30 backdrop-blur-3xl border border-gray-100 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col flex-1" style={{ padding: '44px' }}>
                            <div className="flex items-center gap-6 mb-4">
                                <div className="w-17 h-17 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                                    📧
                                </div>
                                <h3 className=" text-3xl font-black bg-gradient-to-r from-blue-400 via-indigo-5400 to-emerald-500 bg-clip-text text-transparent tracking-tight">Send Us Email</h3>
                            </div>
                            <p className="text-[1.4rem] text-gray-300" style={{ marginBottom: '10px', marginTop: '1.8rem' }}>
                                For detailed inquiries or feedback.
                            </p>
                            <CircleMenu items={['Support Team', 'Send Feedback', 'Partnership', 'Other']} />
                        </div>

                    </div>
                </div>

                {/* Empty Footer Space - Full Width */}
                <div className="relative z-10 w-full h-[150px] mt-auto bg-black/40 border-t border-white/10"></div>
            </section >
        </div >
    )
}

export default Home


