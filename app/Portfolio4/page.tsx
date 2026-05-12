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
    title: string;
    description: string;
}

interface Experience {
    id: number;
    period: string;
    role: string;
    company: string;
    description: string;
    specialStyle?: boolean;
}

interface Testimonial {
    id: number;
    name: string;
    company: string;
    quote: string;
    rating: number;
}

export default function Portfolio4() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const projects: Project[] = [
        { id: 1, category: 'E-Commerce', title: 'Platform Redesign', description: 'Complete mobile & web redesign for 1M+ users', thumbClass: 'port-thumb-1' },
        { id: 2, category: 'SaaS Dashboard', title: 'Analytics Platform', description: 'Data visualization & admin panel design', thumbClass: 'port-thumb-2' },
        { id: 3, category: 'Mobile App', title: 'Social Network UI', description: 'Rich animations & microinteraction design', thumbClass: 'port-thumb-3' }
    ];

    const services: Service[] = [
        { id: 1, number: '01', title: 'UI Design', description: 'Beautiful and functional interfaces that delight users and drive results.' },
        { id: 2, number: '02', title: 'Prototyping', description: 'Interactive prototypes and animations that communicate ideas powerfully.' },
        { id: 3, number: '03', title: 'UX Research', description: 'User insights and usability testing to validate every decision with data.' },
        { id: 4, number: '04', title: 'Design Systems', description: 'Scalable component libraries that keep teams consistent at any scale.' }
    ];

    const experiences: Experience[] = [
        { id: 1, period: '2021 — Present', role: 'Senior Product Designer', company: 'Tech Company Inc.', description: 'Led design for multiple product lines, managed team of 5, established design systems used by 30+ engineers.' },
        { id: 2, period: '2019 — 2021', role: 'UI/UX Designer', company: 'Digital Agency Pro', description: 'Designed interfaces for 20+ client projects across fintech, healthcare, and e-commerce verticals.' },
        { id: 3, period: '2018 — 2019', role: 'Freelance Designer', company: 'Self-Employed', description: 'Created designs for early-stage startups and small businesses across Southeast Asia.' },
        { id: 4, period: 'Education', role: 'B.Des Visual Communication', company: 'Design University, 2018', description: 'Graduated with honors. Specialized in human-computer interaction and digital design.', specialStyle: true }
    ];

    const testimonials: Testimonial[] = [
        { id: 1, name: 'Sarah Johnson', company: 'Tech Startup', quote: 'Desi is an exceptional designer who understood our vision perfectly and delivered work beyond our expectations.', rating: 5 },
        { id: 2, name: 'Michael Chen', company: 'Digital Agency', quote: 'Professional, creative, always on time. A true asset to any project. We have worked together on 5 projects.', rating: 5 },
        { id: 3, name: 'Emma Williams', company: 'E-Commerce Brand', quote: 'The design transformation exceeded all expectations. Conversion improved by 40% after redesign.', rating: 5 }
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
                <title>Desi — Designer · V3 Glass Luxury</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Outfit:wght@200;300;400;500&display=swap" rel="stylesheet" />
            </Head>

            <div className="orb orb1"></div>
            <div className="orb orb2"></div>
            <div className="orb orb3"></div>

            <nav>
                <div className="logo">Desi<span>.</span></div>
                <ul>
                    <li><a onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a onClick={() => scrollToSection('portfolio')}>Work</a></li>
                    <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                    <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                </ul>
                <a onClick={() => scrollToSection('contact')} className="nav-btn">Contact</a>
            </nav>

            <section id="home">
                <div className="hero-eyebrow">✦ Available for new projects ✦</div>
                <h1 className="hero-h1">Designing <em>luxury</em><br />digital experiences</h1>
                <p className="hero-p">I'm Desi — a product designer crafting premium, user-centered interfaces that elevate brands and delight users. 5+ years of refined design work.</p>
                <div className="hero-btns">
                    <a onClick={() => scrollToSection('portfolio')} className="btn-gold">View My Work</a>
                    <a onClick={() => scrollToSection('contact')} className="btn-glass">Get In Touch</a>
                </div>
                <div className="hero-scroll"><div className="scroll-line"></div>Scroll to explore</div>
            </section>

            <div className="stats">
                <div className="stat"><div className="stat-num">5+</div><div className="stat-label">Years Experience</div></div>
                <div className="stat"><div className="stat-num">40+</div><div className="stat-label">Projects</div></div>
                <div className="stat"><div className="stat-num">20+</div><div className="stat-label">Clients</div></div>
                <div className="stat"><div className="stat-num">99%</div><div className="stat-label">Satisfaction</div></div>
            </div>

            <div id="about" className="section">
                <div className="about-grid">
                    <div className="about-img-wrap">
                        <div className="about-img-frame">
                            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop" alt="Desi" />
                        </div>
                        <div className="about-float-badge glass-card">
                            <strong>5+</strong>
                            Years of Premium Design
                        </div>
                    </div>
                    <div className="about-text-content">
                        <div className="eyebrow">About me</div>
                        <h2 className="sec-h">Crafting <em>elegant</em><br />digital moments</h2>
                        <p>I'm a UI/UX Designer who believes great design is both an art and a science. My approach combines aesthetic sensibility with data-driven insights to create products that truly resonate.</p>
                        <p>Specializing in luxury brand experiences, SaaS platforms, and mobile apps — I bring a refined eye and rigorous process to every project.</p>
                        <div className="skill-pills">
                            <span className="pill">Figma</span><span className="pill">Adobe XD</span><span className="pill">Framer</span>
                            <span className="pill">Prototyping</span><span className="pill">Design Systems</span><span className="pill">React</span>
                        </div>
                        <a href="#" className="btn-gold" style={{ display: 'inline-block' }}>Download CV</a>
                    </div>
                </div>
            </div>

            <div id="portfolio" className="section" style={{ paddingTop: '2rem' }}>
                <div className="eyebrow">Selected work</div>
                <h2 className="sec-h">Featured <em>Projects</em></h2>
                <div className="port-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="port-card">
                            <div className={`port-thumb ${project.thumbClass}`}>{project.id}</div>
                            <div className="port-body">
                                <div className="port-cat">{project.category}</div>
                                <div className="port-title">{project.title}</div>
                                <div className="port-desc">{project.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div id="services" className="section" style={{ paddingTop: '2rem' }}>
                <div className="eyebrow">What I offer</div>
                <h2 className="sec-h">Design <em>Services</em></h2>
                <div className="services-row-wrap">
                    {services.map((service) => (
                        <div key={service.id} className="service-item glass-card">
                            <div className="service-no">{service.number}</div>
                            <div className="service-title">{service.title}</div>
                            <div className="service-desc">{service.description}</div>
                            <div className="service-arrow">→</div>
                        </div>
                    ))}
                </div>
            </div>

            <div id="experience" className="section" style={{ paddingTop: '2rem' }}>
                <div className="eyebrow">Career path</div>
                <h2 className="sec-h">Work <em>Experience</em></h2>
                <div className="exp-cards">
                    {experiences.map((exp) => (
                        <div key={exp.id} className={`exp-glass glass-card ${exp.specialStyle ? 'special-edu' : ''}`} style={exp.specialStyle ? { borderColor: 'rgba(201,168,76,0.2)' } : {}}>
                            <div className="exp-period">{exp.period}</div>
                            <div className="exp-role">{exp.role}</div>
                            <div className="exp-co">{exp.company}</div>
                            <div className="exp-desc">{exp.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section" style={{ paddingTop: '2rem' }}>
                <div className="eyebrow">What clients say</div>
                <h2 className="sec-h">Client <em>Testimonials</em></h2>
                <div className="test-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="test-glass glass-card">
                            <div className="test-gold-stars">{'★'.repeat(testimonial.rating)}</div>
                            <p className="test-quote">"{testimonial.quote}"</p>
                            <div className="test-name">{testimonial.name}</div>
                            <div className="test-co-name">{testimonial.company}</div>
                        </div>
                    ))}
                </div>
            </div>

            <section id="contact">
                <div className="contact-card">
                    <div className="contact-card-glow"></div>
                    <div className="eyebrow">Get in touch</div>
                    <h2>Let's create something <em>extraordinary</em></h2>
                    <p>Have a project in mind? I'd love to hear from you. Let's create something amazing that your users will adore.</p>
                    <div className="contact-actions">
                        <a href="mailto:hello@desi.design" className="btn-gold">Send me an email</a>
                        <a href="#" className="btn-glass">Schedule a call</a>
                    </div>
                    <span className="contact-email">Or reach me directly at <a href="mailto:hello@desi.design">hello@desi.design</a></span>
                </div>
            </section>

            <footer>
                <div className="footer-brand">Desi<span>.</span></div>
                <div className="footer-links">
                    <a onClick={() => scrollToSection('portfolio')}>Work</a>
                    <a onClick={() => scrollToSection('about')}>About</a>
                    <a href="#">Dribbble</a>
                    <a href="#">LinkedIn</a>
                </div>
                <div className="footer-right">© 2025 Desi. All rights reserved.</div>
            </footer>
        </>
    );
}