import Image from "next/image";

export function WhyArgusSection() {
  return (
    <section id="why" className="screen" aria-label="Why Choose ARGUS">
      <Image
        src="/images/screens/06-why-argus.webp"
        alt="Why Choose ARGUS"
        width={1920}
        height={1080}
        sizes="100vw"
        priority={false}
        className="screenImage"
      />
    </section>
  );
}
