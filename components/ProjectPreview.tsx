import type { Project } from "@/data/projects";
import { MediaFrame } from "@/components/MediaFrame";

type ProjectPreviewProps = {
  project: Project;
  className?: string;
};

export function ProjectPreview({ project, className = "" }: ProjectPreviewProps) {
  return (
    <article className={["group min-w-0", className].filter(Boolean).join(" ")}>
      <MediaFrame
        src={project.image}
        alt={project.imageAlt}
        label={`FRAME ${project.number}`}
      />
      <div className="mt-6">
        <p className="eyebrow text-green">
          {project.number} / {project.categories[0]}
        </p>
        <h2 className="heading-md mt-3 text-green">
          {project.title}
        </h2>
        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          {project.categories.map((category) => (
            <li
              key={category}
              className="small-copy border-b border-border-soft pb-1 text-foreground/70"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
