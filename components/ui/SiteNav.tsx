"use client";

import { useEffect, useState } from "react";

const links = [
  ["Platform", "platform"],
  ["Integrations", "integrations"],
  ["Workflow", "workflow"],
  ["Industries", "industries"],
  ["Projects", "projects"],
  ["Why ARGUS", "why"],
  ["Ecosystem", "ecosystem"],
] as const;

export function SiteNav() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`siteNav ${visible ? "siteNavVisible" : ""}`} aria-label="Primary navigation">
      <a className="navBrand" href="#platform" aria-label="ARGUS home">ARGUS</a>
      <div className="navLinks">
        {links.slice(1).map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
      </div>
      <a className="navCta" href="mailto:info@qronn.com?subject=ARGUS%20Demo%20Request">Request a Demo</a>
    </nav>
  );
}
