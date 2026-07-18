import Image from "next/image";

export function HeroSection() {
  return (
    <section id="platform" className="screen hero" aria-label="The Next Generation Platform">
      <div className="heroText">
        <p className="heroEyebrow">Next Generation Platform</p>
        <h1 className="heroHeadline">The Next Generation Platform</h1>
        <div className="heroMessages">
          <div className="heroMessage">
            <h2 className="heroMessageTitle">AI Powered by Design</h2>
            <p className="heroMessageDesc">Simple. Fast. Powerful.</p>
          </div>
          <div className="heroMessage">
            <h2 className="heroMessageTitle">Flexible Deployment</h2>
            <p className="heroMessageDesc">Available as SaaS or On-Premises.</p>
          </div>
        </div>
      </div>
      <div className="heroImageWrap">
        <Image
          src="/images/screens/01-hero.webp"
          alt="ARGUS building visualization"
          width={645}
          height={740}
          sizes="50vw"
          priority={true}
          className="heroImage"
        />
      </div>
    </section>
  );
}
