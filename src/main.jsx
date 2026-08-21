import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Check, ChevronDown, Menu, MoveRight, Phone, ShieldCheck, X } from 'lucide-react';
import './styles.css';

// Content and images live here so they can be replaced without touching the layout.
const site = {
  phone: '+91 98765 43210',
  email: 'hello@neetaaluminium.com',
  enquiryEmail: 'hello@neetaaluminium.com', // Replace with the mailbox that should receive website enquiries.
  paymentUrl: '', // Add a Razorpay/Stripe payment link here to accept live payments.
  projects: [
    { title: 'Quiet luxury, bandra', type: 'Residence', img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85' },
    { title: 'House of daylight', type: 'Villa', img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85' },
    { title: 'The open office', type: 'Workspace', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85' },
  ]
};
const logoUrl = `${import.meta.env.BASE_URL}assets/neeta-aluminium-logo.jpeg`;

function App() {
  const [enquiry, setEnquiry] = useState(false);
  const [payment, setPayment] = useState(false);
  const [menu, setMenu] = useState(false);
  return <>
    <header>
      <a className="brand" href="#top" aria-label="Neeta Aluminium home"><img src={logoUrl} /></a>
      <nav className={menu ? 'open' : ''}>
        <a href="#solutions">Solutions</a><a href="#projects">Projects</a><a href="#process">Our process</a>
        <button className="nav-pay" onClick={() => setPayment(true)}>Make a payment <ArrowUpRight size={15}/></button>
      </nav>
      <button className="menu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      <button className="header-cta" onClick={() => setEnquiry(true)}>Start a project <ArrowUpRight size={16}/></button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Architectural aluminium · Mumbai</p>
          <h1>Spaces that<br/><em>open up.</em></h1>
          <p className="intro">Precision-crafted aluminium interiors for homes, hospitality and workspaces made to feel distinctly yours.</p>
          <div className="hero-actions"><button className="pill dark" onClick={() => setEnquiry(true)}>Start your enquiry <MoveRight size={17}/></button><a className="text-link" href="#projects">Explore our work <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="hero-art">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90" alt="Modern interior with aluminium and glass details" />
          <div className="art-mark">N<br/>A</div><span className="art-caption">TAILORED METALWORK / 2026</span>
          <div className="hero-note"><span>01</span><p>Designing<br/>the divide away.</p></div>
        </div>
      </section>

      <section className="marquee" aria-label="Neeta Aluminium promise"><div><span>FRAME THE LIGHT</span><i>✳</i><span>LIVE WITHOUT LIMITS</span><i>✳</i><span>FRAME THE LIGHT</span><i>✳</i><span>LIVE WITHOUT LIMITS</span></div></section>

      <section className="statement"><p className="eyebrow">Built around your life</p><h2>Let light in.<br/>Keep everything <em>else</em> out.</h2><p className="statement-copy">From slim-profile partitions to finely detailed wardrobes, we create the elements that quietly hold a space together.</p></section>

      <section id="solutions" className="solutions">
        <div className="section-head"><p className="eyebrow">What we shape</p><h2>Made for the way<br/>you move through a room.</h2></div>
        <div className="solution-grid">
          <article className="solution big"><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"/><b className="frame-line"/><div><span>01</span><h3>Glass partitions</h3><p>Define a room without dimming it.</p></div></article>
          <article className="solution"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"/><div><span>02</span><h3>Modular wardrobes</h3><p>Storage with a considered point of view.</p></div></article>
          <article className="solution"><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"/><div><span>03</span><h3>Doors & windows</h3><p>Performance, framed beautifully.</p></div></article>
        </div>
      </section>

      <section id="projects" className="projects"><div className="projects-title"><p className="eyebrow">Selected work</p><h2>Everyday, elevated.</h2><a href="#enquire" onClick={(e)=>{e.preventDefault();setEnquiry(true)}}>See all projects <ArrowUpRight size={16}/></a></div><div className="project-track">{site.projects.map((p, i)=><article className="project" key={p.title}><img src={p.img} alt={p.title}/><div><span>{String(i+1).padStart(2,'0')} · {p.type}</span><h3>{p.title}</h3></div></article>)}</div></section>

      <section id="process" className="process"><div><p className="eyebrow">A precise process</p><h2>Good design has<br/>nothing to hide.</h2></div><ol>{[['Listen','A conversation about your space, needs and imagination.'],['Design','Material, finish and detail refined into a clear vision.'],['Craft','Meticulous fabrication by specialists who care about the millimetre.'],['Install','A crisp, respectful installation—and a space ready to live in.']].map(([t,d],i)=><li key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div><ChevronDown size={19}/></li>)}</ol></section>

      <section className="cta"><p className="eyebrow">Your space, next</p><h2>Have a room<br/>in <em>mind?</em></h2><button className="pill light" onClick={() => setEnquiry(true)}>Tell us about it <MoveRight size={17}/></button></section>
    </main>
    <footer><img src={logoUrl} alt="Neeta Aluminium"/><div><a href={`tel:${site.phone.replaceAll(' ','')}`}><Phone size={14}/>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a></div><p>© {new Date().getFullYear()} Neeta Aluminium. Crafted with purpose.</p></footer>
    {enquiry && <Enquiry onClose={() => setEnquiry(false)}/>} {payment && <Payment onClose={() => setPayment(false)}/>} 
  </>;
}

function Enquiry({onClose}) { const [sent,setSent]=useState(false); const submit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);const body=`Name: ${f.get('name')}\nPhone: ${f.get('phone')}\nSolution: ${f.get('solution')}\n\nDetails: ${f.get('details')||'—'}`;window.location.href=`mailto:${site.enquiryEmail}?subject=${encodeURIComponent('New website enquiry')}&body=${encodeURIComponent(body)}`;setSent(true)}; return <div className="overlay"><section className="modal"><button className="close" onClick={onClose}><X/></button>{sent?<div className="success"><Check/><h2>Thank you.</h2><p>Your enquiry is ready to send in your email app. Our design team will be in touch shortly.</p><button className="pill dark" onClick={onClose}>Back to site</button></div>:<><p className="eyebrow">Start a conversation</p><h2>Tell us about<br/>your space.</h2><form onSubmit={submit}><label>Your name<input name="name" required placeholder="Name"/></label><label>Phone number<input name="phone" required type="tel" placeholder="+91"/></label><label>What are you planning?<select name="solution" defaultValue=""><option value="" disabled>Select a solution</option><option>Glass partitions</option><option>Wardrobes</option><option>Doors & windows</option><option>Something else</option></select></label><label>A few details<textarea name="details" placeholder="Location, timeline, anything useful…"/></label><button className="pill dark" type="submit">Send enquiry <MoveRight size={17}/></button></form></>}</section></div> }
function Payment({onClose}) { const [done,setDone]=useState(false); const pay=e=>{e.preventDefault(); if(site.paymentUrl) window.location.href=site.paymentUrl; else setDone(true)}; return <div className="overlay"><section className="modal payment"><button className="close" onClick={onClose}><X/></button>{done?<div className="success"><ShieldCheck/><h2>Payment request received.</h2><p>Thanks—this demo confirms your payment request. Connect your Razorpay or Stripe URL in <code>site.paymentUrl</code> to accept live payment.</p><button className="pill dark" onClick={onClose}>Done</button></div>:<><p className="eyebrow">Secure payment</p><h2>Settle an<br/><em>invoice.</em></h2><form onSubmit={pay}><label>Invoice number<input required placeholder="e.g. NA-1024"/></label><label>Amount (₹)<input required type="number" min="1" placeholder="0.00"/></label><label>Email for receipt<input required type="email" placeholder="you@email.com"/></label><button className="pill dark" type="submit"><ShieldCheck size={17}/> Continue to payment</button><small>Secure payment powered by your connected payment provider.</small></form></>}</section></div> }
createRoot(document.getElementById('root')).render(<App/>);
