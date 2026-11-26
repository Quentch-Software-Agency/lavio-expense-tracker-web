"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ShieldCheck,
  LockKeyhole,
  Database,
  UserRound,
  Mail,
  Globe,
  ArrowLeft,
} from "lucide-react";

const privacySections = [
  {
    heading: "1. Information We Collect",
    body: "Depending on how you use LAVIO, we may process account information (name, email, phone number and authentication information), financial information (income, expenses, transactions, categories, budgets, savings goals, loans, debts, credit cards, currencies and reports), device and technical information, and usage information where necessary and permitted by applicable law.",
  },
  {
    heading: "2. How We Use Your Information",
    body: "We may use information to create and maintain accounts, provide and synchronize LAVIO, calculate balances and reports, provide notifications, backup and restore, improve performance, detect security issues, provide support, display advertisements, and comply with legal obligations.",
  },
  {
    heading: "3. Financial Information",
    body: "Your financial information is used to provide LAVIO features. We do not sell your personal financial information. LAVIO is not a bank and does not provide banking services.",
  },
  {
    heading: "4. Authentication Providers",
    body: "If you sign in using Google, Apple, Facebook, or another supported provider, certain information may be processed by that provider under its own privacy policy. LAVIO processes the information necessary to maintain your account.",
  },
  {
    heading: "5. Data Storage",
    body: "LAVIO may use third-party infrastructure providers, including Supabase, for authentication, database services, and secure storage. We use reasonable technical and organizational measures designed to protect information.",
  },
  {
    heading: "6. Advertising",
    body: "LAVIO may use Google AdMob or other advertising services. Advertising providers may collect device or advertising-related information according to their policies and applicable laws. Where required, LAVIO will request appropriate permissions or consent.",
  },
  {
    heading: "7. Data Sharing",
    body: "We do not sell personal information. We may share information with service providers that help operate LAVIO, including authentication, cloud/database, advertising, analytics, technical, and support providers, or when required by law.",
  },
  {
    heading: "8. Data Security",
    body: "We use reasonable security measures designed to protect information. However, no internet transmission or electronic storage system can be guaranteed completely secure. Users are also responsible for protecting account credentials and devices.",
  },
  {
    heading: "9. Data Retention",
    body: "We retain information as reasonably necessary to provide the Service, maintain accounts, comply with legal obligations, resolve disputes, enforce agreements, and protect legitimate interests. Information may be deleted or anonymized when no longer required.",
  },
  {
    heading: "10. Account and Data Deletion",
    body: "You may request deletion of your LAVIO account and associated personal information through available account settings or by contacting support. Some information may need to be retained where required by law.",
  },
  {
    heading: "11. Children’s Privacy",
    body: "LAVIO is intended for users aged 13 and above. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided personal information, please contact us.",
  },
  {
    heading: "12. International Data Processing",
    body: "Depending on service providers, information may be processed or stored in countries outside your country of residence. Where required, we will take appropriate measures under applicable privacy laws.",
  },
  {
    heading: "13. Your Privacy Rights",
    body: "Depending on your location and applicable law, you may have rights to access, correct, delete, restrict or object to certain processing, withdraw consent where applicable, and request a copy of certain information.",
  },
  {
    heading: "14. Changes to This Privacy Policy",
    body: "We may update this Privacy Policy from time to time. Significant changes may be communicated through the application, website, or other appropriate methods. The updated policy will include a revised Last Updated date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="LAVIO home">
            <Image
              src="/lavio-logo.png"
              alt="LAVIO logo"
              width={42}
              height={42}
              priority
            />
            <span>LAVIO Money Tracker</span>
          </Link>

          <Link href="/" className="back-link">
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </header>

      <section className="privacy-hero">
        <div className="privacy-hero-icon">
          <ShieldCheck size={30} />
        </div>
        <p className="eyebrow">YOUR PRIVACY MATTERS</p>
        <h1>Privacy Policy</h1>
        <p className="hero-description">
          Learn how LAVIO collects, uses, stores, and protects your information.
        </p>
        <span className="updated">Last Updated: October 2026</span>
      </section>

      <div className="content-wrapper">
        <article className="policy-card">
          <div className="intro">
            <h2>About This Policy</h2>
            <p>
              This Privacy Policy explains how LAVIO Money Tracker may collect,
              use, store, and share information when you use our application and
              services.
            </p>
          </div>

          {privacySections.map((section) => (
            <section className="policy-section" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <section className="contact-section" id="contact">
            <h2>15. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or
              your personal information, you can contact us using the details
              below.
            </p>

            <div className="contact-details">
              <div>
                <span>Legal Owners</span>
                <strong>Nour Eddin Aqel &amp; Mohammad Nawaf Qasem</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>Amman, Jordan</strong>
              </div>
              <div>
                <span>Email</span>
                <a href="mailto:nooraddinaqel@yahoo.com">
                  nooraddinaqel@yahoo.com
                </a>
              </div>
              <div>
                <span>Website</span>
                <a
                  href="https://laviosoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://laviosoft.com
                </a>
              </div>
            </div>
          </section>

          <div className="policy-footer">
            <ShieldCheck size={18} />
            <p>
              Thank you for trusting LAVIO Money Tracker with your financial
              organization.
            </p>
          </div>
        </article>
      </div>

      <footer className="privacy-footer">
        <Link href="/">LAVIO Money Tracker</Link>
        <span>© {new Date().getFullYear()} LAVIO. All rights reserved.</span>
      </footer>

      <style jsx>{`
        .privacy-page {
          min-height: 100vh;
          background: #f3f8f9;
          color: #193b40;
        }

        /* Header */

        .privacy-header {
          background: #fff;
          border-bottom: 1px solid #dfe9eb;
        }

        .header-inner {
          max-width: 1180px;
          margin: auto;
          padding: 14px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #193b40;
          font-size: 18px;
          font-weight: 750;
          text-decoration: none;
        }

        .brand :global(img) {
          object-fit: contain;
          border-radius: 10px;
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #71878b;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: #287d83;
        }

        /* Hero */

        .privacy-hero {
          padding: 38px 20px 32px;
          text-align: center;
          background: linear-gradient(
            135deg,
            #e1f1f0 0%,
            #edf5f7 55%,
            #f3f8f9 100%
          );
        }

        .privacy-hero-icon {
          width: 54px;
          height: 54px;
          margin: 0 auto 13px;
          display: grid;
          place-items: center;
          color: #287d83;
          background: #fff;
          border: 1px solid #d5e8e8;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(40, 125, 131, 0.07);
        }

        .eyebrow {
          margin: 0 0 5px;
          color: #287d83;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .privacy-hero h1 {
          margin: 0;
          color: #193b40;
          font-size: clamp(30px, 4vw, 40px);
          letter-spacing: -1px;
        }

        .privacy-hero .hero-description {
          margin: 9px auto;
          color: #71878b;
          font-size: 14px;
          line-height: 1.6;
        }

        .updated {
          color: #8a9b9d;
          font-size: 12px;
        }

        /* Content */

        .content-wrapper {
          max-width: 950px;
          margin: 0 auto;
          padding: 32px 24px 55px;
        }

        .policy-card {
          padding: 34px 40px;
          background: #fff;
          border: 1px solid #dfe9eb;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(25, 59, 64, 0.045);
        }

        .intro {
          padding-bottom: 22px;
          margin-bottom: 22px;
          border-bottom: 1px solid #eaf0f1;
        }

        .intro h2,
        .policy-section h2,
        .contact-section h2 {
          margin: 0 0 9px;
          color: #193b40;
          font-size: 16px;
          font-weight: 750;
        }

        .intro p,
        .policy-section p,
        .contact-section > p {
          margin: 0;
          color: #71858a;
          font-size: 14px;
          line-height: 1.8;
        }

        .policy-section {
          padding: 17px 0;
          border-bottom: 1px solid #eaf0f1;
        }

        .policy-section h2 {
          margin-bottom: 7px;
        }

        .contact-section {
          padding-top: 23px;
        }

        .contact-section > p {
          margin-bottom: 20px;
        }

        /* Contact details */

        .contact-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px 30px;
          padding: 21px;
          background: #edf5f5;
          border: 1px solid #ddeaea;
          border-radius: 12px;
        }

        .contact-details div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          min-width: 0;
        }

        .contact-details span {
          color: #829699;
          font-size: 12px;
        }

        .contact-details strong,
        .contact-details a {
          color: #29494d;
          font-size: 13px;
          font-weight: 650;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .contact-details a {
          color: #287d83;
          text-decoration: none;
        }

        .contact-details a:hover {
          color: #195c62;
          text-decoration: underline;
        }

        /* Policy footer */

        .policy-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid #eaf0f1;
          color: #287d83;
        }

        .policy-footer :global(svg) {
          flex-shrink: 0;
        }

        .policy-footer p {
          margin: 0;
          color: #71858a;
          font-size: 12px;
          line-height: 1.6;
        }

        /* Footer */

        .privacy-footer {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 22px 28px;
          background: #fff;
          border-top: 1px solid #dfe9eb;
          color: #829699;
          font-size: 12px;
        }

        .privacy-footer a {
          color: #287d83;
          font-weight: 700;
          text-decoration: none;
        }

        .privacy-footer a:hover {
          color: #195c62;
        }

        /* Responsive */

        @media (max-width: 600px) {
          .header-inner {
            padding: 12px 16px;
          }

          .brand {
            font-size: 14px;
            gap: 7px;
          }

          .brand :global(img) {
            width: 34px;
            height: 34px;
          }

          .back-link {
            font-size: 11px;
          }

          .privacy-hero {
            padding: 28px 16px 25px;
          }

          .privacy-hero .hero-description {
            max-width: 340px;
            font-size: 13px;
          }

          .content-wrapper {
            padding: 18px 12px 35px;
          }

          .policy-card {
            padding: 23px 19px;
            border-radius: 12px;
          }

          .intro p,
          .policy-section p,
          .contact-section > p {
            font-size: 13px;
            line-height: 1.75;
          }

          .policy-section {
            padding: 15px 0;
          }

          .contact-details {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 16px;
          }

          .privacy-footer {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px 15px;
          }
        }
      `}</style>
    </main>
  );
}
