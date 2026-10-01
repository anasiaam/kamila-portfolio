import Image from "next/image";
import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "About Kamila Meshaj, a content creator and social media manager based in Tirana.",
  path: "/about",
});

const capabilities = [
  {
    number: "01",
    title: "Content Creation",
    items: ["Reels", "Social content", "Visual storytelling"],
  },
  {
    number: "02",
    title: "Social Media Management",
    items: ["Content planning", "Account coordination", "Promotional communication"],
  },
  {
    number: "03",
    title: "Creative Direction",
    items: ["Brand positioning", "Visual consistency", "Campaign concepts"],
  },
  {
    number: "04",
    title: "Brand Communication",
    items: ["Customer-facing communication", "Social presence"],
  },
];

const experience = [
  {
    title: "Municipality of Tirana",
    context: "Directorate of Environment",
    role: "Social Media & Content Creation / Data Sector",
    years: "2024 - Present",
    summary:
      "Supporting content creation, social media management, data organization and reporting in collaboration with internal teams.",
  },
  {
    title: "Private Clients",
    context: "Account Management / Social Media",
    role: "Beauty, service-based brands and local communication",
    years: "2024 - Present",
    summary:
      "Coordinating social presence, content planning, brand positioning and promotional communication across selected client accounts.",
    clients: [
      "Ola Xhari Hair Salon / 2025 - Present",
      "The Laundry Room / 2026 - Present",
      "Nail / Beauty Client / 2024 - Present",
    ],
  },
];

