"use client";

import type { CSSProperties } from "react";
import { useRef, useState } from "react";

type PlayableVideoProps = {
  ariaLabel: string;
  className?: string;
  fallbackHref: string;
  playLabel: string;
  poster?: string;
  src: string;
  style?: CSSProperties;
};

export function PlayableVideo({
  ariaLabel,
  className = "",
  fallbackHref,
  playLabel,
  poster,
  src,
  style,
}: PlayableVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const handlePlay = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    setShowOverlay(false);
    video.play().catch(() => {
      setShowOverlay(true);
    });
  };

  return (
    <div className="playable-video h-full w-full">
      <video
        ref={videoRef}
        aria-label={ariaLabel}
        className={className}
        controls
        onEnded={() => setShowOverlay(true)}
        onPause={() => setShowOverlay(true)}
        onPlay={() => setShowOverlay(false)}
        playsInline
        poster={poster}
        preload="metadata"
        src={src}
        style={style}
      >
        <a href={fallbackHref}>View video</a>
      </video>

      {showOverlay ? (
        <button
          type="button"
          className="video-play-button"
          aria-label={playLabel}
          onClick={handlePlay}
        >
          <span aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
