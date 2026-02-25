const inputClass = `
  w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[12px] font-[inherit] text-base
  text-black transition-all duration-200 outline-none
  focus:border-blue-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]
`

const Home = ({ onNavigate }) => {

    const team = [
        { name: 'Lily Ann Dela Cruz', role: 'Adviser', type: 'adviser', img: '../assets/epstein.jpg' },
        { name: 'Allan Khester Mesa', role: 'Leader', type: 'leader', img: '../assets/kap.jpg' },
        { name: 'Yves Alcantara', role: 'Member', type: 'member', img: '../assets/member1.png' },
        { name: 'Kennroe Basseg', role: 'Member', type: 'member', img: '../assets/member2.png' },
        { name: 'Shine Telan', role: 'Member', type: 'member', img: '../assets/member3.png' },
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
        <div className="w-full flex flex-col">
            {/* Hero section */}
            <div id="home" className="relative w-full px-4 sm:px-6 md:px-8 text-center min-h-screen flex flex-col items-center justify-center snap-start snap-always overflow-hidden bg-[#050505]">
                {/* Global Background Layer */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `
                            radial-gradient(circle at 10% 30%, rgba(0, 255, 255, 0.2) 0%, transparent 50%),
                            radial-gradient(circle at 90% 70%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                            #050505
                        `,
                    }}
                />

                {/* Subtle Dot Grid Overlay */}
                <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none dot-grid-bg" />

                <div className="relative z-10 max-w-[1200px] mx-auto mb-10">
                    <h2 className="text-[4.5rem] md:text-[6rem] font-black leading-[1.05] text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        Identify True
                        <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent" style={{ marginTop: '10px', paddingBottom: '20px' }}>
                            Mastery in Learning
                        </span>
                    </h2>
                </div>

                {/* Floating Content Section */}
                <div className="relative z-10 max-w-[850px] mx-auto flex flex-col items-center">
                    <p className="text-[1.4rem] sm:text-[1.8rem] font-medium leading-relaxed text-gray-400 mb-12 max-w-[780px] drop-shadow-sm" style={{ marginBottom: '50px' }}>
                        rbAI is a modern dashboard designed to help students and educators eliminate the illusion of competence with precision real-time analytics.
                    </p>

                    <button
                        className="px-12 py-7 min-w-[290px] min-h-[70px] bg-blue-600 text-white font-bold rounded-xl cursor-pointer text-[1.7rem] 
                            transition-all duration-300 inline-flex items-center justify-center
                            hover:bg-blue-700 hover:shadow-[0_12px_24px_rgba(37,99,235,0.4)]
                            active:scale-95" style={{ marginBottom: '100px', marginTop: '10px' }}
                        onClick={() => onNavigate('Dashboard')}
                    >
                        Launch
                    </button>
                </div>
            </div>

            {/* About section */}
            <section id="about" className="w-full py-24 bg-white min-h-screen flex flex-col items-center justify-center snap-start snap-always">
                <main className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center mb-20 pt-10">
                        <h2 className="text-[clamp(3rem,8vw,5rem)] font-black leading-[1.1] tracking-tight">
                            About <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">US</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-[120px]">
                        <section className="group grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-[80px]">
                            <div className="h-[400px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-[20px] relative overflow-hidden shadow-[0_12px_32px_rgba(37,99,235,0.1)]">
                                <img
                                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000"
                                    alt="Student studying"
                                    className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
                                />
                            </div>
                            <div>
                                <h3 className="text-[2.5rem] font-black mb-6 text-black">Our Mission</h3>
                                <p className="text-[1.15rem] leading-[1.8] text-gray-600 mb-4 text-justify">
                                    We believe every student deserves accurate feedback on their learning. Our mission is to provide educators with the tools to identify genuine understanding versus superficial knowledge.
                                </p>
                                <p className="text-[1.15rem] leading-[1.8] text-gray-600 text-justify">
                                    ThesisDash combines intelligent analytics with intuitive design to give educators real-time insights into student progress.
                                </p>
                            </div>
                        </section>

                        <section className="group grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-[80px]">
                            <div className="max-md:order-2">
                                <h3 className="text-[2.5rem] font-black mb-6 text-black">Our Vision</h3>
                                <p className="text-[1.15rem] leading-[1.8] text-gray-600 mb-4 text-justify">
                                    We envision a future where learning assessment is intelligent, fair, and accessible to every educator worldwide.
                                </p>
                                <p className="text-[1.15rem] leading-[1.8] text-gray-600 text-justify">
                                    By leveraging data science and pedagogical principles, we're transforming how institutions measure learning outcomes.
                                </p>
                            </div>
                            <div className="h-[400px] bg-gradient-to-br from-pink-50 to-pink-100 rounded-[20px] relative overflow-hidden shadow-[0_12px_32px_rgba(237,100,166,0.1)] max-md:order-1">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                                    alt="Data dashboard"
                                    className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
                                />
                            </div>
                        </section>
                    </div>
                </main>
            </section>

            {/* Team section */}
            <section id="team" className="w-full py-24 px-4 sm:px-6 md:px-8 bg-slate-50 min-h-screen flex flex-col items-center justify-center snap-start snap-always">
                <div className="max-w-[1400px] mx-auto w-full">
                    <h2 className="text-[2.5rem] md:text-[3rem] font-black text-center mb-16 text-black">
                        Meet Our <span className="text-blue-600">Team</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
                        {team.map((person, index) => (
                            <div
                                key={index}
                                className="team-card bg-white border border-gray-200 rounded-[20px] p-8 w-full h-auto min-h-[450px]
                                cursor-pointer transition-all duration-300
                                shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                                hover:shadow-[0_12px_32px_rgba(37,99,235,0.15)]
                                hover:-translate-y-[8px] flex flex-col items-center"
                            >
                                <div className="w-[200px] h-[200px] overflow-hidden rounded-full mb-8 bg-gray-100 border-4 border-blue-50">
                                    <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-bold text-black text-center">{person.name}</h3>
                                <p className="text-blue-600 font-medium">{person.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact section */}
            <section id="contact" className="w-full py-24 bg-white min-h-screen flex items-center justify-center snap-start snap-always">
                <div className="max-w-[1300px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[80px] items-center w-full px-4 sm:px-6 md:px-8">
                    {/* Info side */}
                    <div className="px-4">
                        <span className="font-black text-sm text-blue-600 tracking-[0.2em] uppercase">Contact Us</span>
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.1] my-6 tracking-tight">
                            Let's Start a
                            <span className="block bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">Conversation</span>
                        </h2>
                        <p className="text-[1.3rem] text-gray-600 mb-10 max-w-[450px]">
                            Have questions about ThesisDash? Get in touch with our team and let's explore how we can support your goals.
                        </p>

                        <div className="flex flex-col gap-6">
                            {[
                                { icon: '📧', title: 'Email Us', detail: 'support@thesisdash.io' },
                                { icon: '💬', title: 'Live Support', detail: 'Mon–Fri, 9am–6pm' },
                                { icon: '📞', title: 'Call Us', detail: '+1 (555) 123-4567' },
                            ].map(({ icon, title, detail }) => (
                                <div key={title} className="flex items-center gap-5">
                                    <div className="w-12 h-12 bg-blue-50 rounded-[12px] flex items-center justify-center text-xl shrink-0">
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className="text-[1rem] font-bold">{title}</h4>
                                        <p className="text-gray-600 text-[0.95rem]">{detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form side */}
                    <div className="bg-white border border-gray-200 rounded-[20px] p-10 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                        <form className="flex flex-col gap-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label style={labelStyle}>Full Name</label>
                                    <input type="text" placeholder="John Doe" className={inputClass} style={inputbox} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label style={labelStyle}>Email Address</label>
                                    <input type="email" placeholder="john@example.com" className={inputClass} style={inputbox} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label style={labelStyle}>Subject</label>
                                <select className={inputClass} style={inputbox}>
                                    <option>Request a Demo</option>
                                    <option>Technical Support</option>
                                    <option>Pricing Information</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label style={labelStyle}>Message</label>
                                <textarea
                                    placeholder="Tell us more..."
                                    rows="4"
                                    className={`${inputClass} resize-none`}
                                    style={{ fontSize: '1.2rem', padding: '1rem' }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 text-white font-bold rounded-[12px] hover:bg-blue-700 transition-all active:scale-95 text-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home