const education = [
  {
    degree: "MSc Information Security",
    institution: "University of Tirana",
    years: "2023-2025",
  },
  {
    degree: "BSc Business Informatics",
    institution: "University of Tirana",
    years: "2020-2023",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-[var(--section-space-md)]">
      <header
        className="about-hero relative isolate overflow-hidden border-b border-border-soft pb-14 sm:pb-16 lg:pb-16"
        data-reveal="about-hero"
      >
        <p
          aria-hidden="true"
          className="about-hero-bg pointer-events-none absolute left-0 top-28 z-0 font-serif font-medium leading-none tracking-[0] text-green sm:top-24 lg:-left-8 lg:top-20"
          style={{
            fontSize: "clamp(5.2rem, 15vw, 12.5rem)",
            opacity: 0.05,
            whiteSpace: "nowrap",
          }}
        >
          VISUAL STORIES
        </p>

        <div className="relative z-10 flex items-center gap-5">
          <p className="eyebrow shrink-0 text-green">03 / About</p>
          <span className="h-px flex-1 bg-border-soft" aria-hidden="true" />
        </div>

        <div
          className="about-hero-layout relative z-10 mt-10"
        >
          <div className="about-hero-heading relative z-30 max-w-5xl">
            <h1 className="display-lg max-w-5xl text-green">
              I work where
              <br />
              content, visual identity
              <br />
              and <em className="font-normal">storytelling</em> meet
            </h1>
          </div>

          <div className="about-hero-side relative z-20 mt-9 grid gap-6 sm:mt-10">
            <div className="about-hero-label relative z-30 max-w-[9rem] border-l border-border-soft pl-5 text-[0.68rem] font-bold uppercase leading-loose tracking-[0.24em] text-muted">
              Content
              <br />
              Strategy
              <br />
              Visuals
              <br />
              Storytelling
            </div>

            <figure className="about-hero-portrait pointer-events-none relative">
              <Image
                src="/images/about/kamila-portrait.png"
                alt="Kamila Meshaj portrait"
                width={3394}
                height={4525}
                priority
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 384px, 320px"
                className="about-hero-portrait-image h-auto w-full object-contain"
              />
            </figure>

            <div className="about-hero-identity relative z-30 mt-1 max-w-xs">
              <CameraAccent className="about-hero-camera absolute -right-1 -top-14 h-14 w-14 -rotate-6 text-green/75 sm:h-16 sm:w-16" />

              <p className="body-lg text-foreground">
                I&apos;m Kamila,
                <br />a Content Creator
                <br />
                &amp; Social Media Manager
                <br />
                based in Tirana.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section
        aria-labelledby="short-bio-title"
        className="grid gap-8 border-b border-border-soft py-14 sm:py-16 lg:grid-cols-[minmax(220px,0.35fr)_minmax(0,0.8fr)] lg:py-20"
        data-reveal="about-section"
      >
        <div>
          <h2 id="short-bio-title" className="eyebrow text-green">
            Profile
          </h2>
        </div>
        <div className="grid max-w-3xl gap-6">
          <p className="body-lg text-foreground">
            My work spans social media management, content creation, brand
            positioning and promotional communication across beauty,
            service-based brands and public-sector communication.
          </p>
          <p className="body-copy max-w-2xl text-muted">
            I enjoy turning a brand&apos;s personality into content that feels
            intentional, visually consistent and easy to recognise.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="what-i-do-title"
        className="border-b border-border-soft py-14 sm:py-16 lg:py-20"
        data-reveal="about-section"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.35fr)_minmax(0,1fr)]">
          <div>
            <p className="eyebrow text-muted">Content / Social / Direction</p>
            <h2 id="what-i-do-title" className="heading-md mt-4 text-green">
              What I Do
            </h2>
          </div>

          <ol className="grid border-t border-border-soft sm:grid-cols-2">
            {capabilities.map((capability) => (
              <li
                key={capability.number}
                className="capability-item border-b border-border-soft py-7 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8 lg:py-8"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <span className="eyebrow text-muted">{capability.number}</span>
                  <h3 className="eyebrow text-right text-green">
                    {capability.title}
                  </h3>
                </div>
                <ul className="mt-6 grid gap-2 text-sm leading-6 text-foreground/75">
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="experience-title"
        className="border-b border-border-soft py-14 sm:py-16 lg:py-20"
        data-reveal="about-section"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.35fr)_minmax(0,1fr)]">
          <div>
            <p className="eyebrow text-muted">Selected</p>
            <h2 id="experience-title" className="heading-md mt-4 text-green">
              Experience
            </h2>
          </div>

          <div className="border-t border-border-soft">
            {experience.map((item) => (
              <article
                key={item.title}
                className="experience-row grid gap-6 border-b border-border-soft py-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.75fr)]"
              >
                <div>
                  <p className="eyebrow text-muted">{item.years}</p>
                  <h3 className="heading-md mt-3 max-w-md text-green">
                    {item.title}
                  </h3>
                  <p className="small-copy mt-3 text-foreground/70">
                    {item.context}
                  </p>
                </div>

                <div>
                  <p className="body-copy font-semibold text-foreground">
                    {item.role}
                  </p>
                  <p className="body-copy mt-4 max-w-2xl text-muted">
                    {item.summary}
                  </p>
                  {item.clients ? (
                    <ul className="mt-6 grid gap-3 border-t border-border-soft pt-5">
                      {item.clients.map((client) => (
                        <li
                          key={client}
                          className="small-copy text-foreground/75"
                        >
                          {client}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="background-title"
        className="grid gap-10 pt-14 sm:pt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.45fr)] lg:items-start lg:pt-20"
        data-reveal="about-section"
      >
        <div>
          <p className="eyebrow text-muted">Background</p>
          <h2 id="background-title" className="heading-md mt-4 max-w-2xl text-green">
            A structured background, kept in service of the creative work
          </h2>
        </div>

        <div className="border-t border-border-soft">
          {education.map((item) => (
            <div key={item.degree} className="border-b border-border-soft py-6">
              <p className="body-copy font-semibold text-foreground">
                {item.degree}
              </p>
              <p className="small-copy mt-2 text-muted">{item.institution}</p>
              <p className="eyebrow mt-4 text-green">{item.years}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

type CameraAccentProps = {
  className?: string;
};

function CameraAccent({ className = "" }: CameraAccentProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 30.5h11.5l4.2-6h10.6l4.2 6H60c4.4 0 8 3.6 8 8v16.2c0 4.4-3.6 8-8 8H20c-4.4 0-8-3.6-8-8V38.5c0-4.4 3.6-8 8-8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M40 55.5c6.4 0 11.5-5.1 11.5-11.5S46.4 32.5 40 32.5 28.5 37.6 28.5 44 33.6 55.5 40 55.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M59 38.5h.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="M30 19.5h20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
