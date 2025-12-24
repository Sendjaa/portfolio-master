"use client"

import React, { useState, useEffect } from "react"
import { Mail, Send, User, MessageSquare, Sparkles } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // Simulasi pengiriman
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-24 px-6 bg-white overflow-hidden text-[#0a1f1a]">
      {/* Background Decor - Soft Greens */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4ade80]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4ade80]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white/50 backdrop-blur-md shadow-sm transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Sparkles size={14} className="text-[#10b981]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#10b981] font-bold">Siap Berkolaborasi</span>
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter uppercase transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Hubungi <span className="text-[#10b981] italic font-serif font-light lowercase">Kami.</span>
          </h2>
          
          <p className={`text-[#64748b] max-w-xl mx-auto text-lg leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Punya ide proyek yang luar biasa? Mari kita diskusikan dan bangun sesuatu yang bermakna bersama.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info Side */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">Info Kontak</h3>
              <div className="space-y-4">
                <div className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white transition-all hover:shadow-md border border-transparent hover:border-gray-100">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#10b981] text-white shadow-lg shadow-[#10b981]/20">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Email saya di</p>
                    <p className="font-bold text-[#0a1f1a]">siti@example.com</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Ikuti Perjalanan Saya</p>
                <div className="flex gap-4">
                  {['Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
                    <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest text-[#10b981] hover:text-[#0a1f1a] transition-colors">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 space-y-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 ml-2">Nama Anda</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#10b981] transition-colors" size={18} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-6 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-[#0a1f1a] focus:border-[#10b981] focus:bg-white focus:outline-none transition-all placeholder:text-gray-300 shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 ml-2">Alamat Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#10b981] transition-colors" size={18} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-6 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-[#0a1f1a] focus:border-[#10b981] focus:bg-white focus:outline-none transition-all placeholder:text-gray-300 shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 ml-2">Pesan</label>
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-5 text-gray-300 group-focus-within:text-[#10b981] transition-colors" size={18} />
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full pl-12 pr-6 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-[#0a1f1a] focus:border-[#10b981] focus:bg-white focus:outline-none transition-all min-h-[160px] resize-none placeholder:text-gray-300 shadow-sm"
                  placeholder="Ceritakan tentang proyek Anda..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full group relative overflow-hidden py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all shadow-lg ${
                submitted 
                ? "bg-gray-100 text-[#10b981] cursor-default" 
                : "bg-[#10b981] text-white hover:scale-[1.02] active:scale-[0.98] shadow-[#10b981]/20"
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {submitted ? (
                  <>Pesan Terkirim! <Send size={18} className="animate-bounce" /></>
                ) : (
                  <>Kirim Pesan <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </span>
              {!submitted && (
                <div className="absolute inset-0 bg-[#059669] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}