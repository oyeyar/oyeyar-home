'use client';

import Image from 'next/image';
import { ArrowRight, Mail, Send, Lock } from 'lucide-react';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { SiThreads } from 'react-icons/si';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Facebook',
    icon: FaFacebookF,
    href: 'https://www.facebook.com/oyeyarcom',
  },
  {
    name: 'X',
    icon: FaXTwitter,
    href: 'https://x.com/oyeyarofficial',
  },
  {
    name: 'Threads',
    icon: SiThreads,
    href: 'https://www.threads.com/@oyeyarcom',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    href: 'https://www.youtube.com/@oyeyarcom',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/company/oyeyar',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/oyeyarcom/',
  },
];

export default function Home() {
  return (
    <main className="coming-soon-page">
      <div className="page-content">
        {/* ==================== NAVBAR ==================== */}

        <header className="navbar-wrapper">
          <nav className="navbar glass-panel">
            <Link href="/" className="brand" aria-label="OyeYar home">
              <Image
                src="/images/logo.png"
                alt="OyeYar"
                width={52}
                height={52}
                priority
                className="brand-logo"
              />

              <span className="brand-name">OyeYar</span>
            </Link>

            <div className="navbar-right">
              <span className="follow-label">Follow the journey</span>

              <div className="nav-socials">
                {socialLinks.slice(0, 4).map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.href}
                      aria-label={social.name}
                      className="nav-social-link"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>
        </header>

        {/* ==================== HERO ==================== */}

        <section className="hero-section">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              SOMETHING NEW IS TAKING SHAPE
            </div>

            <h1>
              Building ideas
              <br />
              <span>that deserve to exist.</span>
            </h1>

            <p className="hero-description">
              OyeYar is a place where curiosity becomes creation.
              <br className="desktop-break" />
              We are exploring, building and bringing meaningful ideas to life.
            </p>

            <div className="hero-actions">
              <a href="#notify" className="primary-button">
                Stay in the loop
                <ArrowRight size={18} />
              </a>

              <a href="#journey" className="secondary-button">
                Discover OyeYar
              </a>
            </div>
          </div>
        </section>

        {/* ==================== BRAND STATEMENT ==================== */}

        <section id="journey" className="statement-section">
          <div className="statement-line" />

          <p className="statement-label">THE OYEYAR JOURNEY</p>

          <h2>
            Ideas into products.
            <br />
            <span>Products into impact.</span>
          </h2>

          <p className="statement-description">
            We don&apos;t want to build just for the sake of building.
            <br />
            Every idea starts with curiosity and grows through experimentation.
          </p>
        </section>

        {/* ==================== PHILOSOPHY CARDS ==================== */}

        <section className="philosophy-section">
          <article className="philosophy-card glass-panel">
            <span className="card-number">01</span>

            <h3>Explore</h3>

            <p>
              Curiosity leads the way. We explore ideas, possibilities and new ways of looking at
              things.
            </p>
          </article>

          <article className="philosophy-card glass-panel">
            <span className="card-number">02</span>

            <h3>Build</h3>

            <p>
              Good ideas deserve to leave the notebook. We turn possibilities into products and
              experiences.
            </p>
          </article>

          <article className="philosophy-card glass-panel">
            <span className="card-number">03</span>

            <h3>Impact</h3>

            <p>
              The goal is simple: create things that are useful, meaningful and capable of making a
              difference.
            </p>
          </article>
        </section>

        {/* ==================== EMAIL NOTIFY ==================== */}

        <section id="notify" className="notify-section">
          <div className="notify-card glass-panel">
            <div className="notify-content">
              <div className="small-label">
                <Mail size={15} />
                STAY CONNECTED
              </div>

              <h2>Be the first to know.</h2>

              <p>
                Something new could arrive sooner than you think.
                <br />
                Leave your email and stay connected with OyeYar.
              </p>
            </div>

            <form className="email-form" onSubmit={(event) => event.preventDefault()}>
              <div className="email-input-wrapper">
                <Mail size={18} />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  required
                />
              </div>

              <button type="submit" className="notify-button">
                <span>Keep me updated</span>
                <Send size={17} />
              </button>
            </form>

            <p className="privacy-note">
              <Lock size={15} />
              We respect your privay, No spam, ever. Only updates worth sharing.
            </p>
          </div>
        </section>

        {/* ==================== FOLLOW US ==================== */}

        <section className="follow-section">
          <div className="follow-heading">
            <p className="section-label">FOLLOW THE JOURNEY</p>

            <h2>
              Stay connected
              <span>.</span>
            </h2>

            <p>Follow OyeYar and be part of the journey as new ideas take shape.</p>
          </div>

          <div className="social-grid">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  aria-label={`Follow OyeYar on ${social.name}`}
                  className="social-card glass-panel"
                >
                  <div className="social-icon">
                    <Icon size={23} />
                  </div>

                  <span>{social.name}</span>

                  <ArrowRight size={17} className="social-arrow" />
                </a>
              );
            })}
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}

        <footer className="footer">
          <div className="footer-brand">
            <Image
              src="/images/logo.png"
              alt="OyeYar"
              width={34}
              height={34}
              className="footer-logo"
            />

            <span>OyeYar</span>
          </div>

          <p>© {new Date().getFullYear()} OyeYar. All rights reserved.</p>

          <div className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span />
            <Link href="/terms">Terms of Use</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
