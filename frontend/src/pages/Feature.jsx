import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const features = [
  {
    id: 1,
    title: 'Real-time Analytics',
    desc: 'Stream live metrics, alerts, and insights with ultra low latency.',
    // cyan-500
    color: '#06B6D4',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3 13h4v8H3zM10 7h4v14h-4zM17 3h4v18h-4z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Smart Automations',
    desc: 'Automate repetitive workflows with configurable rules and AI suggestions.',
    // cyan-400
    color: '#22D3EE',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2l2 4 4 .5-3 2 1 4-3-2-3 2 1-4-3-2 4-.5L12 2z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Custom Dashboards',
    desc: 'Build pixel-perfect dashboards with drag & drop widgets and themes.',
    // cyan-600
    color: '#0891B2',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3 3h8v8H3zM13 3h8v5h-8zM13 10h8v11h-8zM3 11h8v7H3z" fill="currentColor"/>
      </svg>
    ),
  },
]

const Feature = () => {
  const [copied, setCopied] = useState(null)

  const copyToClipboard = async (hex, id) => {
    try {
      await navigator.clipboard.writeText(hex)
      setCopied(id)
      setTimeout(() => setCopied(null), 1600)
    } catch (e) {
      
      const ta = document.createElement('textarea')
      ta.value = hex
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(id)
      setTimeout(() => setCopied(null), 1600)
    }
  }

  return (
    <>
    <Navbar/>
    <main className="feature-root" aria-labelledby="feature-heading">
      <style>{`
        .feature-root{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:48px 20px;font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial}
        /* animated gradient background */
  /* background uses cyan shades from About.jsx for consistency */
  .feature-root:before{content:'';position:fixed;inset:0;z-index:-2;background:linear-gradient(120deg,#ECFEFF 0%, #22D3EE 30%, #06B6D4 60%, #0891B2 90%);background-size:300% 300%;animation:gradShift 12s ease infinite;filter:blur(36px);transform:rotate(2deg)}
        @keyframes gradShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        /* content container */
        .feature-card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;max-width:1100px;width:100%}
        @media (max-width:960px){.feature-card-grid{grid-template-columns:repeat(2,1fr)}}
        @media (max-width:640px){.feature-card-grid{grid-template-columns:1fr;padding:0 8px}}
        .feature-hero{grid-column:span 3;background:rgba(255,255,255,0.06);backdrop-filter:blur(6px);border-radius:12px;padding:28px;box-shadow:0 8px 30px rgba(2,6,23,0.4);color:#fff;border:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:18px}
        @media (max-width:960px){.feature-hero{grid-column:span 2}}
        @media (max-width:640px){.feature-hero{flex-direction:column;align-items:flex-start}}
        .hero-title{font-size:clamp(20px,3.2vw,28px);font-weight:700;margin:0}
        .hero-sub{opacity:0.9;margin:6px 0 0}
        .cards{display:grid;grid-template-columns:1fr;gap:18px;width:100%}
        .feature-card{background:linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01));padding:18px;border-radius:12px;display:flex;align-items:flex-start;gap:12px;border:1px solid rgba(255,255,255,0.04);transition:transform .28s cubic-bezier(.2,.9,.2,1),box-shadow .28s;cursor:default}
        .feature-card:focus-within,.feature-card:hover{transform:translateY(-6px);box-shadow:0 10px 30px rgba(2,6,23,0.45)}
        .feature-icon{width:56px;height:56px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0}
        .feature-body{flex:1}
        .feature-title-sm{font-weight:600;margin:0 0 6px;color:#fff}
        .feature-desc{color:rgba(255,255,255,0.85);margin:0;font-size:14px;line-height:1.45}
        .color-row{margin-top:12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap}
        .chip{display:inline-flex;align-items:center;gap:8px;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.03);color:#fff;font-weight:600;font-size:13px}
        .swatch{width:18px;height:18px;border-radius:6px;box-shadow:inset 0 -2px 6px rgba(0,0,0,0.25)}
        .copy-btn{background:transparent;border:0;color:inherit;cursor:pointer;padding:6px 8px;border-radius:8px;font-weight:600}
        .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
        .toast{position:fixed;right:18px;bottom:18px;background:rgba(0,0,0,0.6);color:#fff;padding:10px 14px;border-radius:10px;backdrop-filter:blur(4px);font-weight:600}
      `}</style>

      <div className="feature-card-grid">
        <section className="feature-hero" aria-labelledby="feature-heading">
          <div style={{display:'flex',alignItems:'center',gap:16}}>
            <div style={{width:72,height:72,display:'grid',placeItems:'center',borderRadius:14,background:'linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))',color:'#fff'}} aria-hidden>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M3 13h4v8H3zM10 7h4v14h-4zM17 3h4v18h-4z" fill="currentColor"/></svg>
            </div>
            <div>
              <h1 id="feature-heading" className="hero-title">Powerful features to grow your business</h1>
              <p className="hero-sub">Fast, beautiful and accessible components with a modern visual language — built for scale.</p>
            </div>
          </div>
        </section>

        {features.map((f) => (
          <article
            key={f.id}
            className="feature-card"
            tabIndex={0}
            aria-labelledby={`feature-${f.id}-title`}
            role="group"
          >
            <div className="feature-icon" style={{background: `linear-gradient(180deg, ${f.color}, rgba(0,0,0,0.12))`}}>
              <div style={{color:'white'}}>{f.icon}</div>
            </div>
            <div className="feature-body">
              <h3 id={`feature-${f.id}-title`} className="feature-title-sm">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>

              <div className="color-row" aria-hidden={false}>
                <div className="chip" title={f.color}>
                  <span className="swatch" style={{background: f.color}} aria-hidden></span>
                  <span style={{fontFeatureSettings:'"tnum" 1'}}>{f.color.toUpperCase()}</span>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(f.color, f.id)}
                  aria-label={`Copy ${f.color} hex code`}
                >
                  {copied === f.id ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {copied && <div className="toast" role="status">Color copied</div>}
    </main>
    <Footer/>
    </>
    
  )
}

export default Feature
