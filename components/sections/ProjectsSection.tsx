import Image from "next/image";

export function ProjectsSection() {
  return (
    <section id="projects" className="screen" aria-label="Trusted Across Israel">
      <Image
        src="/images/screens/05-projects.webp"
        alt="Trusted Across Israel"
        width={1920}
        height={1080}
        sizes="100vw"
        priority={false}
        className="screenImage"
      />
    </section>
  );
}
