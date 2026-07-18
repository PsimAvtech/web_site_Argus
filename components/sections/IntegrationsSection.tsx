import Image from "next/image";

export function IntegrationsSection() {
  return (
    <section id="integrations" className="screen" aria-label="One Platform. Every System Connected.">
      <Image
        src="/images/screens/02-integrations.webp"
        alt="One Platform. Every System Connected."
        width={1920}
        height={1080}
        sizes="100vw"
        priority={false}
        className="screenImage"
      />
    </section>
  );
}
