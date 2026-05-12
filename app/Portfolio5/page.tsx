"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import './globals.css';

interface Project {
    id: number;
    category: string;
    title: string;
    description: string;
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
}

interface Testimonial {
    id: number;
    name: string;
    company: string;
    quote: string;
    rating: number;
}

interface FormData {
    name: string;
    email: string;
    projectType: string;
    message: string;
}

export default function Portfolio5() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        projectType: '',
        message: ''
    });

    const projects: Project[] = [
        { id: 1, category: 'E-Commerce', title: 'Platform Redesign', description: 'Complete mobile & web redesign for 1M+ users' },
        { id: 2, category: 'SaaS', title: 'Analytics Dashboard', description: 'Data visualization & admin panel for enterprise' },
        { id: 3, category: 'Mobile', title: 'Social App UI', description: 'Rich animations & microinteraction design' }
    ];

    const services: Service[] = [
        { id: 1, number: '01', title: 'UI Design', description: 'Beautiful, functional interfaces that delight users and drive business results.' },
        { id: 2, number: '02', title: 'Prototyping', description: 'Interactive prototypes and animations that communicate ideas clearly before development.' },
        { id: 3, number: '03', title: 'UX Research', description: 'User insights and usability testing to validate every design decision with real data.' },
        { id: 4, number: '04', title: 'Design Systems', description: 'Scalable component libraries that keep teams consistent and moving fast.' }
    ];

    const experiences: Experience[] = [
        { id: 1, period: '2021 — Present', role: 'Senior Product Designer', company: 'Tech Company Inc.', description: 'Led design for multiple product lines, managed design team of 5, established design systems used by 30+ engineers.' },
        { id: 2, period: '2019 — 2021', role: 'UI/UX Designer', company: 'Digital Agency Pro', description: 'Designed interfaces for 20+ client projects across fintech, healthcare, and e-commerce verticals.' },
        { id: 3, period: '2018 — 2019', role: 'Freelance Designer', company: 'Self-Employed', description: 'Created designs for early-stage startups and small businesses across Southeast Asia.' }
    ];

    const testimonials: Testimonial[] = [
        { id: 1, name: 'Sarah Johnson', company: 'Tech Startup', quote: 'Desi is an exceptional designer who understood our vision perfectly and delivered work that transformed our product.', rating: 5 },
        { id: 2, name: 'Michael Chen', company: 'Digital Agency', quote: 'Professional, creative, always on time. A true asset to any project. We have worked together on 5 projects.', rating: 5 },
        { id: 3, name: 'Emma Williams', company: 'E-Commerce Brand', quote: 'The design transformation exceeded all expectations. Our conversion rate improved by 40% after redesign.', rating: 5 }
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
                <title>Desi — Designer · V4 Minimal White</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Libre+Baskerville:ital@0;1&display=swap" rel="stylesheet" />
            </Head>

            <nav>
                <div className="logo">Desi</div>
                <ul>
                    <li><a onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a onClick={() => scrollToSection('portfolio')}>Work</a></li>
                    <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                    <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                </ul>
                <a onClick={() => scrollToSection('contact')} className="nav-contact">Contact</a>
            </nav>

            <section id="home" className="section-full">
                <div className="section" style={{ paddingTop: '0', paddingBottom: '0' }}>
                    <div className="hero-inner">
                        <div className="hero-left">
                            <div className="hero-status"><span className="status-dot"></span> Open for work · 2025</div>
                            <h1 className="hero-h1">Design that<br />feels <em>right</em><br />and works</h1>
                            <p className="hero-p">I'm Desi, a UI/UX Designer with 5+ years creating clean, user-centered digital products. I believe in simplicity, clarity, and craft.</p>
                            <div className="hero-ctas">
                                <a onClick={() => scrollToSection('portfolio')} className="cta-primary">View Work</a>
                                <a onClick={() => scrollToSection('contact')} className="cta-secondary">Get In Touch</a>
                            </div>
                        </div>
                        <div className="hero-right">
                            <div className="hero-img-box">
                                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop&fp-y=0.2" alt="Desi" />
                            </div>
                            <div className="hero-tag-float">
                                <strong>40+</strong>
                                Projects delivered
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="ticker">
                <div className="ticker-inner">
                    <span>UI Design</span><span>·</span><span>UX Research</span><span>·</span>
                    <span>Prototyping</span><span>·</span><span>Design Systems</span><span>·</span>
                    <span>Figma</span><span>·</span><span>Framer</span><span>·</span>
                    <span>User Testing</span><span>·</span><span>Wireframing</span><span>·</span>
                    <span>UI Design</span><span>·</span><span>UX Research</span><span>·</span>
                    <span>Prototyping</span><span>·</span><span>Design Systems</span><span>·</span>
                    <span>Figma</span><span>·</span><span>Framer</span><span>·</span>
                    <span>User Testing</span><span>·</span><span>Wireframing</span><span>·</span>
                </div>
            </div>

            <div id="about" className="section-full">
                <div className="section">
                    <div className="about-grid">
                        <div className="about-img-col">
                            <div className="about-photo">
                                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop" alt="Desi" />
                            </div>
                        </div>
                        <div className="about-text">
                            <div className="label">About me</div>
                            <h2 className="h2">Thoughtful<br />design <em>thinker</em></h2>
                            <p>I'm a UI/UX Designer passionate about creating experiences that feel both effortless and beautiful. My work sits at the intersection of aesthetics and functionality.</p>
                            <p>I specialize in design systems, user research, and translating complex problems into simple, elegant digital solutions.</p>
                            <div className="about-skills-grid">
                                <div className="about-skill">Figma</div>
                                <div className="about-skill">Adobe XD</div>
                                <div className="about-skill">Framer</div>
                                <div className="about-skill">Sketch</div>
                                <div className="about-skill">Prototyping</div>
                                <div className="about-skill">User Research</div>
                                <div className="about-skill">HTML / CSS</div>
                                <div className="about-skill">Design Systems</div>
                            </div>
                            <a href="#" className="cta-primary" style={{ display: 'inline-block' }}>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolio" className="section-full">
                <div className="section">
                    <div className="work-header">
                        <div>
                            <div className="label">Selected work</div>
                            <h2 className="h2">Featured <em>Projects</em></h2>
                        </div>
                        <a href="#" className="work-link">All projects →</a>
                    </div>
                    <div className="work-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="work-card">
                                <div className="work-img"><span className="work-num">{project.id}</span></div>
                                <div className="work-card-cat">{project.category}</div>
                                <div className="work-card-title">{project.title}</div>
                                <div className="work-card-desc">{project.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="services" className="section-full" style={{ background: 'var(--off)' }}>
                <div className="section">
                    <div className="services-two-col">
                        <div className="services-side">
                            <div className="label">What I offer</div>
                            <h2 className="h2">Design <em>Services</em></h2>
                            <p>I provide end-to-end design solutions that are thoughtful, precise, and built to scale. From research to final handoff.</p>
                        </div>
                        <div className="services-list">
                            {services.map((service) => (
                                <div key={service.id} className="service-row">
                                    <span className="service-n">{service.number}</span>
                                    <div>
                                        <div className="service-info-title">{service.title}</div>
                                        <div className="service-info-desc">{service.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div id="experience" className="section-full">
                <div className="section">
                    <div className="label">Career</div>
                    <h2 className="h2">Work <em>Experience</em></h2>
                    <table className="exp-table">
                        <tbody>
                            {experiences.map((exp) => (
                                <tr key={exp.id}>
                                    <td className="td-period">{exp.period}</td>
                                    <td>
                                        <div className="td-role">{exp.role}</div>
                                        <div className="td-company">{exp.company}</div>
                                    </td>
                                    <td className="td-desc">{exp.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="testimonials" className="section-full">
                <div className="section">
                    <div className="label">Kind words</div>
                    <h2 className="h2">Client <em>Testimonials</em></h2>
                    <div className="test-grid-4">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="test-cell">
                                <div className="test-stars-blue">{'★'.repeat(testimonial.rating)}</div>
                                <p className="test-text-sm">"{testimonial.quote}"</p>
                                <div className="test-n">{testimonial.name}</div>
                                <div className="test-c">{testimonial.company}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="contact" className="section-full">
                <div className="section">
                    <div className="contact-grid">
                        <div className="contact-left-info">
                            <div className="label">Get in touch</div>
                            <h2 className="h2">Let's work <em>together</em></h2>
                            <p>Have a project in mind? I'd love to hear from you. Let's create something your users will love.</p>
                            <div className="contact-detail-row">
                                <span className="contact-detail-key">Email</span>
                                <span className="contact-detail-value">hello@desi.design</span>
                            </div>
                            <div className="contact-detail-row">
                                <span className="contact-detail-key">Location</span>
                                <span className="contact-detail-value">Bandung, Indonesia</span>
                            </div>
                            <div className="contact-detail-row">
                                <span className="contact-detail-key">Social</span>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="#" style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>Dribbble</a>
                                    <a href="#" style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>LinkedIn</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-col">
                            <form onSubmit={handleSubmit}>
                                <div className="form-field">
                                    <label>Name</label>
                                    <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Project type</label>
                                    <input type="text" name="projectType" placeholder="What are you working on?" value={formData.projectType} onChange={handleInputChange} />
                                </div>
                                <div className="form-field">
                                    <label>Message</label>
                                    <textarea rows={5} name="message" placeholder="Tell me more..." value={formData.message} onChange={handleInputChange}></textarea>
                                </div>
                                <button type="submit" className="form-submit">Send message →</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="footer-brand">Desi</div>
                <div className="footer-links">
                    <a onClick={() => scrollToSection('portfolio')}>Work</a>
                    <a onClick={() => scrollToSection('about')}>About</a>
                    <a href="#">Dribbble</a>
                    <a href="#">LinkedIn</a>
                    <a onClick={() => scrollToSection('contact')}>Contact</a>
                </div>
            </footer>
        </>
    );
}