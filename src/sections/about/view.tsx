"use client";

// ----------------------------------------------------------------------

export default function AboutView() {
  const SKILLS = [
    "React / Next.js",
    "TypeScript",
    "Tailwind-CSS",
    "Figma",
    "React Native",
    "GraphQL",
    "Material-UI",
    "Photoshop / Illustrator",
  ];

  return (
    <section id="about" className="pt-24 px-4 md:px-8 lg:px-12">
      <h3 className="lg:w-5/6 max-w-250 text-2xl font-light uppercase [&>strong]:font-medium [&>em]:not-italic [&>em]:opacity-50">
        Hey! I&apos;m <strong>Moiz Solaiman</strong>, a frontend developer and
        designer based in the Philippines.&nbsp;
        <em>
          With 3+ years of experience taking part in webdev projects for local
          and international clients.
        </em>
      </h3>

      <p className="hidden lg:block mt-4 text-xs font-light uppercase">
        {SKILLS.map((_) => _).join(" | ")}
      </p>

      <div className="flex lg:hidden mt-8 flex-col gap-2">
        {SKILLS.map((_) => (
          <p key={_} className="text-xs uppercase font-light">
            {_}
          </p>
        ))}
      </div>
    </section>
  );
}
