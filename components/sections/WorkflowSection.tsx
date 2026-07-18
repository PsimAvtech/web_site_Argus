import Image from "next/image";

export function WorkflowSection() {
  return (
    <section id="workflow" className="screen" aria-label="From Events to Action. Automatically.">
      <Image
        src="/images/screens/03-workflow.webp"
        alt="From Events to Action. Automatically."
        width={1920}
        height={1080}
        sizes="100vw"
        priority={false}
        className="screenImage"
      />
    </section>
  );
}
