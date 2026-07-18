import Image from "next/image";

export function IndustriesSection() {
  return (
    <section id="industries" className="screen" aria-label="Industries">
      <Image
        src="/images/screens/04-industries.webp"
        alt="Industries"
        width={1920}
        height={1080}
        sizes="100vw"
        priority={false}
        className="screenImage"
      />
    </section>
  );
}
