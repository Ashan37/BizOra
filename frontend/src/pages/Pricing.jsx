import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for small teams',
    monthlyPrice: 29,
    annualPrice: 24,
    color: '#22D3EE', // cyan-400
    features: [
      { text: 'Up to 5 team members', included: true },
      { text: 'Real-time analytics dashboard', included: true },
      { text: '10 custom reports per month', included: true },
      { text: 'Email support', included: true },
      { text: 'Basic integrations', included: true },
      { text: 'Advanced automations', included: false },
      { text: 'Priority support', included: false },
      { text: 'Custom API access', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For growing businesses',
    monthlyPrice: 79,
    annualPrice: 65,
    color: '#06B6D4', // cyan-500
    popular: true,
    features: [
      { text: 'Up to 25 team members', included: true },
      { text: 'Real-time analytics dashboard', included: true },
      { text: 'Unlimited custom reports', included: true },
      { text: 'Priority email & chat support', included: true },
      { text: 'Advanced integrations', included: true },
      { text: 'Advanced automations', included: true },
      { text: 'Custom branding', included: true },
      { text: 'Custom API access', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For large organizations',
    monthlyPrice: 199,
    annualPrice: 165,
    color: '#0891B2', // cyan-600
    features: [
      { text: 'Unlimited team members', included: true },
      { text: 'Real-time analytics dashboard', included: true },
      { text: 'Unlimited custom reports', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Enterprise integrations', included: true },
      { text: 'Advanced automations', included: true },
      { text: 'Custom branding', included: true },
      { text: 'Custom API access', included: true },
      { text: 'SLA guarantee', included: true },
      { text: 'On-premise deployment', included: true },
    ],
  },
]

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState(null)

  return (
    <>
      <Navbar />
      
      <main className="pricing-root">
        <style>{`
          .pricing-root{min-height:100vh;position:relative;overflow:hidden;font-family:Inter,ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial}
          
          /* Animated gradient background */
          .pricing-root:before{content:'';position:fixed;inset:0;z-index:-2;background:linear-gradient(135deg,#ECFEFF 0%,#22D3EE 25%,#06B6D4 50%,#0891B2 75%,#0E7490 100%);background-size:400% 400%;animation:gradientFlow 15s ease infinite}
          @keyframes gradientFlow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
          
          /* Floating shapes */
          .pricing-root:after{content:'';position:fixed;width:500px;height:500px;background:radial-gradient(circle,rgba(34,211,238,0.15) 0%,transparent 70%);border-radius:50%;top:10%;right:5%;animation:float 20s ease-in-out infinite;z-index:-1;filter:blur(60px)}
          @keyframes float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-50px) rotate(180deg)}}
          
          .pricing-container{max-width:1200px;margin:0 auto;padding:80px 20px}
          
          /* Header section */
          .pricing-header{text-align:center;margin-bottom:60px}
          .pricing-title{font-size:clamp(32px,5vw,56px);font-weight:800;background:linear-gradient(135deg,#0891B2,#06B6D4,#22D3EE);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin:0 0 16px}
          .pricing-subtitle{font-size:clamp(16px,2vw,20px);color:rgba(0,0,0,0.7);max-width:600px;margin:0 auto 40px}
          
          /* Billing toggle */
          .billing-toggle{display:inline-flex;align-items:center;gap:16px;background:rgba(255,255,255,0.9);backdrop-filter:blur(10px);padding:8px 24px;border-radius:999px;box-shadow:0 4px 20px rgba(0,0,0,0.08);border:1px solid rgba(6,182,212,0.2)}
          .toggle-label{font-weight:600;color:#0891B2;transition:opacity .3s}
          .toggle-label.inactive{opacity:0.4}
          .toggle-switch{position:relative;width:56px;height:28px;background:#E0F2FE;border-radius:999px;cursor:pointer;transition:background .3s}
          .toggle-switch.active{background:#06B6D4}
          .toggle-knob{position:absolute;top:3px;left:3px;width:22px;height:22px;background:white;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,0.2);transition:transform .3s cubic-bezier(.4,0,.2,1)}
          .toggle-switch.active .toggle-knob{transform:translateX(28px)}
          .savings-badge{display:inline-block;margin-left:8px;padding:4px 10px;background:linear-gradient(135deg,#22D3EE,#06B6D4);color:white;font-size:12px;font-weight:700;border-radius:999px;box-shadow:0 2px 8px rgba(6,182,212,0.3)}
          
          /* Pricing cards grid */
          .pricing-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px;margin-top:48px}
          
          .pricing-card{position:relative;background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);border-radius:24px;padding:40px 32px;box-shadow:0 10px 40px rgba(0,0,0,0.08);border:2px solid transparent;transition:all .4s cubic-bezier(.4,0,.2,1);cursor:pointer}
          .pricing-card:hover{transform:translateY(-12px) scale(1.02);box-shadow:0 20px 60px rgba(6,182,212,0.25)}
          .pricing-card.popular{border-color:#06B6D4;box-shadow:0 20px 60px rgba(6,182,212,0.3)}
          .pricing-card.popular:before{content:'';position:absolute;inset:-2px;background:linear-gradient(135deg,#22D3EE,#06B6D4,#0891B2);border-radius:24px;z-index:-1;opacity:0.1}
          
          .popular-badge{position:absolute;top:-16px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#22D3EE,#06B6D4);color:white;padding:6px 20px;border-radius:999px;font-weight:700;font-size:13px;box-shadow:0 4px 12px rgba(6,182,212,0.4);letter-spacing:0.5px}
          
          .plan-header{text-align:center;margin-bottom:32px}
          .plan-icon{width:64px;height:64px;margin:0 auto 16px;border-radius:16px;display:grid;place-items:center;background:linear-gradient(135deg,rgba(34,211,238,0.1),rgba(6,182,212,0.05));transition:transform .3s}
          .pricing-card:hover .plan-icon{transform:rotate(5deg) scale(1.1)}
          .plan-name{font-size:28px;font-weight:700;color:#0F172A;margin:0 0 8px}
          .plan-tagline{color:rgba(0,0,0,0.6);font-size:14px;margin:0 0 24px}
          
          .plan-price{display:flex;align-items:baseline;justify-content:center;gap:8px;margin-bottom:8px}
          .currency{font-size:24px;font-weight:600;color:#06B6D4}
          .amount{font-size:56px;font-weight:800;background:linear-gradient(135deg,#0891B2,#06B6D4);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;line-height:1}
          .period{font-size:18px;color:rgba(0,0,0,0.5);font-weight:500}
          .annual-savings{text-align:center;font-size:13px;color:#059669;font-weight:600;margin-bottom:24px;min-height:20px}
          
          .cta-button{width:100%;padding:16px;background:linear-gradient(135deg,#22D3EE,#06B6D4,#0891B2);color:white;border:none;border-radius:12px;font-weight:700;font-size:16px;cursor:pointer;transition:all .3s;box-shadow:0 4px 16px rgba(6,182,212,0.3);position:relative;overflow:hidden}
          .cta-button:before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,transparent,rgba(255,255,255,0.2),transparent);transform:translateX(-100%);transition:transform .6s}
          .cta-button:hover:before{transform:translateX(100%)}
          .cta-button:hover{transform:scale(1.05);box-shadow:0 8px 24px rgba(6,182,212,0.4)}
          
          .features-list{margin-top:32px;display:flex;flex-direction:column;gap:14px}
          .feature-item{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:rgba(0,0,0,0.8);line-height:1.5}
          .feature-item.disabled{opacity:0.35}
          .feature-icon{flex-shrink:0;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-weight:700;font-size:14px}
          .feature-icon.check{background:linear-gradient(135deg,#22D3EE,#06B6D4);color:white}
          .feature-icon.cross{background:#E5E7EB;color:#9CA3AF}
          
          /* FAQ section */
          .faq-section{margin-top:100px;max-width:800px;margin-left:auto;margin-right:auto}
          .faq-title{text-align:center;font-size:36px;font-weight:800;color:#0891B2;margin-bottom:48px}
          .faq-item{background:rgba(255,255,255,0.9);backdrop-filter:blur(10px);border-radius:16px;padding:24px 28px;margin-bottom:16px;box-shadow:0 4px 16px rgba(0,0,0,0.06);border:1px solid rgba(6,182,212,0.1)}
          .faq-question{font-weight:700;font-size:18px;color:#0F172A;margin:0 0 12px}
          .faq-answer{color:rgba(0,0,0,0.7);margin:0;line-height:1.6}
          
          @media (max-width:768px){
            .pricing-grid{grid-template-columns:1fr;gap:24px}
            .pricing-container{padding:60px 16px}
          }
        `}</style>

        <div className="pricing-container">
          {/* Header */}
          <header className="pricing-header">
            <h1 className="pricing-title">Simple, Transparent Pricing</h1>
            <p className="pricing-subtitle">
              Choose the perfect plan for your team. All plans include a 14-day free trial.
            </p>
            
            {/* Billing toggle */}
            <div className="billing-toggle">
              <span className={`toggle-label ${!isAnnual ? '' : 'inactive'}`}>Monthly</span>
              <div 
                className={`toggle-switch ${isAnnual ? 'active' : ''}`}
                onClick={() => setIsAnnual(!isAnnual)}
                role="switch"
                aria-checked={isAnnual}
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && setIsAnnual(!isAnnual)}
              >
                <div className="toggle-knob" />
              </div>
              <span className={`toggle-label ${isAnnual ? '' : 'inactive'}`}>
                Annual
                {isAnnual && <span className="savings-badge">Save 20%</span>}
              </span>
            </div>
          </header>

          {/* Pricing cards */}
          <div className="pricing-grid">
            {pricingPlans.map((plan) => {
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
              const savings = isAnnual ? ((plan.monthlyPrice - plan.annualPrice) * 12) : 0
              
              return (
                <article 
                  key={plan.id}
                  className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  aria-labelledby={`plan-${plan.id}`}
                >
                  {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
                  
                  <div className="plan-header">
                    <div className="plan-icon" style={{background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}05)`}}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z" fill={plan.color} opacity="0.3"/>
                        <path d="M9 12l2 2 4-4" stroke={plan.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <h2 id={`plan-${plan.id}`} className="plan-name">{plan.name}</h2>
                    <p className="plan-tagline">{plan.tagline}</p>
                    
                    <div className="plan-price">
                      <span className="currency">$</span>
                      <span className="amount">{price}</span>
                      <span className="period">/mo</span>
                    </div>
                    
                    <div className="annual-savings">
                      {isAnnual && savings > 0 && `Save $${savings}/year`}
                    </div>
                    
                    <button className="cta-button" aria-label={`Get started with ${plan.name} plan`}>
                      Get Started
                    </button>
                  </div>
                  
                  <ul className="features-list" role="list">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={`feature-item ${!feature.included ? 'disabled' : ''}`}>
                        <span className={`feature-icon ${feature.included ? 'check' : 'cross'}`}>
                          {feature.included ? '✓' : '×'}
                        </span>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>

          {/* FAQ Section */}
          <section className="faq-section" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="faq-title">Frequently Asked Questions</h2>
            
            <div className="faq-item">
              <h3 className="faq-question">Can I change plans later?</h3>
              <p className="faq-answer">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">What payment methods do you accept?</h3>
              <p className="faq-answer">
                We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for Enterprise plans.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Is there a free trial?</h3>
              <p className="faq-answer">
                Absolutely! All plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">What happens after the trial?</h3>
              <p className="faq-answer">
                After your trial ends, you'll be charged based on your selected plan. You can cancel anytime before the trial ends with no charges.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Do you offer refunds?</h3>
              <p className="faq-answer">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund within 30 days of purchase.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  )
}

export default Pricing
