export type ProjectGalleryItemType = "image" | "video";
export type ProjectGalleryItemAspect = "square" | "portrait";

export interface ProjectGalleryItem {
  id: string;
  type: ProjectGalleryItemType;
  label: string;
  src: string;
  poster?: string;
  alt: string;
  aspect: ProjectGalleryItemAspect;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  categories: string[];
  image: string;
  imageAlt: string;
  gallery: ProjectGalleryItem[];
}

export const projects: Project[] = [
  {
    id: "ola-xhari-hair-salon",
    number: "02",
    title: "Ola Xhari Hair Salon",
    slug: "ola-xhari-hair-salon",
    categories: ["Content Creation", "Social Media", "Reels", "Campaigns"],
    image: "/images/placeholders/project-01.svg",
    imageAlt: "Placeholder for Ola Xhari Hair Salon project",
    gallery: [
      {
        id: "ola-01",
        type: "image",
        label: "POST 01",
        src: "/media/ola-xhari/ola-01.webp",
        alt: "Ola Xhari Hair Salon campaign graphic",
        aspect: "square",
        width: 1254,
        height: 1254,
      },
      {
        id: "ola-02",
        type: "image",
        label: "POST 02",
        src: "/media/ola-xhari/ola-02.webp",
        alt: "Ola Xhari Hair Salon social content preview",
        aspect: "portrait",
        width: 1290,
        height: 1748,
      },
      {
        id: "ola-03",
        type: "image",
        label: "POST 03",
        src: "/media/ola-xhari/ola-03.webp",
        alt: "Ola Xhari Hair Salon social story visual",
        aspect: "portrait",
        width: 1205,
        height: 1900,
      },
      {
        id: "ola-04",
        type: "image",
        label: "POST 04",
        src: "/media/ola-xhari/ola-04.webp",
        alt: "Ola Xhari Hair Salon promotional content design",
        aspect: "portrait",
        width: 1290,
        height: 1609,
      },
      {
        id: "ola-05",
        type: "video",
        label: "REEL 01",
        src: "/media/ola-xhari/ola-05.mp4",
        poster: "/media/ola-xhari/ola-05-poster.webp",
        alt: "Ola Xhari Hair Salon reel poster with promotional envelope artwork",
        aspect: "portrait",
        width: 1080,
        height: 1920,
      },
      {
        id: "ola-06",
        type: "image",
        label: "PRODUCT 01",
        src: "/media/ola-xhari/ola-06.webp",
        alt: "Ola Xhari Hair Salon product styling with Olaplex hair care",
        aspect: "portrait",
        width: 1068,
        height: 1900,
      },
      {
        id: "ola-07",
        type: "image",
        label: "SALON 01",
        src: "/media/ola-xhari/ola-07.webp",
        alt: "Ola Xhari Hair Salon wash station product scene",
        aspect: "portrait",
        width: 1425,
        height: 1900,
      },
    ],
  },
  {
    id: "laundry-room",
    number: "01",
    title: "The Laundry Room",
    slug: "the-laundry-room",
    categories: ["Brand Identity", "Content Creation", "Social Media", "Campaigns"],
    image: "/images/placeholders/project-02.svg",
    imageAlt: "Placeholder for The Laundry Room project",
    gallery: [
      {
        id: "laundry-04",
        type: "image",
        label: "POST 03",
        src: "/media/laundry-room/laundry-04.webp",
        alt: "The Laundry Room storefront with illuminated signage and shop interior",
        aspect: "portrait",
        width: 1290,
        height: 1704,
      },
      {
        id: "laundry-01",
        type: "image",
        label: "POST 01",
        src: "/media/laundry-room/laundry-01.webp",
        alt: "The Laundry Room branded social media post",
        aspect: "portrait",
        width: 1122,
        height: 1402,
      },
      {
        id: "laundry-02",
        type: "image",
        label: "POST 02",
        src: "/media/laundry-room/laundry-02.webp",
        alt: "The Laundry Room promotional social media artwork",
        aspect: "portrait",
        width: 1122,
        height: 1402,
      },
      {
        id: "laundry-03",
        type: "image",
        label: "LOGO 01",
        src: "/media/laundry-room/laundry-03.webp",
        alt: "The Laundry Room minimalist monogram logo graphic",
        aspect: "square",
        width: 1600,
        height: 1600,
      },
      {
        id: "laundry-05",
        type: "image",
        label: "POST 04",
        src: "/media/laundry-room/laundry-05.webp",
        alt: "The Laundry Room content design preview",
        aspect: "portrait",
        width: 1290,
        height: 1602,
      },
      {
        id: "laundry-06",
        type: "image",
        label: "POST 05",
        src: "/media/laundry-room/laundry-06.webp",
        alt: "The Laundry Room vertical social content design",
        aspect: "portrait",
        width: 1287,
        height: 1900,
      },
    ],
  },
  {
    id: "beauty-nail-content",
    number: "03",
    title: "Beauty / Nail Content",
    slug: "beauty-nail-content",
    categories: ["Content Creation", "Reels", "Visual Direction", "Social Media"],
    image: "/images/placeholders/project-03.svg",
    imageAlt: "Placeholder for Beauty / Nail Content project",
    gallery: [
      {
        id: "nail-01",
        type: "image",
        label: "POST 01",
        src: "/media/nail-content/nail-01.webp",
        alt: "Beauty and nail content social media visual",
        aspect: "portrait",
        width: 1072,
        height: 1900,
      },
      {
        id: "nail-02",
        type: "image",
        label: "POST 02",
        src: "/media/nail-content/nail-02.webp",
        alt: "Beauty and nail content promotional story design",
        aspect: "portrait",
        width: 1287,
        height: 1900,
      },
      {
        id: "nail-03",
        type: "image",
        label: "POST 03",
        src: "/media/nail-content/nail-03.webp",
        alt: "Beauty and nail content social design",
        aspect: "portrait",
        width: 1183,
        height: 1900,
      },
    ],
  },
  {
    id: "public-campaigns",
    number: "04",
    title: "Public Campaigns",
    slug: "public-campaigns",
    categories: ["Campaign Design", "Public Communication", "Social Content", "Visual Communication"],
    image: "/images/placeholders/project-04.svg",
    imageAlt: "Placeholder for Public Campaigns project",
    gallery: [
      {
        id: "public-01",
        type: "image",
        label: "CAMPAIGN 01",
        src: "/media/public-campaigns/public-01.webp",
        alt: "Public campaign communication design",
        aspect: "portrait",
        width: 1290,
        height: 1829,
      },
      {
        id: "public-02",
        type: "image",
        label: "CAMPAIGN 02",
        src: "/media/public-campaigns/public-02.webp",
        alt: "Public campaign social media information design",
        aspect: "portrait",
        width: 1290,
        height: 1891,
      },
      {
        id: "public-03",
        type: "image",
        label: "CAMPAIGN 03",
        src: "/media/public-campaigns/public-03.webp",
        alt: "Public campaign announcement visual",
        aspect: "portrait",
        width: 1179,
        height: 1900,
      },
      {
        id: "public-04",
        type: "image",
        label: "CAMPAIGN 04",
        src: "/media/public-campaigns/public-04.webp",
        alt: "Public campaign content layout",
        aspect: "portrait",
        width: 1254,
        height: 1900,
      },
      {
        id: "public-05",
        type: "image",
        label: "CAMPAIGN 05",
        src: "/media/public-campaigns/public-05.webp",
        alt: "Public campaign social communication graphic",
        aspect: "portrait",
        width: 1177,
        height: 1900,
      },
    ],
  },
];
