const links = [
  ["Platform", "platform"],
  ["Integrations", "integrations"],
  ["How It Works", "workflow"],
  ["Industries", "industries"],
  ["Projects", "projects"],
  ["Why ARGUS", "why"],
  ["Ecosystem", "ecosystem"],
] as const;

export function SiteNav() {
  return (
    <nav className="siteNav" aria-label="Primary navigation">
      <a className="navLogo" href="#platform" aria-label="ARGUS home">
        <span className="navLogoMark">
          ARGUS<span className="navLogoFlag" aria-hidden="true" />
        </span>
        <span className="navLogoSub">PSIM PLATFORM</span>
      </a>
      <div className="navLinks">
        {links.map(([label, id]) => (
          <a href={`#${id}`} key={id} className={id === "platform" ? "navLinkActive" : undefined}>
            {label}
          </a>
        ))}
      </div>
      <a className="navCta" href="mailto:info@qronn.com?subject=ARGUS%20Demo%20Request">Request a Demo</a>
    </nav>
  );
}
