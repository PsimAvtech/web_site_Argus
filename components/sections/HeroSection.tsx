import Image from "next/image";

export function HeroSection() {
  return (
    <section id="platform" className="screen" aria-label="The Next Generation Platform">
      <Image
        src="/images/screens/01-hero.webp"
        alt="The Next Generation Platform"
        width={1920}
        height={1080}
        sizes="100vw"
        priority={true}
        className="screenImage"
      />
    </section>
  );
}
