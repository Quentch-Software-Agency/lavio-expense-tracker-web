import Image from "next/image";
import {
  ArrowDownLeft,
  ArrowUpRight,
  ArrowRight,
  ArrowUpRight as ExternalLink,
  BellRing,
  ShieldCheck,
  Languages,
  Globe2,
  RefreshCw,
  Sparkles,
  Wallet,
  ChartNoAxesCombined,
  PiggyBank,
  CreditCard,
  CalendarDays,
  LockKeyhole,
  Check,
  HeartPulse,
  Target,
  TrendingUp,
  Lightbulb,
  Menu,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Wallet,
    title: "Income & expense tracking",
    text: "Know what comes in and where it goes. Log transactions and see your money clearly.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Budgets that fit your life",
    text: "Build a smart monthly budget around your income and get gentle nudges before you drift.",
  },
  {
    icon: HeartPulse,
    title: "Financial health insights",
    text: "See your money habits at a glance, with useful suggestions and clear next steps.",
  },
  {
    icon: PiggyBank,
    title: "Goals & savings",
    text: "Put money aside for the future, emergencies, and the things you're working toward.",
  },
  {
    icon: CreditCard,
    title: "Debt & credit management",
    text: "Keep loans, credit cards and debts organised so you can plan repayments confidently.",
  },
  {
    icon: CalendarDays,
    title: "Reports that make sense",
    text: "Review weekly, monthly or custom date ranges, then export a PDF when you need it.",
  },
];

const benefits = [
  {
    icon: BellRing,
    title: "Helpful reminders",
    text: "Timely notifications and practical suggestions help you stay on track.",
  },
  {
    icon: ShieldCheck,
    title: "App lock",
    text: "Add an extra layer of privacy to your personal finances.",
  },
  {
    icon: Languages,
    title: "40 languages",
    text: "Use LAVIO in a language that feels natural to you.",
  },
  {
    icon: Globe2,
    title: "All currencies",
    text: "Track your money with the currency that works for your life.",
  },
  {
    icon: RefreshCw,
    title: "Multi-device sync",
    text: "Your financial picture stays in sync across your devices.",
  },
  {
    icon: Sparkles,
    title: "100% free",
    text: "Every feature, with no subscription fee. Your money stays yours.",
  },
];

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="LAVIO Money Tracker home">
      <Image
        src="/lavio-logo.png"
        alt="LAVIO app logo"
        width={42}
        height={42}
        priority
      />
      <span>LAVIO Money Tracker</span>
    </Link>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

function StoreLink({
  store,
  href,
}: {
  store: "Google Play" | "App Store";
  href: string;
}) {
  return (
    <Link className="store-button" href={href} target="_blank" rel="noreferrer">
      {store === "Google Play" ? (
        <svg
          className="store-logo play-logo"
          viewBox="0 0 32 36"
          aria-hidden="true"
        >
          <path
            d="M3 2.2 19.4 18 3 33.8c-.6-.4-1-1.1-1-2V4.2c0-.9.4-1.6 1-2Z"
            fill="#34A853"
          />
          <path d="m3 2.2 19.1 11-2.7 4.8L3 2.2Z" fill="#4285F4" />
          <path d="m3 33.8 16.4-15.8 2.7 4.8L3 33.8Z" fill="#EA4335" />
          <path
            d="m19.4 18 2.7-4.8 7.1 4.1c1.2.7 1.2 1.7 0 2.4l-7.1 4.1-2.7-5.8Z"
            fill="#FBBC04"
          />
        </svg>
      ) : (
        <svg
          className="store-logo apple-logo"
          viewBox="0 0 32 36"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M25.7 19.1c0-4.1 3.3-6.1 3.4-6.2-1.9-2.8-4.9-3.2-6-3.2-2.5-.3-4.9 1.5-6.2 1.5-1.3 0-3.3-1.5-5.4-1.5-2.8 0-5.4 1.6-6.8 4.1-2.9 5-.7 12.4 2.1 16.4 1.4 2 3 4.2 5.1 4.1 2-.1 2.8-1.3 5.3-1.3s3.2 1.3 5.4 1.2c2.2 0 3.6-2 5-4 1.6-2.3 2.2-4.6 2.2-4.7-.1 0-4.1-1.6-4.1-6.4ZM21.6 7c1.1-1.3 1.9-3.1 1.7-4.9-1.6.1-3.6 1.1-4.8 2.4-1.1 1.2-2 3-1.8 4.8 1.8.1 3.7-.9 4.9-2.3Z"
          />
        </svg>
      )}
      <span>
        <small>
          {store === "Google Play" ? "GET IT ON" : "Download on the"}
        </small>
        <strong>{store}</strong>
      </span>
    </Link>
  );
}

