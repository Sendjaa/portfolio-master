"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import './globals.css';

interface Project {
    id: number;
    category: string;
    title: string;
    description: string;
    thumbClass: string;
}

interface Service {
    id: number;
    number: string;
    icon: string;
    iconBg: string;
    title: string;
    description: string;
}

interface Experience {
    id: number;
    period: string;
    role: string;
    company: string;
    description: string;
    tag: string;
    tagBg: string;
    tagColor: string;
}

interface Testimonial {
    id: number;
    name: string;
    company: string;
    quote: string;
    rating: number;
}

export default function Portfolio6() {
    const projects: Project[] = [
        { id: 1, category: 'E-Commerce', title: 'Platform Redesign', description: 'Complete mobile & web redesign for 1M+ users', thumbClass: 'port-t1' },
        { id: 2, category: 'SaaS', title: 'Analytics Dashboard', description: 'Data viz & admin panel for enterprise clients', thumbClass: 'port-t2' },
        { id: 3, category: 'Mobile App', title: 'Social Network UI', description: 'Rich animations & microinteraction design', thumbClass: 'port-t3' }
    ];

    const services: Service[] = [
        { id: 1, number: '01', icon: '🎨', iconBg: 'rgba(255,228,77,0.15)', title: 'UI Design', description: 'Beautiful, functional interfaces that delight users and drive results.' },
        { id: 2, number: '02', icon: '⚡', iconBg: 'rgba(77,121,255,0.15)', title: 'Prototyping', description: 'Interactive prototypes and animations that bring ideas to life.' },
        { id: 3, number: '03', icon: '🔍', iconBg: 'rgba(61,222,143,0.15)', title: 'UX Research', description: 'User insights and usability testing for data-driven decisions.' },
        { id: 4, number: '04', icon: '🏗️', iconBg: 'rgba(255,110,180,0.15)', title: 'Design Systems', description: 'Scalable component libraries that keep teams consistent at any scale.' }
    ];

    const experiences: Experience[] = [
        { id: 1, period: '2021 — Present', role: 'Senior Product Designer', company: 'Tech Company Inc.', description: 'Led design for multiple product lines, managed team of 5, built design systems used by 30+ engineers.', tag: 'CURRENT ★', tagBg: 'var(--green)', tagColor: 'white' },
        { id: 2, period: '2019 — 2021', role: 'UI/UX Designer', company: 'Digital Agency Pro', description: 'Designed interfaces for 20+ client projects across fintech, healthcare, and e-commerce.', tag: '2 YRS', tagBg: 'var(--yellow)', tagColor: 'black' },
        { id: 3, period: '2018 — 2019', role: 'Freelance Designer', company: 'Self-Employed', description: 'Created designs for startups and small businesses across Southeast Asia.', tag: 'HUSTLE', tagBg: 'var(--pink)', tagColor: 'white' }
    ];

    const testimonials: Testimonial[] = [
        { id: 1, name: 'Sarah Johnson', company: 'Tech Startup', quote: 'Desi is an exceptional designer who understood our vision perfectly. Delivered work that truly transformed our product!', rating: 4 },
        { id: 2, name: 'Michael Chen', company: 'Digital Agency', quote: 'Professional, creative, always on time. A true asset. We have worked together on 5 projects and she never disappoints.', rating: 4 },
        { id: 3, name: 'Emma Williams', company: 'E-Commerce Brand', quote: 'The design transformation exceeded all expectations. Our conversion improved 40% after the redesign. Amazing work!', rating: 4 }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Head>
                <title>Desi — Designer · V5 Retro Y2K</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,600;0,800;1,400&family=Unbounded:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>

            <nav>
                <div className="logo">DESI★</div>
                <ul>
                    <li><a onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a onClick={() => scrollToSection('portfolio')}>Work</a></li>
                    <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                    <li><a onClick={() => scrollToSection('experience')}>XP</a></li>
                </ul>
                <a onClick={() => scrollToSection('contact')} className="nav-cta">HIT ME UP ✦</a>
            </nav>

            <section id="home">
                <div className="hero-deco deco1"></div>
                <div className="hero-deco deco2"></div>
                <div className="hero-deco deco3"></div>
                <div className="hero-inner">
                    <div>
                        <div className="hero-badge"><span className="badge-dot"></span>Open to work · 2025</div>
                        <h1 className="hero-h1">
                            <span>Making</span>
                            <span className="accent">digital</span>
                            <span className="outline">magic</span>
                        </h1>
                        <p className="hero-p">Hi! I'm Desi — a UI/UX designer who loves crafting bold, playful, and purposeful digital experiences. 5+ years turning wild ideas into polished products.</p>
                        <div className="hero-btns">
                            <a onClick={() => scrollToSection('portfolio')} className="btn-y2k btn-primary-y">See My Work ✦</a>
                            <a onClick={() => scrollToSection('contact')} className="btn-y2k btn-pink-y">Contact Me</a>
                        </div>
                    </div>
                    <div className="hero-card">
                        <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&fit=crop&fp-y=0.2" alt="Desi" />
                        <div className="hero-card-label">DESI★ DESIGNER</div>
                    </div>
                </div>
            </section>

            <div className="marquee-band">
                <div className="marquee-inner">
                    <span>UI DESIGN</span><span className="marquee-sep">★</span>
                    <span>UX RESEARCH</span><span className="marquee-sep">★</span>
                    <span>PROTOTYPING</span><span className="marquee-sep">★</span>
                    <span>DESIGN SYSTEMS</span><span className="marquee-sep">★</span>
                    <span>FIGMA</span><span className="marquee-sep">★</span>
                    <span>FRAMER</span><span className="marquee-sep">★</span>
                    <span>USER TESTING</span><span className="marquee-sep">★</span>
                    <span>UI DESIGN</span><span className="marquee-sep">★</span>
                    <span>UX RESEARCH</span><span className="marquee-sep">★</span>
                    <span>PROTOTYPING</span><span className="marquee-sep">★</span>
                    <span>DESIGN SYSTEMS</span><span className="marquee-sep">★</span>
                    <span>FIGMA</span><span className="marquee-sep">★</span>
                    <span>FRAMER</span><span className="marquee-sep">★</span>
                    <span>USER TESTING</span><span className="marquee-sep">★</span>
                </div>
            </div>

            <div className="stats-band">
                <div className="stat-item"><div className="stat-num" style={{color: 'var(--blue)'}}>5+</div><div className="stat-label">Years XP</div></div>
                <div className="stat-item"><div className="stat-num" style={{color: 'var(--pink)'}}>40+</div><div className="stat-label">Projects</div></div>
                <div className="stat-item"><div className="stat-num" style={{color: 'var(--green)'}}>20+</div><div className="stat-label">Happy Clients</div></div>
                <div className="stat-item"><div className="stat-num" style={{color: 'var(--orange)'}}>99%</div><div className="stat-label">Satisfaction</div></div>
            </div>

            <div id="about" className="section-w">
                <div className="section">
                    <div className="about-layout">
                        <div className="about-img-side">
                            <div className="about-photo">
                                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop&fp-y=0.2" alt="Desi" />
                            </div>
                            <div className="floating-sticker sticker1">5+ YEARS★</div>
                            <div className="floating-sticker sticker2">BASED IN BDG 📍</div>
                        </div>
                        <div className="about-text">
                            <span className="tag-label">About me</span>
                            <h2 className="sec-h">Designer who<br/>loves <em>bold</em> ideas</h2>
                            <p>I'm Desi — a UI/UX designer with an obsession for creating digital products that are not just functional, but genuinely delightful. My design philosophy: bold decisions, clean execution.</p>
                            <p>Specializing in design systems, mobile apps, and brand identity. I bring energy and precision to every project.</p>
                            <div className="skill-wrap">
                                <span className="skill-badge">Figma</span><span className="skill-badge">Adobe XD</span>
                                <span className="skill-badge">Framer</span><span className="skill-badge">Sketch</span>
                                <span className="skill-badge">React</span><span className="skill-badge">HTML/CSS</span>
                                <span className="skill-badge">Prototyping</span><span className="skill-badge">User Research</span>
                            </div>
                            <a href="#" className="btn-y2k btn-primary-y" style={{display: 'inline-block'}}>Download CV →</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolio" className="section-w">
                <div className="section">
                    <div className="port-header">
                        <div>
                            <span className="tag-label">My Work</span>
                            <h2 className="sec-h">Featured <em>Projects</em></h2>
                        </div>
                        <a href="#" className="btn-y2k btn-primary-y" style={{fontSize: '0.6rem', padding: '0.5rem 1rem'}}>All Projects →</a>
                    </div>
                    <div className="port-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="port-card">
                                <div className={`port-thumb ${project.thumbClass}`}>{project.id}</div>
                                <div className="port-body">
                                    <div className="port-cat">{project.category}</div>
                                    <div className="port-title">{project.title}</div>
                                    <div className="port-desc">{project.description}</div>
                                    <span className="port-link">View Project →</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="services" className="services-bg">
                <div className="services-inner">
                    <span className="tag-label">What I do</span>
                    <h2 className="sec-h" style={{color: 'white'}}>Design <em>Services</em></h2>
                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-icon" style={{background: service.iconBg, borderColor: '#444', fontSize: '1.4rem'}}>{service.icon}</div>
                                <div className="service-n">{service.number}</div>
                                <div className="service-title">{service.title}</div>
                                <div className="service-desc">{service.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="experience" className="section-w">
                <div className="section">
                    <span className="tag-label">Career</span>
                    <h2 className="sec-h">Work <em>Experience</em></h2>
                    <div className="exp-layout">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="exp-card">
                                <div className="exp-period">{exp.period}</div>
                                <div>
                                    <div className="exp-role">{exp.role}</div>
                                    <div className="exp-co">{exp.company}</div>
                                    <div className="exp-desc">{exp.description}</div>
                                </div>
                                <div className="exp-tag" style={{background: exp.tagBg, color: exp.tagColor}}>{exp.tag}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-w">
                <div className="section">
                    <span className="tag-label">Clients say</span>
                    <h2 className="sec-h">Testi<em>monials</em></h2>
                    <div className="test-grid">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="test-card">
                                <div className="test-stars">{'⭐'.repeat(testimonial.rating)}</div>
                                <p className="test-text">"{testimonial.quote}"</p>
                                <div className="test-name">{testimonial.name}</div>
                                <div className="test-co">{testimonial.company}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section id="contact" className="cta-section">
                <div className="cta-inner">
                    <h2 className="cta-h">Let's make<br/>something <em>wild</em> ✦</h2>
                    <div className="cta-right">
                        <p className="cta-note">Have a project? Let's chat!</p>
                        <a href="mailto:hello@desi.design" className="cta-email">hello@desi.design</a>
                        <a href="mailto:hello@desi.design" className="btn-y2k btn-pink-y" style={{textAlign: 'center'}}>Send Email ✦</a>
                        <a href="#" className="btn-y2k btn-primary-y" style={{textAlign: 'center'}}>Schedule Call</a>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer-brand">DESI<span>★</span></div>
                <div className="footer-links">
                    <a onClick={() => scrollToSection('portfolio')}>Work</a>
                    <a onClick={() => scrollToSection('about')}>About</a>
                    <a href="#">Dribbble</a>
                    <a href="#">LinkedIn</a>
                    <a onClick={() => scrollToSection('contact')}>Contact</a>
                </div>
                <div className="footer-copy">© 2025 Desi. Made with ♥</div>
            </footer>
        </>
    );
}