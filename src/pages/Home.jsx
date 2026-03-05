import { useState } from 'react'
import adminDp from '../assets/admin_dp.png'
import studDp from '../assets/stud_dp.png'
import Rbai from '../assets/Rbai.png'

// keiro

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

    return (
        <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory bg-[#050505] relative overflow-x-hidden">
            {/* Global Starry Animation Background */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
                <div className="stars-bg absolute inset-0">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                </div>
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
                            active:scale-95" style={{ marginBottom: '60px', marginTop: '10px' }}
                        onClick={() => onNavigate('Dashboard')}
                    >
                        Launch
                    </button>
                </div>
            </div>

            {/* About section */}
            <section id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center snap-start snap-always px-8 sm:px-12 md:px-16 overflow-hidden bg-transparent border-t border-white/5">
                <div className="relative z-10 max-w-[1400px] w-full mx-auto py-16">

                    {/* Title */}
                    <div className="text-center mb-12" style={{marginTop: '80px'}}>
                        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-[1.2] tracking-tight text-white">
                            About <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 bg-clip-text text-transparent" >Us</span>
                        </h2>
                    </div>

                    {/* Two cards side by side */}
                    <div className="flex flex-col xl:flex-row items-stretch justify-center gap-12 lg:gap-12"style={{marginTop: '30px'}}>

                        {/* Mission Card */}
                        <div className="group bg-white/5 border border-white/10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl overflow-hidden flex flex-col w-full hover:border-blue-400/50 transition-all duration-500 hover:shadow-blue-500/10" style={{ padding: '60px 50px' }}>
                            <div className="flex flex-col items-center flex-1 h-full justify-center">
                                <h3 className="text-[2.8rem] font-black text-white text-center mb-10">Our Mission</h3>
                                <p className="text-[1.35rem] leading-[2.1] text-gray-300 text-center max-w-[95%]">
                                    Our mission is to develop and deploy rbAI, a behavior-monitored coding playground with prompt-engineered AI guidance. This system creates a process-oriented learning environment by using behavioral analytics for integrity-aware insights and indirect scaffolding to prevent over-reliance on automated solutions.
                                </p>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="group bg-white/5 border border-white/10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl overflow-hidden flex flex-col w-full hover:border-emerald-400/50 transition-all duration-500 hover:shadow-emerald-500/10" style={{ padding: '60px 50px' }}>
                            <div className="flex flex-col items-center flex-1 h-full justify-center">
                                <h3 className="text-[2.8rem] font-black text-white text-center mb-10">Our Vision</h3>
                                <p className="text-[1.35rem] leading-[2.1] text-gray-300 text-center max-w-[95%]">
                                    To cultivate a future generation of novice programmers who master authentic computational skills, sustained by genuine cognitive engagement and academic integrity in the age of AI. We aim to transform programming education through augmented intelligence that supports productive struggle, not automated answers.
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
            <section id="contact" className="relative w-full min-h-screen flex flex-col items-center justify-center snap-start snap-always overflow-hidden bg-transparent border-t border-white/5">
                <div className="relative z-10 max-w-[1300px] flex flex-col items-center w-full px-4 sm:px-6 md:px-8">
                    {/* Info side (Now Top) */}
                    <div className="px-4 text-center mb-16 flex flex-col items-center">
                    <h2 className="text-[clamp(2.7rem,5vw,4rem)] font-black my-6 tracking-tight text-white flex items-center gap-4" >
                            Contact <span className=" leading-[0.9] bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Us</span>
                        </h2>
                        <span className="leading-[0.8] font-black text-sm text-blue-400 tracking-[0.4em] uppercase bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 bg-clip-text text-transparent" style={{marginBottom: '60px'}}>Let's Start a Conversation</span>
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
                            <p className="text-[1.4rem] text-gray-300" style={{ marginBottom: '20px', marginTop: '2.5' }}>
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
                            <p className="text-[1.4rem] text-gray-300" style={{ marginBottom: '10px', marginTop: '2.2rem' }}>
                                For detailed inquiries or feedback.
                            </p>
                            <CircleMenu items={['Support Team', 'Send Feedback', 'Partnership', 'Other']} />
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer section - half screen block */}
            <footer className="relative z-10 w-full min-h-[50vh] flex flex-col snap-start snap-always overflow-hidden border-t border-white/5" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9))' }}>
                <div className="flex-1 flex items-center justify-center py-20">
                    <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-24 w-full">

                        {/* Brand Column */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-3">
                                <span className="text-4xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent tracking-tighter" style={{ marginLeft: '50px' }}>
                                    rbAI
                                </span>
                                <p className="text-[1.1rem] text-gray-400 leading-[1.9] max-w-[400px]" style={{ marginLeft: '50px' }}>
                                    A modern analytics dashboard designed to help educators identify true mastery — not just the illusion of it.
                                </p>
                            </div>
                            {/* Social icons */}
                            <div className="flex items-center gap-5 mt-2" style={{ marginLeft: '50px' }}>
                                {[
                                    { label: 'Facebook', icon: (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"/>
                                        </svg>
                                    )},
                                    { label: 'GitHub', icon: (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                        </svg>
                                    )},
                                    { label: 'Email', icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    )},
                                ].map(({ label, icon }) => (
                                    <button
                                        key={label}
                                        type="button"
                                        title={label}
                                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-400 border border-white/5 bg-white/5 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer"
                                    >
                                        {icon}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col gap-10">
                            <h4 className="text-sm font-black text-white tracking-[0.3em] uppercase opacity-50 whitespace-nowrap ml-[250px]">Quick Links</h4>
                            <div className="flex flex-col gap-5 whitespace-nowrap ml-[250px]" >
                                {[
                                    { label: '🏠  Home', section: 'Home' },
                                    { label: 'ℹ️  About Us', section: 'About' },
                                    { label: '👥  Our Team', section: 'Team' },
                                    { label: '📬  Contact Us', section: 'Contact' }
                                ].map(({ label, section }) => (
                                    <button
                                        key={section}
                                        type="button"
                                        onClick={() => onNavigate(section)}
                                        className="text-left text-[1.05rem] text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 bg-transparent border-none cursor-pointer w-fit"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-8">
                            <h4 className="text-sm font-black text-white tracking-[0.3em] uppercase opacity-50 whitespace-nowrap ml-[250px]">Get in Touch</h4>
                            <div className="flex flex-col gap-6 text-[1.05rem] text-gray-400 whitespace-nowrap ml-[250px]">
                                <div className="flex items-start gap-4 ">
                                    <span className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">📱</span>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone</span>
                                        <span>+63 894 043 7812</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">📧</span>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</span>
                                        <span>contact@rbai.edu.ph</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 mx-8" />

                {/* Bottom Bar */}
                <div className="w-full flex justify-center text-center py-12">
                    <span className="text-[1.1rem] text-gray-600 font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} rbAI — All rights reserved.
                    </span>
                </div>
            </footer>
        </div >
    )
}

export default Home


