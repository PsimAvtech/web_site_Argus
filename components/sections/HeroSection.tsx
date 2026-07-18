import Image from "next/image";

export function HeroSection() {
  return (
    <section id="platform" className="screen hero" aria-label="The Next Generation Platform">
      <Image
        src="/images/screens/01-hero.webp"
        alt="The Next Generation Platform"
        width={645}
        height={740}
        sizes="100vh"
        priority={true}
        className="screenImage"
      />
    </section>
  );
}
