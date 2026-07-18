import Image from "next/image";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="screen" aria-label="The ARGUS Ecosystem">
      <Image
        src="/images/screens/07-ecosystem.webp"
        alt="The ARGUS Ecosystem"
        width={1920}
        height={1080}
        sizes="100vw"
        priority={false}
        className="screenImage"
      />
    </section>
  );
}
