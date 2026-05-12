'use client';

import { useTheme } from 'next-themes';
import { themes } from '@/config/themes';
import { Menu, X, ArrowRight, Star, Award, Briefcase, Code2, Palette, Zap, Pen, Layers } from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';
import { useState } from 'react';

export default function Portfolio1() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Services', href: '#services' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];
    const { theme } = useTheme();
    const currentTheme = (theme && themes[theme]) ? themes[theme] : themes.Portfolio1;
    return (
        <div className="bg-white dark:bg-gray-900" >
            <nav className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between dark:bg-slate-900/80 backdrop-blur sticky top-0 z-50">
                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <span className="text-xl font-bold dark:text-white text-slate-900">Brazil</span>
                </div>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium dark:text-slate-300">
                    {menuItems.map((item) => (
                    <li key={item.name}>
                        <a href={item.href} className="hover:text-indigo-500 transition-colors">
                        {item.name}
                        </a>
                    </li>
                    ))}
                </ul>

                {/* DESKTOP BUTTON */}
                <button className="hidden md:block px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20">
                    Hello@brazil.com
                </button>

                {/* MOBILE HAMBURGER BUTTON */}
                <button 
                    className="md:hidden p-2 text-slate-600 dark:text-slate-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* MOBILE MENU (OVERLAY) */}
                <AnimatePresence>
                    {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-6 md:hidden shadow-xl"
                    >
                        <ul className="flex flex-col gap-4">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                            <a 
                                href={item.href} 
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 block"
                            >
                                {item.name}
                            </a>
                            </li>
                        ))}
                        </ul>
                        <button className="w-full px-4 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition">
                        Hello@brazil.com
                        </button>
                    </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            {/* end navbar */}
            {/* .
            .
            .
            .
             */}
            {/* header */}
            <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-6 py-9 flex flex-col items-center text-center relative z-10">
                    <span className='md:mb-5 text-indigo-600'>🙌hallo! my name is Desi, i'm a designer</span>
                
                {/* Teks Heading */}
                <h1 className="text-4xl md:text-7xl font-bold mb-4 font-telma tracking-tighter text-slate-900 dark:text-white leading-none">
                <span className=" dark:text-gray-400 text-sm md:text-9xl tracking-wide uppercase mb-2 block transition-transform duration-500 ease-in-out hover:-translate-x-[20%] cursor-default">
                    i&apos;m <br />
                    </span>
                <span className="text-indigo-600 flex flex-wrap justify-center md:text-9xl gap-x-2 md:gap-x-55 md:ms-10 z-100">
                    <span className="inline-block animate-float">Desi</span>
                    <span className="inline-block animate-float">gner</span>
                </span>
                </h1>

                {/* Container Gambar */}
                <div className="relative md:-mt-20 mt-8 lg:-mt-80 w-full max-w-sm md:max-w-md lg:max-w-lg">
                <img 
                    src="/aiony-haust-3TLl_97HNJo-unsplash-removebg-preview.png" 
                    alt="profile" 
                    className="mx-auto w-full h-auto grayscale object-cover hover:grayscale-0 transition-all duration-700" 
                />
                </div> 
            </div>

            <div className='flex flex-wrap absolute bottom-50 left-0 right-0 justify-center gap-4 z-10 md:gap-100'>
                <button className="px-10 py-3 bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20 mt-6">
                    View my work
                </button>
                <button className="px-10 py-3 bg-gray-300 text-gray-800 text-sm font-semibold hover:bg-gray-400 transition shadow-lg shadow-gray-500/20 mt-6 ms-4">
                    Contact me
                </button>
            </div>

            {/* Scroll Indicator - Diposisikan di paling bawah layar */}
            {/* <div className="absolute bottom-0 md:bottom-[-28px]  left-0 w-full bg-indigo-600 h-16 flex items-center justify-center text-white font-bold text-sm md:text-lg tracking-widest uppercase">
                <span className="animate-pulse flex items-center gap-2">
                Scroll down
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                </span>
            </div> */}
            </header>

            {/* CLIENTS LOGOS SECTION - Bergulir Ke Kanan */}
            <section className="py-5 px-6 w-full -bottom-60 z-50 absolute bg-indigo-600 dark:bg-gray-800 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-1"
                    >
                    </motion.div>

                    {/* Carousel Container */}
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: -1000 }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex gap-12 min-w-max"
                        >
                            {/* First Loop */}
                            {[
                                { name: 'Google', color: 'from-blue-400 to-blue-600' },
                                { name: 'Apple', color: 'from-gray-600 to-gray-900' },
                                { name: 'Microsoft', color: 'from-blue-500 to-indigo-600' },
                                { name: 'Amazon', color: 'from-orange-400 to-yellow-500' },
                                { name: 'Meta', color: 'from-blue-600 to-purple-600' },
                                { name: 'Netflix', color: 'from-red-600 to-red-800' },
                            ].map((brand, idx) => (
                                <div
                                    key={`client-1-${idx}`}
                                    className="flex-shrink-0 w-48 h-24 dark:bg-gray-900 rounded-lg flex items-center justify-center transition "
                                >
                                    <div className={`w-40 h-20 bg-gradient-to-r ${brand.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                                        {brand.name}
                                    </div>
                                </div>
                            ))}

                            {/* Second Loop untuk continuous effect */}
                            {[
                                { name: 'Google', color: 'from-blue-400 to-blue-600' },
                                { name: 'Apple', color: 'from-gray-600 to-gray-900' },
                                { name: 'Microsoft', color: 'from-blue-500 to-indigo-600' },
                                { name: 'Amazon', color: 'from-orange-400 to-yellow-500' },
                                { name: 'Meta', color: 'from-blue-600 to-purple-600' },
                                { name: 'Netflix', color: 'from-red-600 to-red-800' },
                            ].map((brand, idx) => (
                                <div
                                    key={`client-2-${idx}`}
                                    className="flex-shrink-0 w-48 h-24 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition border border-slate-200 dark:border-slate-700"
                                >
                                    <div className={`w-40 h-20 bg-gradient-to-r ${brand.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                                        {brand.name}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Gradient Fade Edges */}
                    <div className="absolute left-0 top-24 bottom-12 w-20 bg-gradient-to-r from-slate-50 dark:from-gray-800 to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-24 bottom-12 w-20 bg-gradient-to-l from-slate-50 dark:from-gray-800 to-transparent pointer-events-none"></div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                                About <span className="text-indigo-600">Me</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                                I'm a passionate UI/UX Designer with 5+ years of experience creating beautiful, user-centered digital experiences. My journey started with a curiosity about how people interact with technology, and it has evolved into a mission to design solutions that are not just visually stunning, but also intuitive and accessible.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                I specialize in creating end-to-end design systems, conducting user research, and translating complex ideas into simple, elegant interfaces. When I'm not designing, you can find me exploring new design trends, mentoring junior designers, or experimenting with interactive prototypes.
                            </p>
                            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition flex items-center gap-2">
                                Download CV <ArrowRight size={18} />
                            </button>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                            
                            {/* Animated Design Elements Around Image */}
                            <motion.div
                                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-6 -left-6 w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center shadow-lg z-20"
                            >
                                <Palette className="text-purple-600 dark:text-purple-400" size={28} />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                                className="absolute -bottom-6 -right-6 w-16 h-16 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center shadow-lg z-20"
                            >
                                <Pen className="text-indigo-600 dark:text-indigo-400" size={28} />
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
                                transition={{ duration: 5.5, repeat: Infinity, delay: 1 }}
                                className="absolute top-1/4 -right-8 w-14 h-14 bg-pink-100 dark:bg-pink-900/40 rounded-lg flex items-center justify-center shadow-lg z-20"
                            >
                                <Zap className="text-pink-600 dark:text-pink-400" size={24} />
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
                                transition={{ duration: 4.8, repeat: Infinity, delay: 1.5 }}
                                className="absolute bottom-1/4 -left-8 w-14 h-14 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg flex items-center justify-center shadow-lg z-20"
                            >
                                <Layers className="text-cyan-600 dark:text-cyan-400" size={24} />
                            </motion.div>

                            <img 
                                src="/aiony-haust-3TLl_97HNJo-unsplash-removebg-preview.png" 
                                alt="about" 
                                className="relative w-full h-auto rounded-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* PORTFOLIO SECTION */}
            <section id="portfolio" className="py-20 px-6 bg-slate-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            Featured <span className="text-indigo-600">Projects</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300">
                            Some of my recent design work and case studies
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'E-Commerce Platform', desc: 'Complete redesign of mobile & web experience', img: '1' },
                            { title: 'SaaS Dashboard', desc: 'Data visualization & admin panel design', img: '2' },
                            { title: 'Mobile App UI', desc: 'Social networking app with animations', img: '3' },
                        ].map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl overflow-hidden mb-4">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Palette size={48} className="text-white opacity-50" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.desc}</p>
                                <a href="#" className="text-indigo-600 font-semibold flex items-center gap-2 group/link">
                                    View Project <ArrowRight size={16} className="group-hover/link:translate-x-1 transition" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="py-20 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            My <span className="text-indigo-600">Services</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300">
                            Design solutions tailored to your needs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Palette, title: 'UI Design', desc: 'Beautiful and functional interfaces' },
                            { icon: Code2, title: 'Prototyping', desc: 'Interactive prototypes & animations' },
                            { icon: Zap, title: 'UX Research', desc: 'User insights & usability testing' },
                            { icon: Award, title: 'Design Systems', desc: 'Scalable component libraries' },
                        ].map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-slate-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition"
                                >
                                    <Icon size={40} className="text-indigo-600 mb-4" />
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">{service.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section id="experience" className="py-20 px-6 bg-slate-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            Work <span className="text-indigo-600">Experience</span>
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-8">
                        {[
                            { company: 'Tech Company Inc', role: 'Senior Product Designer', period: '2021 - Present', desc: 'Led design for multiple product lines, managed design team of 5' },
                            { company: 'Digital Agency Pro', role: 'UI/UX Designer', period: '2019 - 2021', desc: 'Designed interfaces for 20+ client projects across various industries' },
                            { company: 'Startup Hub', role: 'Freelance Designer', period: '2018 - 2019', desc: 'Created designs for early-stage startups and small businesses' },
                        ].map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition"
                            >
                                <div className="flex items-start gap-4">
                                    <Briefcase size={24} className="text-indigo-600 flex-shrink-0 mt-1" />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                                        <p className="text-indigo-600 font-semibold mb-2">{exp.company}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{exp.period}</p>
                                        <p className="text-slate-600 dark:text-slate-300">{exp.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section className="py-20 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            My <span className="text-indigo-600">Skills</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { category: 'Design Tools', skills: ['Figma', 'Adobe XD', 'Sketch', 'Framer'] },
                            { category: 'Soft Skills', skills: ['User Research', 'Wireframing', 'Prototyping', 'Problem Solving'] },
                            { category: 'Technical', skills: ['HTML/CSS', 'JavaScript', 'React', 'Responsive Design'] },
                        ].map((group, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-slate-50 dark:bg-gray-800 rounded-xl"
                            >
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{group.category}</h3>
                                <div className="space-y-3">
                                    {group.skills.map((skill, sidx) => (
                                        <div key={sidx} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                                            <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="py-20 px-6 bg-slate-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                            Client <span className="text-indigo-600">Testimonials</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Sarah Johnson', company: 'Tech Startup', text: 'Desi is an exceptional designer who understands our vision perfectly. Highly recommended!' },
                            { name: 'Michael Chen', company: 'Digital Agency', text: 'Professional, creative, and always delivers on time. A true asset to any project.' },
                            { name: 'Emma Williams', company: 'E-Commerce Brand', text: 'The design transformations Desi brought to our platform exceeded all expectations.' },
                        ].map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-slate-700"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.company}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                            Let&apos;s <span className="text-indigo-600">Work Together</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
                            Have a project in mind? I'd love to hear from you. Get in touch and let's create something amazing!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
                                Send me an email
                            </button>
                            <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition">
                                Schedule a call
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-slate-900 dark:bg-black text-white py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4">Desi</h3>
                            <p className="text-slate-400">Product Designer & Creative Thinker</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
                                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                                <li><a href="#about" className="hover:text-white transition">About</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Social</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                                <li><a href="#" className="hover:text-white transition">Dribbble</a></li>
                                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <p className="text-slate-400">hello@desi.design</p>
                            <p className="text-slate-400">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
                        <p>&copy; 2024 Desi. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}