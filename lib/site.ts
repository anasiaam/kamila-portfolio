import type { Metadata } from "next";

const fallbackSiteUrl = "http://localhost:3000";

function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawUrl) {
    return new URL(fallbackSiteUrl);
  }

  const candidate = /^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;

  try {
    return new URL(candidate);
  } catch {
    return new URL(fallbackSiteUrl);
  }
}

export const siteConfig = {
  name: "Kamila Meshaj",
  title: "Kamila Meshaj — Content Creator & Social Media Manager",
  titleTemplate: "%s — Kamila Meshaj",
  description:
    "Content creator and social media manager creating visual storytelling, social-first content and brand communication across beauty, services and public campaigns.",
  jobTitle: "Content Creator & Social Media Manager",
  email: "kamilameshaj14@gmail.com",
  linkedIn: "https://www.linkedin.com/in/kamila-meshaj-b6743a230",
  locale: "en_US",
  url: getSiteUrl(),
  ogImage: "/opengraph-image",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataInput = {
  title?: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.title;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} portfolio preview`,
        },
      ],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.jobTitle,
    url: absoluteUrl("/"),
    sameAs: [siteConfig.linkedIn],
  };
}