function PhoneMockup({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`phone-wrap ${className}`}>
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="phone-island" />
          <Image
            src={src}
            alt={`${label} app screenshot`}
            fill
            sizes="(max-width: 700px) 55vw, 260px"
            className="phone-screenshot"
          />
          <div className="phone-empty">
            <Smartphone size={24} />
            <span>Add {label.toLowerCase()} screenshot</span>
            <code>{src}</code>
          </div>
        </div>
      </div>
      <span className="phone-label">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Brand />
        <nav aria-label="Main navigation">
          <Link href="#features">Features</Link>
          <Link href="#screenshots">App preview</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
        <Link className="header-cta" href="#download">
          Get the app <ArrowUpRight size={15} />
        </Link>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <h1>
            Take control
            <br />
            of your <em>money.</em>
          </h1>
          <p className="hero-description">
            Meet LAVIO — the 100% free expense tracker that makes it easier to
            understand your spending, build a budget, and make room for what
            matters.
          </p>
          <div className="hero-actions">
            <StoreLink
              store="Google Play"
              href="https://play.google.com/store"
            />
            <StoreLink
              store="App Store"
              href="https://www.apple.com/app-store/"
            />
          </div>
          <div className="trust-line">
            Free forever <i>·</i> No subscription <i>·</i> Your money, your plan
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=85"
              alt="A person organising personal finances with a calculator and paperwork"
              fill
              priority
              sizes="(max-width: 800px) 90vw, 48vw"
            />
          </div>
          <div className="hero-photo-shade" />
          <div className="dashboard-card">
            <div className="dash-top">
              <div>
                <span className="muted">Good morning, Alex</span>
                <h3>Your overview</h3>
              </div>
              <span className="avatar">A</span>
            </div>
            <div className="balance-card">
              <span>Remaining this month</span>
              <strong>
                $3,610 <small>US Dollar</small>
              </strong>
              <div className="balance-change">
                <TrendingUp size={12} /> 29% <small>of budget remaining</small>
              </div>
              <div className="balance-bars">
                {[12, 18, 14, 23, 17, 26, 20, 29, 22, 30, 25, 34].map(
                  (h, i) => (
                    <i key={i} style={{ height: h }} />
                  ),
                )}
              </div>
            </div>
            <div className="dash-stats">
              <div>
                <span className="stat-icon income">
                  <ArrowDownLeft size={15} />
                </span>
                <small>Income</small>
                <b>$5,100</b>
              </div>
              <div>
                <span className="stat-icon expense">
                  <ArrowUpRight size={15} />
                </span>
                <small>Expenses</small>
                <b>$1,490</b>
              </div>
            </div>
            <div className="budget-preview">
              <div className="budget-heading">
                <b>Monthly overview</b>
                <span>29% remaining</span>
              </div>
              <div className="progress">
                <i />
              </div>
              <small>Keep your spending on track</small>
            </div>
          </div>
          <div className="floating-note">
            <span>
              <Sparkles size={16} />
            </span>
            <div>
              <b>You're doing great!</b>
              <small>You're under budget this month.</small>
            </div>
          </div>
          <div className="floating-goal">
            <span className="goal-icon">
              <Target size={19} />
            </span>
            <div>
              <small>Emergency fund</small>
              <b>
                $2,400 <i>of $3,000</i>
              </b>
              <div className="mini-progress">
                <i />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ticker">
        <span>TRACK WITH CLARITY</span>
        <b>✳</b>
        <span>PLAN WITH CONFIDENCE</span>
        <b>✳</b>
        <span>GROW AT YOUR PACE</span>
        <b>✳</b>
        <span>100% FREE, ALWAYS</span>
      </section>

      <section className="section features-section" id="features">
        <div className="section-intro">
          <SectionLabel>EVERYTHING IN ONE PLACE</SectionLabel>
          <h2>
            A clearer picture.
            <br />
            <em>A calmer money life.</em>
          </h2>
          <p>
            All the tools you need to stay aware, stay prepared, and make
            progress — without the complicated spreadsheets.
          </p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }, i) => (
            <article className="feature-card" key={title}>
              <span className={`feature-icon tone-${i}`}>
                <Icon size={21} strokeWidth={1.8} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight className="card-arrow" size={17} />
            </article>
          ))}
        </div>
      </section>

      <section className="insights-section" id="insights">
        <div className="insights-copy">
          <SectionLabel>MEET YOUR FINANCIAL HEALTH</SectionLabel>
          <h2>
            Not just numbers.
            <br />
            <em>Useful next steps.</em>
          </h2>
          <p>
            LAVIO brings your financial picture together and turns it into
            insights you can act on. Understand your habits, spot patterns, and
            get suggestions that help you move forward.
          </p>
          <ul>
            <li>
              <Check /> See income, spending, savings and debt in one view
            </li>
            <li>
              <Check /> Get smart budget suggestions based on your income
            </li>
            <li>
              <Check /> Find opportunities to save and stay on track
            </li>
            <li>
              <Check /> Check weekly, monthly or custom-period reports
            </li>
          </ul>
        </div>
        <div className="health-card">
          <div className="health-top">
            <span>YOUR FINANCIAL HEALTH</span>
            <span className="health-live">● LIVE OVERVIEW</span>
          </div>
          <div className="health-score">
            <div className="score-ring">
              <div>
                <b>82</b>
                <small>/ 100</small>
              </div>
            </div>
            <div>
              <h3>Looking healthy!</h3>
              <p>You're building good money habits.</p>
              <span className="score-up">
                <TrendingUp size={12} /> 6 points this month
              </span>
            </div>
          </div>
          <div className="health-divider" />
          <div className="insight-row">
            <span className="insight-emoji">
              <ChartNoAxesCombined size={18} />
            </span>
            <div>
              <b>Spending insight</b>
              <p>You spent 14% less on dining this month.</p>
            </div>
            <Check className="insight-check" />
          </div>
          <div className="insight-row">
            <span className="insight-emoji">
              <Lightbulb size={18} />
            </span>
            <div>
              <b>Smart suggestion</b>
              <p>Save an extra $40 this month to reach your goal sooner.</p>
            </div>
            <ArrowRight className="insight-check" />
          </div>
          <p className="demo-note">
            Illustrative preview · Your actual insights depend on your activity.
          </p>
        </div>
      </section>

      <section className="section extras-section">
        <div className="section-intro centered">
          <SectionLabel>MADE FOR REAL LIFE</SectionLabel>
          <h2>
            Small details.
            <br />
            <em>A big difference.</em>
          </h2>
          <p>Flexible, private and ready to fit the way you manage money.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article className="benefit" key={title}>
              <span className="benefit-icon">
                <Icon size={21} strokeWidth={1.8} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="screens-section" id="screenshots">
        <div className="screens-heading">
          <div>
            <SectionLabel>MADE TO FEEL SIMPLE</SectionLabel>
            <h2>
              Your finances,
              <br />
              <em>beautifully organised.</em>
            </h2>
          </div>
          <p>
            Real app screens, right where you need them. Add your screenshots to
            the public folder and they’ll sit inside these phone mockups.
          </p>
        </div>
        <div className="phones-stage">
          <div className="phone-deco deco-one" />
          <div className="phone-deco deco-two" />
          <PhoneMockup
            src="/screenshots/dashboard.jpeg"
            label="Home dashboard"
            className="phone-one"
          />
          <PhoneMockup
            src="/screenshots/loans-debts.jpeg"
            label="Loans & Debts"
            className="phone-two"
          />
          <PhoneMockup
            src="/screenshots/smart-insights.jpeg"
            label="Smart Insights"
            className="phone-three"
          />
        </div>
      </section>

      <section className="people-section">
        <div className="people-photo">
          <Image
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1100&q=85"
            alt="Savings jar and money representing steady progress toward a financial goal"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div className="people-copy">
          <SectionLabel>YOUR MONEY, ALL IN ONE VIEW</SectionLabel>
          <h2>
            From everyday
            <br />
            spending to <em>big goals.</em>
          </h2>
          <p>
            See what you earn, what you spend, what you owe and what you’re
            saving for. LAVIO brings the moving parts of your finances together
            so you can make informed decisions with confidence.
          </p>
          <Link href="#screenshots" className="text-link">
            Explore the app screens <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="download-section" id="download">
        <div className="download-glow" />
        <SectionLabel>YOUR NEXT CHAPTER STARTS HERE</SectionLabel>
        <h2>
          Make your money
          <br />
          feel <em>more manageable.</em>
        </h2>
        <p>Download LAVIO and take the guesswork out of everyday finances.</p>
        <div className="hero-actions centered-actions">
          <StoreLink store="Google Play" href="https://play.google.com/store" />
          <StoreLink
            store="App Store"
            href="https://www.apple.com/app-store/"
          />
        </div>
        <span className="free-note">
          <Sparkles size={13} /> 100% free. No subscriptions. No pressure.
        </span>
      </section>

      <footer className="footer">
        <Brand />
        <p>Take control of your money.</p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} LAVIO. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
