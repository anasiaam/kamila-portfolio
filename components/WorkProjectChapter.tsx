import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project, ProjectGalleryItem } from "@/data/projects";
import { PlayableVideo } from "@/components/PlayableVideo";

type ProjectChapterProps = {
  project: Project;
  align?: "left" | "right";
};

export function WorkProjectChapter({
  project,
  align = "left",
}: ProjectChapterProps) {
  const isRightAligned = align === "right";
  const headingId = `${project.id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="border-t border-border-soft py-14 sm:py-16 lg:py-18"
      data-reveal="work-chapter"
    >
      <div
        className={[
          "grid gap-8 lg:grid-cols-[minmax(230px,0.34fr)_minmax(0,1fr)] lg:items-start",
          isRightAligned
            ? "lg:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.9fr)] xl:grid-cols-[minmax(0,1.7fr)_minmax(340px,0.9fr)]"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <ProjectInfo
          project={project}
          headingId={headingId}
          align={align}
          className={
            isRightAligned
              ? "lg:col-start-2 lg:ml-auto lg:max-w-[30rem] lg:text-right"
              : ""
          }
        />

        <div
          className={[
            "min-w-0",
            isRightAligned ? "lg:col-start-1 lg:row-start-1" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <GalleryRail
            items={project.gallery}
            ariaLabel={`${project.title} gallery`}
          />
        </div>
      </div>
    </section>
  );
}

type ProjectInfoProps = {
  project: Project;
  headingId: string;
  align: "left" | "right";
  className?: string;
};

function ProjectInfo({
  project,
  headingId,
  align,
  className = "",
}: ProjectInfoProps) {
  const isRightAligned = align === "right";

  return (
    <div className={["work-project-info min-w-0", className].filter(Boolean).join(" ")}>
      <p className="eyebrow text-green">{project.number}</p>
      <h2 id={headingId} className="heading-lg mt-4 max-w-md text-green">
        {project.title}
      </h2>
      <ul
        className={[
          "mt-6 flex flex-wrap gap-x-3 gap-y-2",
          isRightAligned ? "lg:justify-end" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {project.categories.map((category) => (
          <li
            key={category}
            className="small-copy border-b border-border-soft pb-1 text-foreground/70"
          >
            {category}
          </li>
        ))}
      </ul>
      <p className="scroll-cue eyebrow mt-8 text-muted">
        Scroll to explore <span aria-hidden="true">→</span>
      </p>
    </div>
  );
}

type GalleryRailProps = {
  items: ProjectGalleryItem[];
  ariaLabel: string;
};

export function GalleryRail({ items, ariaLabel }: GalleryRailProps) {
  return (
    <div
      aria-label={ariaLabel}
      className="work-gallery-panel horizontal-gallery -mx-5 overflow-x-auto px-5 pb-5 sm:-mx-8 sm:px-8 md:-mx-10 md:px-10 lg:mx-0 lg:px-0"
      role="region"
      tabIndex={0}
    >
      <ul className="flex w-max snap-x snap-proximity items-start gap-4 sm:gap-5">
        {items.map((item, index) => (
          <li
            key={item.id}
            className="snap-start"
            data-motion-delay={index < 4 ? String(index) : undefined}
          >
            <GalleryCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

type GalleryCardProps = {
  item: ProjectGalleryItem;
  compact?: boolean;
};

export function GalleryCard({ item, compact = false }: GalleryCardProps) {
  const isPortrait = item.aspect === "portrait";
  const isVideo = item.type === "video";
  const metadataType = isVideo ? "VIDEO" : undefined;
  const cardWidth = isPortrait
    ? compact
      ? "clamp(8.5rem, 28vw, 10rem)"
      : "clamp(15rem, 24vw, 19rem)"
    : compact
      ? "clamp(8.5rem, 28vw, 10rem)"
      : "clamp(17rem, 32vw, 24rem)";
  const mediaAspectRatio = isVideo
    ? "9 / 16"
    : isPortrait
      ? "4 / 5"
      : "1 / 1";
  const cardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: cardWidth,
  };
  const frameStyle: CSSProperties = {
    aspectRatio: mediaAspectRatio,
    background: "var(--surface)",
    flex: "0 0 auto",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  };
  const mediaStyle: CSSProperties = {
    background: "var(--surface)",
    display: "block",
    height: "100%",
    objectFit: "contain",
    width: "100%",
  };

  return (
    <figure
      className={[
        "work-gallery-card group relative overflow-hidden border border-border-soft bg-surface",
        isPortrait
          ? compact
            ? "w-[8.5rem] sm:w-[10rem]"
            : "w-[15rem] sm:w-[17rem] lg:w-[18rem] xl:w-[19rem]"
          : compact
            ? "w-[8.5rem] sm:w-[10rem]"
            : "w-[17rem] sm:w-[20rem] lg:w-[23rem] xl:w-[24rem]",
      ].join(" ")}
      data-media-kind={item.type}
      style={cardStyle}
    >
      <div
        className="work-gallery-media"
        data-aspect={item.aspect}
        data-type={item.type}
        style={frameStyle}
      >
        {isVideo ? (
          <PlayableVideo
            ariaLabel={item.alt}
            className="h-full w-full object-contain"
            fallbackHref={item.src}
            playLabel={
              item.id === "ola-05" ? "Play Ola Xhari video" : `Play ${item.label} video`
            }
            poster={item.poster}
            src={item.src}
            style={mediaStyle}
          />
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes={
              isPortrait
                ? "(min-width: 1280px) 304px, (min-width: 1024px) 288px, 272px"
                : "(min-width: 1280px) 384px, (min-width: 1024px) 368px, 320px"
            }
            className="h-full w-full object-contain"
            loading="lazy"
            style={mediaStyle}
          />
        )}
      </div>
      {metadataType ? (
        <figcaption className="work-gallery-caption eyebrow border-t border-border-soft px-4 py-3 text-green">
          {metadataType}
        </figcaption>
      ) : null}
    </figure>
  );
}
