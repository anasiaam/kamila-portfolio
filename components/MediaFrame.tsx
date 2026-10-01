import Image from "next/image";

type MediaFrameProps = {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  reveal?: "home-frame";
  motionDelay?: string;
  priority?: boolean;
  sizes?: string;
};

export function MediaFrame({
  src,
  alt,
  label = "FRAME",
  className = "",
  reveal,
  motionDelay,
  priority = false,
  sizes = "(min-width: 1280px) 420px, (min-width: 768px) 45vw, 90vw",
}: MediaFrameProps) {
  return (
    <figure
      className={[
        "relative aspect-square overflow-hidden border border-border-soft bg-surface",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-motion-delay={motionDelay}
      data-reveal={reveal}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.22em] text-green">
          {label}
        </div>
      )}
      {label ? (
        <figcaption className="eyebrow absolute left-4 top-4 text-green">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
