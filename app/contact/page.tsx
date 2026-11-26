"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Globe,
  ArrowUpRight,
  ArrowLeft,
  Mail,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

const phoneNumber = "+966538521336";
const whatsappLink = "https://wa.me/966538521336";

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* Header */}
      <header className="contact-header">
        <Link href="/" className="brand">
          <Image
            src="/lavio-logo.png"
            alt="LAVIO Logo"
            width={42}
            height={42}
            priority
          />
          <span>
            LAVIO <small>Money Tracker</small>
          </span>
        </Link>

        <Link href="/" className="back-link">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </header>

      {/* Hero */}
      <section className="contact-hero">
        <div className="hero-badge">
          <span className="status-dot" />
          WE'RE HERE TO HELP
        </div>

        <h1>
          Let's talk about
          <br />
          <em>what matters to you.</em>
        </h1>

        <p>
          Questions, feedback, or need a little help with LAVIO? We're always
          happy to hear from you. Choose the way that works best for you.
        </p>

        <div className="hero-decoration">
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* Contact options */}
      <section className="contact-section">
        <div className="section-heading">
          <span>GET IN TOUCH</span>
          <h2>How can we help you?</h2>
          <p>Choose your preferred way to contact our team.</p>
        </div>

        <div className="contact-options">
          <a href={`tel:${phoneNumber}`} className="contact-card">
            <div className="card-top">
              <div className="contact-icon phone-icon">
                <Phone size={24} />
              </div>
              <ArrowUpRight className="card-arrow" size={20} />
            </div>

            <span className="card-label">DIRECT SUPPORT</span>
            <h3>Call Us</h3>
            <p>
              Speak with us directly. We're happy to help with your questions
              and enquiries.
            </p>

            <div className="card-action">
              <span>+966 53 852 1336</span>
              <ArrowUpRight size={16} />
            </div>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="card-top">
              <div className="contact-icon whatsapp-icon">
                <MessageCircle size={24} />
              </div>
              <ArrowUpRight className="card-arrow" size={20} />
            </div>

            <span className="card-label">QUICK MESSAGING</span>
            <h3>WhatsApp</h3>
            <p>
              Prefer messaging? Send us a message on WhatsApp for convenient
              communication and support.
            </p>

            <div className="card-action">
              <span>Message us on WhatsApp</span>
              <ArrowUpRight size={16} />
            </div>
          </a>

          <a href="/" className="contact-card">
            <div className="card-top">
              <div className="contact-icon website-icon">
                <Globe size={24} />
              </div>
              <ArrowUpRight className="card-arrow" size={20} />
            </div>

            <span className="card-label">DISCOVER LAVIO</span>
            <h3>Our Website</h3>
            <p>
              Explore LAVIO, discover its features, and learn how to manage your
              finances with confidence.
            </p>

            <div className="card-action">
              <span>Visit our website</span>
              <ArrowUpRight size={16} />
            </div>
          </a>
        </div>
      </section>

      {/* Brand and information */}
      <section className="about-section">
        <div className="about-heading">
          <div className="about-logo">
            <Image
              src="/lavio-logo.png"
              alt="LAVIO Logo"
              width={58}
              height={58}
            />
          </div>

          <span className="about-eyebrow">A LITTLE ABOUT US</span>
          <h2>Meet LAVIO.</h2>
          <p>
            Helping you understand your money, organize your finances, and take
            control of your financial journey.
          </p>
        </div>

        <div className="info-panel">
          <div className="info-panel-heading">
            <div>
              <span>OUR INFORMATION</span>
              <h3>Get to know us</h3>
            </div>
            <ShieldCheck size={23} />
          </div>

          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">
                <Mail size={19} />
              </div>
              <div>
                <span>Email Address</span>
                <a href="mailto:nooraddinaqel@yahoo.com">
                  nooraddinaqel@yahoo.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Users size={19} />
              </div>
              <div>
                <span>Legal Owners</span>
                <strong>Nour Eddin Aqel &amp; Mohammad Nawaf Qasem</strong>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={19} />
              </div>
              <div>
                <span>Our Location</span>
                <strong>Amman, Jordan</strong>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Globe size={19} />
              </div>
              <div>
                <span>Official Website</span>
                <a
                  href="https://laviosoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  laviosoft.com
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="closing-banner">
        <div>
          <span>YOUR MONEY. YOUR CONTROL.</span>
          <h2>Make every financial decision count.</h2>
          <p>Thank you for being part of the LAVIO journey.</p>
        </div>

        <Link href="/" className="home-button">
          Explore LAVIO
          <ArrowUpRight size={17} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <Link href="/" className="footer-brand">
          <Image src="/lavio-logo.png" alt="LAVIO" width={28} height={28} />
          <strong>LAVIO</strong>
        </Link>

        <span>© {new Date().getFullYear()} LAVIO. All rights reserved.</span>

        <Link href="/" className="footer-link">
          Back to Home
        </Link>
      </footer>

      <style jsx>{`
        .contact-page {
          --ink: #193b40;
          --green: #287d83;
          --green-light: #55a5a3;
          --sage: #d5e9e6;
          --cream: #f5f8f8;
          --surface: #ffffff;
          --soft: #e5f1ef;
          --border: #dfe9e7;
          --muted: #788b8b;

          min-height: 100vh;
          background: var(--cream);
          color: var(--ink);
          padding: 0 7%;
          font-family: inherit;
          overflow: hidden;
        }

        /* Header */

        .contact-header {
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--ink);
          text-decoration: none;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .brand :global(img) {
          object-fit: contain;
        }

        .brand small {
          font-size: inherit;
          font-weight: 500;
          color: var(--muted);
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          text-decoration: none;
          font-size: 13px;
          font-weight: 650;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: var(--green);
        }

        /* Hero */

        .contact-hero {
          max-width: 760px;
          margin: 68px auto 58px;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid var(--border);
          border-radius: 30px;
          background: var(--soft);
          color: var(--green);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          background: var(--green-light);
          border-radius: 50%;
        }

        .contact-hero h1 {
          margin: 23px 0 15px;
          font-size: clamp(39px, 5.5vw, 64px);
          line-height: 1.12;
          letter-spacing: -2.7px;
          font-weight: 800;
          color: var(--ink);
        }

        .contact-hero h1 em {
          color: var(--green-light);
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .contact-hero > p {
          max-width: 570px;
          margin: 0 auto;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.75;
        }

        .hero-decoration {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin-top: 25px;
        }

        .hero-decoration span {
          width: 20px;
          height: 4px;
          border-radius: 5px;
          background: var(--sage);
        }

        .hero-decoration span:nth-child(2) {
          width: 35px;
          background: var(--green);
        }

        /* Contact cards */

        .contact-section {
          max-width: 1120px;
          margin: 0 auto;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 28px;
        }

        .section-heading > span {
          color: var(--green);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.8px;
        }

        .section-heading h2 {
          margin: 8px 0 6px;
          font-size: 26px;
          letter-spacing: -0.8px;
          color: var(--ink);
        }

        .section-heading p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
        }

        .contact-options {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .contact-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          min-height: 285px;
          padding: 27px 25px 23px;
          color: var(--ink);
          text-decoration: none;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 17px;
          transition: all 0.25s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          border-color: #b8cbb7;
          box-shadow: 0 15px 35px rgba(25, 59, 45, 0.09);
        }

        .card-top {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .contact-icon {
          width: 49px;
          height: 49px;
          display: grid;
          place-items: center;
          border-radius: 14px;
        }

        .phone-icon {
          color: var(--green);
          background: var(--soft);
        }

        .whatsapp-icon {
          color: #239a59;
          background: #e5f1ef;
        }

        .website-icon {
          color: #667c58;
          background: #eff0e6;
        }

        .card-arrow {
          color: #9aaa9c;
          transition: transform 0.2s;
        }

        .contact-card:hover .card-arrow {
          color: var(--green);
          transform: translate(3px, -3px);
        }

        .card-label {
          color: var(--green-light);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .contact-card h3 {
          margin: 7px 0 8px;
          font-size: 21px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .contact-card > p {
          margin: 0 0 22px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
        }

        .card-action {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          color: var(--green);
          font-size: 12px;
          font-weight: 750;
        }

        /* About section */

        .about-section {
          max-width: 920px;
          margin: 85px auto 65px;
        }

        .about-heading {
          text-align: center;
          max-width: 520px;
          margin: 0 auto 30px;
        }

        .about-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 15px;
        }

        .about-logo :global(img) {
          object-fit: contain;
        }

        .about-eyebrow {
          color: var(--green);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .about-heading h2 {
          margin: 7px 0;
          font-size: 29px;
          letter-spacing: -1px;
          color: var(--ink);
        }

        .about-heading p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* Information panel */

        .info-panel {
          padding: 27px 30px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          box-shadow: 0 8px 28px rgba(25, 59, 45, 0.035);
        }

        .info-panel-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }

        .info-panel-heading > div > span {
          color: var(--green);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .info-panel-heading h3 {
          margin: 5px 0 0;
          font-size: 18px;
          color: var(--ink);
        }

        .info-panel-heading :global(svg) {
          color: var(--green);
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px 35px;
          padding-top: 23px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-width: 0;
        }

        .info-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          color: var(--green);
          background: var(--soft);
          border-radius: 11px;
        }

        .info-item > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 5px;
          min-width: 0;
        }

        .info-item span {
          color: var(--muted);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }

        .info-item strong,
        .info-item a {
          color: var(--ink);
          font-size: 12px;
          font-weight: 650;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .info-item a {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--green);
          text-decoration: none;
        }

        .info-item a:hover {
          text-decoration: underline;
        }

        /* Closing banner */

        .closing-banner {
          position: relative;
          max-width: 1120px;
          margin: 0 auto 55px;
          padding: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          background: #eaf0e7;
          border: 1px solid #dce6d8;
          border-radius: 17px;
        }

        .closing-banner > div > span {
          color: var(--green);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .closing-banner h2 {
          margin: 7px 0 5px;
          font-size: 20px;
          letter-spacing: -0.5px;
          color: var(--ink);
        }

        .closing-banner p {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
        }

        .home-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          flex-shrink: 0;
          padding: 12px 18px;
          color: #fff;
          background: var(--green);
          border-radius: 9px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 750;
          transition:
            background 0.2s,
            transform 0.2s;
        }

        .home-button:hover {
          background: #194f54;
          transform: translateY(-2px);
        }

        /* Footer */

        .contact-footer {
          min-height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          border-top: 1px solid var(--border);
          color: var(--muted);
          font-size: 11px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--green);
          text-decoration: none;
          font-size: 14px;
        }

        .footer-brand :global(img) {
          object-fit: contain;
        }

        .footer-link {
          color: var(--green);
          text-decoration: none;
          font-weight: 700;
        }

        .footer-link:hover {
          text-decoration: underline;
        }

        /* Responsive */

        @media (max-width: 850px) {
          .contact-page {
            padding: 0 5%;
          }

          .contact-options {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .contact-card:last-child {
            grid-column: 1 / -1;
            min-height: 245px;
          }

          .closing-banner {
            padding: 25px;
          }
        }

        @media (max-width: 560px) {
          .contact-page {
            padding: 0 17px;
          }

          .contact-header {
            height: 68px;
          }

          .brand {
            font-size: 15px;
            gap: 7px;
          }

          .brand :global(img) {
            width: 35px;
            height: 35px;
          }

          .back-link {
            font-size: 11px;
            gap: 5px;
          }

          .contact-hero {
            margin: 43px auto 40px;
          }

          .hero-badge {
            font-size: 9px;
            padding: 7px 11px;
          }

          .contact-hero h1 {
            margin: 18px 0 12px;
            font-size: 39px;
            letter-spacing: -1.8px;
          }

          .contact-hero > p {
            font-size: 13px;
            line-height: 1.65;
          }

          .section-heading {
            margin-bottom: 20px;
          }

          .section-heading h2 {
            font-size: 22px;
          }

          .contact-options {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .contact-card,
          .contact-card:last-child {
            grid-column: auto;
            min-height: 245px;
            padding: 23px;
          }

          .card-top {
            margin-bottom: 18px;
          }

          .about-section {
            margin: 60px auto 40px;
          }

          .about-heading h2 {
            font-size: 26px;
          }

          .info-panel {
            padding: 21px 17px;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 19px;
            padding-top: 19px;
          }

          .closing-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 23px;
            margin-bottom: 35px;
          }

          .closing-banner h2 {
            font-size: 19px;
            line-height: 1.4;
          }

          .home-button {
            width: 100%;
          }

          .contact-footer {
            min-height: auto;
            padding: 18px 0;
            flex-direction: column;
            justify-content: center;
            gap: 12px;
          }
        }
      `}</style>
    </main>
  );
}
