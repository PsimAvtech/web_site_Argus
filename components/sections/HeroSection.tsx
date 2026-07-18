import Image from "next/image";

function ChipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" />
      <path d="M9 2v3M12 2v3M15 2v3M9 19v3M12 19v3M15 19v3M2 9h3M2 12h3M2 15h3M19 9h3M19 12h3M19 15h3" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5h2a2 2 0 0 0 2-2V6a2 2 0 0 0-1-2Z" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5h-2a2 2 0 0 1-2-2V6a2 2 0 0 1 1-2Z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 18a4 4 0 0 1-1-7.87A5 5 0 0 1 15.9 8.05 4.5 4.5 0 0 1 17 17H7Z" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 16l9 5 9-5" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13a7.97 7.97 0 0 0 0-2l2-1.5-2-3.5-2.4 1a8 8 0 0 0-1.7-1L15 3h-6l-.3 2.5a8 8 0 0 0-1.7 1l-2.4-1-2 3.5L4.6 11a8 8 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a8 8 0 0 0 1.7 1L9 21h6l.3-2.5a8 8 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5Z" />
    </svg>
  );
}

function PuzzleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 7h3a1 1 0 0 0 1-1V5a2 2 0 1 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a2 2 0 1 0 0 4h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 1 0-4 0v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a2 2 0 1 0 0-4H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

const features = [
  { icon: <ChipIcon />, tone: "blue", title: "Next-Generation Platform", desc: "Open, scalable and future-ready architecture." },
  { icon: <BrainIcon />, tone: "purple", title: "AI-Powered by Design", desc: "Intelligent detection, correlation and automation." },
  { icon: <BoltIcon />, tone: "green", title: "Simple. Fast. Powerful.", desc: "Built for operators. Designed for impact." },
  { icon: <CloudIcon />, tone: "amber", title: "Flexible Deployment", desc: "Available as SaaS or On-Premises." },
] as const;

const cameras = [
  { name: "Lobby", time: "12:42:31" },
  { name: "Parking Entrance", time: "12:42:31" },
  { name: "Warehouse", time: "12:42:31" },
  { name: "Server Room", time: "12:42:31" },
] as const;

const workflows = [
  { name: "Perimeter Breach", status: "In Progress", tone: "orange" },
  { name: "Emergency Access", status: "In Progress", tone: "orange" },
  { name: "Fire Alarm", status: "New", tone: "gray" },
  { name: "Visitor Management", status: "Active", tone: "green" },
] as const;

const bottomCards = [
  { icon: <LayersIcon />, title: "Unified Platform", desc: "All systems. One view. One response." },
  { icon: <EyeIcon />, title: "Real-Time Intelligence", desc: "Detect, verify and act in real time." },
  { icon: <GearIcon />, title: "Automation & SOPs", desc: "Smart workflows that save time and lives." },
  { icon: <PuzzleIcon />, title: "Open & Scalable", desc: "Integrate anything. Scale everything." },
  { icon: <ShieldCheckIcon />, title: "Cyber Secure", desc: "Enterprise-grade security by design." },
] as const;

export function HeroSection() {
  return (
    <section id="platform" className="screen hero" aria-label="The Next Generation Platform">
      <div className="heroGrid">
        <div className="heroText">
          <h1 className="heroHeadline">
            The Next<br />
            <span className="heroHeadlineAccent">Generation</span><br />
            Platform
          </h1>
          <div className="heroDivider" />
          <p className="heroLead">
            Unified PSIM platform that connects people, systems and intelligence
            to detect, verify and respond — in real time.
          </p>
          <ul className="heroFeatureList">
            {features.map((f) => (
              <li className="heroFeature" key={f.title}>
                <span className={`heroFeatureIcon heroFeatureIcon--${f.tone}`}>{f.icon}</span>
                <span className="heroFeatureBody">
                  <span className="heroFeatureTitle">{f.title}</span>
                  <span className="heroFeatureDesc">{f.desc}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="heroButtons">
            <a className="heroBtnPrimary" href="mailto:info@qronn.com?subject=ARGUS%20Demo%20Request">
              Request a Demo <span aria-hidden="true">&gt;</span>
            </a>
            <a className="heroBtnSecondary" href="#platform">Explore the Platform</a>
          </div>
        </div>

        <div className="heroBuildingWrap">
          <Image
            src="/images/screens/01-hero.webp"
            alt="ARGUS building visualization"
            width={645}
            height={740}
            sizes="45vw"
            priority={true}
            className="heroBuildingImage"
          />
        </div>

        <div className="heroPanels">
          <div className="heroPanel">
            <div className="heroPanelHeader">
              <span className="heroPanelLabel">Operator Console</span>
              <span className="heroLive"><span className="dot dot--green" />LIVE</span>
            </div>
            <div className="operatorGrid">
              {cameras.map((c) => (
                <div className="operatorThumb" key={c.name}>
                  <div className="operatorThumbPlaceholder"><CameraIcon /></div>
                  <div className="operatorThumbOverlay">
                    <span className="operatorThumbName"><span className="dot dot--green" />{c.name}</span>
                    <span className="operatorThumbTime">{c.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="heroPanel">
            <div className="heroPanelHeader">
              <span className="heroPanelLabel">Active Workflows</span>
            </div>
            <ul className="workflowList">
              {workflows.map((w) => (
                <li className="workflowRow" key={w.name}>
                  <span className="workflowName"><span className={`dot dot--${w.tone}`} />{w.name}</span>
                  <span className={`workflowStatus workflowStatus--${w.tone}`}>{w.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="heroPanel">
            <div className="heroPanelHeader">
              <span className="heroPanelLabel">System Status</span>
            </div>
            <div className="statusRow">
              <div className="statusDonut">
                <span className="statusDonutValue">98%</span>
                <span className="statusDonutLabel">Operational</span>
              </div>
              <ul className="statusLegend">
                <li><span className="dot dot--green" />Operational</li>
                <li><span className="dot dot--amber" />Warning</li>
                <li><span className="dot dot--red" />Offline</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="heroCore">
        <div className="heroCoreRings" aria-hidden="true" />
        <div className="heroCoreLabel">
          <span className="heroCoreTitle">ARGUS CORE</span>
          <span className="heroCoreSubtitle">Correlate&nbsp;&middot;&nbsp;Understand&nbsp;&middot;&nbsp;Act</span>
        </div>
      </div>

      <div className="heroCards">
        {bottomCards.map((c) => (
          <div className="heroCard" key={c.title}>
            <span className="heroCardIcon">{c.icon}</span>
            <span className="heroCardTitle">{c.title}</span>
            <span className="heroCardDesc">{c.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
