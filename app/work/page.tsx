import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { WorkProjectChapter } from "@/components/WorkProjectChapter";
import { projects } from "@/data/projects";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Selected Work",
  description:
    "Selected content creation, social media, brand storytelling and campaign work by Kamila Meshaj.",
  path: "/work",
});

const workProjectOrder = [
  "laundry-room",
  "ola-xhari-hair-salon",
  "beauty-nail-content",
  "public-campaigns",
];

const orderedProjects = workProjectOrder
  .map((projectId) => projects.find((project) => project.id === projectId))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

export default function WorkPage() {
  return (
    <Container className="py-[var(--section-space-md)]">
      <SectionHeader
        number="02"
        eyebrow="Selected work"
        heading="A curated visual archive"
        description="A curated selection of content creation, social media, brand storytelling and visual communication."
      />

      <div className="mt-14">
        {orderedProjects.map((project) => (
          <WorkProjectChapter
            key={project.id}
            project={project}
            align={Number(project.number) % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </Container>
  );
}
