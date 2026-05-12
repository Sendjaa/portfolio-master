"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import './globals.css';

interface FormData {
    name: string;
    email: string;
    budget: string;
    message: string;
}

interface Project {
    id: number;
    category: string;
    title: string;
    description: string;
    bgColor: string;
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

export default function Portfolio3() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        budget: '',
        message: ''
    });

    const projects: Project[] = [
        { 
            id: 1, 
            category: 'E-Commerce', 
            title: 'Platform Redesign', 
            description: 'Complete mobile & web redesign for 1M+ users',
            bgColor: 'var(--rose-light)'
        },
        { 
            id: 2, 
            category: 'SaaS', 
            title: 'Dashboard Design', 
            description: 'Data visualization & admin panel for enterprise',
            bgColor: 'var(--green-light)'
        },
        { 
            id: 3, 
            category: 'Mobile', 
            title: 'Social App UI', 
            description: 'Rich animations & microinteraction design',
            bgColor: 'var(--sand)'
        }
    ];

    const services: Service[] = [
        { id: 1, number: '01', title: 'UI Design', description: 'Beautiful, functional interfaces that delight users and drive business results.' },
        { id: 2, number: '02', title: 'Prototyping', description: 'Interactive prototypes and animations that communicate ideas powerfully.' },
        { id: 3, number: '03', title: 'UX Research', description: 'User insights and usability testing to validate decisions with real data.' },
        { id: 4, number: '04', title: 'Design Systems', description: 'Scalable component libraries that keep teams consistent at any scale.' }
    ];

    const experiences: Experience[] = [
        { 
            id: 1, 
            period: '2021 — Present', 
            role: 'Senior Product Designer', 
            company: 'Tech Company Inc.', 
            description: 'Led design for multiple product lines, managed a team of 5, established design systems used by 30+ engineers.' 
        },
        { 
            id: 2, 
            period: '2019 — 2021', 
            role: 'UI/UX Designer', 
            company: 'Digital Agency Pro', 
            description: 'Designed interfaces for 20+ client projects across fintech, healthcare, and e-commerce.' 
        },
        { 
            id: 3, 
            period: '2018 — 2019', 
            role: 'Freelance Designer', 
            company: 'Self-Employed', 
            description: 'Created designs for early-stage startups and small businesses across Southeast Asia.' 
        },
        { 
            id: 4, 
            period: 'Education', 
            role: 'B.Des Visual Communication', 
            company: 'Design University', 
            description: 'Graduated with honors. Specialized in human-computer interaction and visual storytelling.',
            specialStyle: true
        }
    ];

    const testimonials: Testimonial[] = [
        { 
            id: 1, 
            name: 'Sarah Johnson', 
            company: 'Tech Startup', 
            quote: 'Desi is an exceptional designer who understood our vision perfectly and delivered work that truly transformed our product.', 
            rating: 5 
        },
        { 
            id: 2, 
            name: 'Michael Chen', 
            company: 'Digital Agency', 
            quote: 'Professional, creative, and always on time. A true asset to any project. We have collaborated on 5 projects now.', 
            rating: 5 
        },
        { 
            id: 3, 
            name: 'Emma Williams', 
            company: 'E-Commerce Brand', 
            quote: 'The design transformation exceeded all expectations. Our conversion rate improved by 40% after the redesign.', 
            rating: 5 
        }
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
                <title>Desi — Designer · V2 Editorial</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>

            <nav>
                <div className="logo">Desi</div>
                <ul>
                    <li><a onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a onClick={() => scrollToSection('portfolio')}>Work</a></li>
                    <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                    <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                </ul>
                <a href="mailto:hello@desi.design" className="nav-cta">Say Hello</a>
            </nav>

            <section id="home">
                <div className="hero-bg-circle"></div>
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span> Available for projects · 2025
                    </div>
                    <h1 className="hero-h1">Creating<br/><em>beautiful</em><br/>digital worlds</h1>
                    <p className="hero-sub">I'm Desi — a UI/UX Designer with 5+ years crafting elegant, user-centered digital experiences that feel as good as they look.</p>
                    <div className="hero-actions">
                        <a onClick={() => scrollToSection('portfolio')} className="btn-dark">See my work</a>
                        <a onClick={() => scrollToSection('contact')} className="btn-ghost">Let's talk →</a>
                    </div>
                </div>
                <div className="hero-img-wrap">
                    <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop" alt="Desi portrait" />
                </div>
            </section>

            <div className="marquee-section">
                <div className="marquee-inner">
                    <span>UI Design</span><span className="marquee-sep">·</span>
                    <span>UX Research</span><span className="marquee-sep">·</span>
                    <span>Prototyping</span><span className="marquee-sep">·</span>
                    <span>Design Systems</span><span className="marquee-sep">·</span>
                    <span>Figma</span><span className="marquee-sep">·</span>
                    <span>Framer</span><span className="marquee-sep">·</span>
                    <span>User Testing</span><span className="marquee-sep">·</span>
                    <span>UI Design</span><span className="marquee-sep">·</span>
                    <span>UX Research</span><span className="marquee-sep">·</span>
                    <span>Prototyping</span><span className="marquee-sep">·</span>
                    <span>Design Systems</span><span className="marquee-sep">·</span>
                    <span>Figma</span><span className="marquee-sep">·</span>
                    <span>Framer</span><span className="marquee-sep">·</span>
                    <span>User Testing</span><span className="marquee-sep">·</span>
                </div>
            </div>

            <section id="about" className="section">
                <div className="about-inner">
                    <div className="about-img">
                        <div className="about-img-frame">
                            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop&fp-y=0.3" alt="Desi" />
                        </div>
                        <div className="about-badge">
                            <strong>5+</strong>
                            Years of Experience
                        </div>
                    </div>
                    <div className="about-text">
                        <div className="label-sm">About me</div>
                        <h2 className="heading-xl">Passionate<br/><em>design</em> thinker</h2>
                        <p>I'm a UI/UX Designer with a deep love for creating experiences that feel both beautiful and intuitive. My journey started with curiosity about how people interact with technology.</p>
                        <p>I specialize in end-to-end design systems, user research, and translating complex ideas into simple, elegant interfaces that delight users.</p>
                        <div className="tags">
                            <span className="tag">Figma</span><span className="tag">Adobe XD</span><span className="tag">Framer</span>
                            <span className="tag">Sketch</span><span className="tag">React</span><span className="tag">Prototyping</span>
                        </div>
                        <a href="#" className="btn-dark" style={{display: 'inline-block', marginTop: '2rem'}}>Download CV →</a>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="section">
                <div className="port-intro">
                    <div>
                        <div className="label-sm">Selected work</div>
                        <h2 className="heading-xl">Featured <em>Projects</em></h2>
                    </div>
                    <a href="#" className="port-link-all">View all →</a>
                </div>
                <div className="port-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="port-card">
                            <div className="port-thumb" style={{ background: project.bgColor }}>
                                <span className="port-thumb-num">0{project.id}</span>
                            </div>
                            <div className="port-card-cat">{project.category}</div>
                            <div className="port-card-title">{project.title}</div>
                            <div className="port-card-desc">{project.description}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="services" className="section">
                <div className="label-sm">What I do</div>
                <h2 className="heading-xl">My <em>Services</em></h2>
                <div className="services-list">
                    {services.map((service) => (
                        <div key={service.id} className="service-row">
                            <span className="service-row-num">{service.number}</span>
                            <span className="service-row-title">{service.title}</span>
                            <span className="service-row-desc">{service.description}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section id="experience" className="section">
                <div className="label-sm">Career path</div>
                <h2 className="heading-xl">Work <em>Experience</em></h2>
                <div className="exp-grid">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="exp-card" style={exp.specialStyle ? { background: 'var(--rose-light)' } : {}}>
                            <div className="exp-card-period" style={exp.specialStyle ? { color: 'var(--rose)' } : {}}>{exp.period}</div>
                            <div className="exp-card-role">{exp.role}</div>
                            <div className="exp-card-company" style={exp.specialStyle ? { color: 'var(--rose)' } : {}}>{exp.company}</div>
                            <div className="exp-card-desc">{exp.description}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="testimonials" className="section">
                <div className="label-sm">Kind words</div>
                <h2 className="heading-xl" style={{color: 'var(--cream)'}}>Client <em style={{color: 'var(--rose)'}}>Testimonials</em></h2>
                <div className="test-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="test-card">
                            <div className="test-stars">{'★'.repeat(testimonial.rating)}</div>
                            <p className="test-text">"{testimonial.quote}"</p>
                            <div className="test-author-name">{testimonial.name}</div>
                            <div className="test-author-co">{testimonial.company}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className="section">
                <div className="contact-inner">
                    <div className="contact-info">
                        <div className="label-sm">Get in touch</div>
                        <h2 className="heading-xl">Let's work <em>together</em></h2>
                        <p>Have a project in mind? I'd love to hear from you. Let's create something amazing that your users will love.</p>
                        <div className="contact-detail">
                            <div className="contact-detail-label">Email</div>
                            <div className="contact-detail-val">hello@desi.design</div>
                        </div>
                        <div className="contact-detail">
                            <div className="contact-detail-label">Based in</div>
                            <div className="contact-detail-val">Bandung, Indonesia</div>
                        </div>
                        <div className="contact-detail">
                            <div className="contact-detail-label">Social</div>
                            <div style={{display: 'flex', gap: '1rem', marginTop: '0.3rem'}}>
                                <a href="#" style={{fontSize: '0.8rem', color: 'var(--brown)'}}>Dribbble</a>
                                <a href="#" style={{fontSize: '0.8rem', color: 'var(--brown)'}}>LinkedIn</a>
                                <a href="#" style={{fontSize: '0.8rem', color: 'var(--brown)'}}>Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleInputChange} />
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className="field">
                                <label>Budget</label>
                                <input type="text" name="budget" placeholder="Project budget range" value={formData.budget} onChange={handleInputChange} />
                            </div>
                            <div className="field">
                                <label>Message</label>
                                <textarea name="message" rows={5} placeholder="Tell me about your project..." value={formData.message} onChange={handleInputChange}></textarea>
                            </div>
                            <button type="submit" className="btn-submit">Send Message →</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer-logo">Desi</div>
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