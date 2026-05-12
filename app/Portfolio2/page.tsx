"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import './globals.css';

interface FormData {
    name: string;
    email: string;
    project: string;
    message: string;
}

interface Skill {
    name: string;
    level: number;
}

interface Project {
    id: number;
    title: string;
    description: string;
}

interface Experience {
    period: string;
    role: string;
    company: string;
    description: string;
}

interface Testimonial {
    name: string;
    company: string;
    quote: string;
    rating: number;
}

export default function Portfolio2() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        project: '',
        message: ''
    });

    const skills: Skill[] = [
        { name: 'Figma / Adobe XD', level: 95 },
        { name: 'User Research', level: 85 },
        { name: 'Prototyping', level: 90 },
        { name: 'HTML / CSS', level: 75 },
        { name: 'React / Framer', level: 65 },
        { name: 'Design Systems', level: 88 }
    ];

    const projects: Project[] = [
        { id: 1, title: 'E-Commerce Platform', description: 'Complete redesign of mobile & web experience for 1M+ users' },
        { id: 2, title: 'SaaS Dashboard', description: 'Data visualization & admin panel for enterprise clients' },
        { id: 3, title: 'Mobile App UI', description: 'Social networking app with rich animations & microinteractions' }
    ];

    const experiences: Experience[] = [
        { period: '2021 — Present', role: 'Senior Product Designer', company: 'Tech Company Inc.', description: 'Led design for multiple product lines, managed design team of 5, established design systems used by 30+ engineers.' },
        { period: '2019 — 2021', role: 'UI/UX Designer', company: 'Digital Agency Pro', description: 'Designed interfaces for 20+ client projects across fintech, healthcare, and e-commerce verticals.' },
        { period: '2018 — 2019', role: 'Freelance Designer', company: 'Self-Employed', description: 'Created designs for early-stage startups and small businesses across Southeast Asia.' }
    ];

    const testimonials: Testimonial[] = [
        { name: 'Sarah Johnson', company: 'Tech Startup', quote: 'Desi is an exceptional designer who understands our vision perfectly. She delivered beyond expectations and transformed our product completely.', rating: 5 },
        { name: 'Michael Chen', company: 'Digital Agency', quote: 'Professional, creative, and always delivers on time. A true asset to any project. We have worked together on 5 projects and counting.', rating: 5 },
        { name: 'Emma Williams', company: 'E-Commerce Brand', quote: 'The design transformation Desi brought to our platform exceeded all expectations. Conversion rate improved by 40%.', rating: 5 }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Head>
                <title>Desi — Designer · V1 Brutalist</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
            </Head>

            <nav>
                <div className="logo">Desi<span>.</span></div>
                <ul>
                    <li><a onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a onClick={() => scrollToSection('portfolio')}>Work</a></li>
                    <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                    <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                </ul>
                <a href="mailto:hello@desi.design" className="nav-cta">hello@desi.design</a>
            </nav>

            <section id="home">
                <div className="hero-left">
                    <div className="hero-tag">— available for work</div>
                    <h1 className="hero-h1">UI/UX<br /><em>Designer</em><br />&amp; Creator</h1>
                    <p className="hero-desc">Crafting digital experiences that don't just look good — they work beautifully. 5+ years turning complex ideas into elegant interfaces.</p>
                    <div className="btn-group">
                        <button className="btn-primary" onClick={() => scrollToSection('portfolio')}>View My Work</button>
                        <button className="btn-outline">Download CV</button>
                    </div>
                </div>
                <div className="hero-right">
                    <span className="hero-number">001 / Portfolio</span>
                    <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop" alt="Desi portrait" />
                    <div className="hero-marquee">
                        <div className="marquee-inner">
                            <span>UI Design</span><span>·</span>
                            <span>UX Research</span><span>·</span>
                            <span>Prototyping</span><span>·</span>
                            <span>Design Systems</span><span>·</span>
                            <span>Figma</span><span>·</span>
                            <span>Framer</span><span>·</span>
                            <span>UI Design</span><span>·</span>
                            <span>UX Research</span><span>·</span>
                            <span>Prototyping</span><span>·</span>
                            <span>Design Systems</span><span>·</span>
                            <span>Figma</span><span>·</span>
                            <span>Framer</span><span>·</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="stats">
                <div className="stat"><div className="stat-num">5+</div><div className="stat-label">Years Experience</div></div>
                <div className="stat"><div className="stat-num">40+</div><div className="stat-label">Projects Done</div></div>
                <div className="stat"><div className="stat-num">20+</div><div className="stat-label">Happy Clients</div></div>
                <div className="stat"><div className="stat-num">99%</div><div className="stat-label">Satisfaction Rate</div></div>
            </div>

            <section id="about">
                <div className="about-left">
                    <div className="section-label">About me</div>
                    <h2 className="section-h2">Passionate<br />Design<br />Thinker</h2>
                    <p className="section-p">I'm a UI/UX Designer with 5+ years building beautiful, user-centered digital products. My mission: make technology feel human.</p>
                    <p className="section-p">I specialize in design systems, user research, and translating complexity into simple, elegant interfaces.</p>
                    <button className="btn-primary" style={{ marginTop: '1rem' }}>Download CV →</button>
                </div>
                <div className="about-right">
                    <div className="section-label">Skills</div>
                    <ul className="skill-list">
                        {skills.map((skill, index) => (
                            <li key={index}>
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-bar">
                                    <span className="skill-fill" style={{ width: `${skill.level}%` }}></span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="portfolio">
                <div className="port-header">
                    <div>
                        <div className="section-label">Selected Work</div>
                        <h2 className="section-h2" style={{ fontSize: '2.5rem' }}>Featured Projects</h2>
                    </div>
                    <a href="#" className="port-link">View all work</a>
                </div>
                <div className="port-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="port-card">
                            <div className="port-img">
                                <span className="port-num">0{project.id}</span>
                            </div>
                            <div className="port-title">{project.title}</div>
                            <div className="port-desc">{project.description}</div>
                            <div className="port-link">View Project</div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="services">
                <div className="services-header">
                    <div className="section-label">What I Do</div>
                    <h2 className="section-h2" style={{ fontSize: '2.5rem', marginBottom: '0' }}>My Services</h2>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-num">01</div>
                        <div className="service-title">UI Design</div>
                        <div className="service-desc">Beautiful and functional interfaces that delight users and drive results.</div>
                    </div>
                    <div className="service-card">
                        <div className="service-num">02</div>
                        <div className="service-title">Prototyping</div>
                        <div className="service-desc">Interactive prototypes and animations that bring ideas to life before development.</div>
                    </div>
                    <div className="service-card">
                        <div className="service-num">03</div>
                        <div className="service-title">UX Research</div>
                        <div className="service-desc">User insights and usability testing to validate decisions with real data.</div>
                    </div>
                    <div className="service-card">
                        <div className="service-num">04</div>
                        <div className="service-title">Design Systems</div>
                        <div className="service-desc">Scalable component libraries that keep teams consistent and moving fast.</div>
                    </div>
                </div>
            </section>

            <section id="experience">
                <div className="section-label">Career</div>
                <h2 className="section-h2" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Work Experience</h2>
                <div className="exp-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="exp-item">
                            <div className="exp-period">{exp.period}</div>
                            <div>
                                <div className="exp-role">{exp.role}</div>
                                <div className="exp-company">{exp.company}</div>
                                <div className="exp-desc">{exp.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="testimonials">
                <div className="section-label">What clients say</div>
                <h2 className="section-h2" style={{ fontSize: '2.5rem', marginBottom: '0' }}>Testimonials</h2>
                <div className="test-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="test-card">
                            <div className="stars">{'★'.repeat(testimonial.rating)}</div>
                            <p className="test-quote">"{testimonial.quote}"</p>
                            <div className="test-name">{testimonial.name}</div>
                            <div className="test-co">{testimonial.company}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact">
                <div className="contact-left">
                    <div className="section-label">Get in touch</div>
                    <h2 className="section-h2">Let's Work<br />Together</h2>
                    <p className="section-p">Have a project in mind? I'd love to hear from you. Let's create something amazing together.</p>
                    <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '2rem', lineHeight: '2' }}>
                        <span style={{ display: 'block', color: '#888' }}>Email</span>hello@desi.design
                        <span style={{ display: 'block', color: '#888', marginTop: '1rem' }}>Phone</span>+62 812-3456-7890
                        <span style={{ display: 'block', color: '#888', marginTop: '1rem' }}>Location</span>Bandung, Indonesia
                    </p>
                </div>
                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className="input-group">
                            <label>Project</label>
                            <input type="text" name="project" placeholder="What are you working on?" value={formData.project} onChange={handleInputChange} />
                        </div>
                        <div className="input-group">
                            <label>Message</label>
                            <textarea name="message" rows={4} placeholder="Tell me more..." value={formData.message} onChange={handleInputChange}></textarea>
                        </div>
                        <button type="submit" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Send Message →</button>
                    </form>
                </div>
            </section>

            <footer>
                <div className="footer-logo">Desi<span>.</span></div>
                <div className="footer-links">
                    <a onClick={() => scrollToSection('portfolio')}>Work</a>
                    <a onClick={() => scrollToSection('about')}>About</a>
                    <a onClick={() => scrollToSection('contact')}>Contact</a>
                    <a href="#">Dribbble</a>
                    <a href="#">LinkedIn</a>
                </div>
                <div className="footer-copy">© 2025 Desi. All rights reserved.</div>
            </footer>
        </>
    );
}