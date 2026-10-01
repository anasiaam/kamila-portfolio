import Link from "next/link";
import { Container } from "@/components/Container";
import { MediaFrame } from "@/components/MediaFrame";
import { buildPageMetadata, siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <Container className="py-12 sm:py-16 lg:py-18 xl:py-20">
      <section
        className="border-b border-border-soft pb-12 sm:pb-16 lg:pb-18 xl:pb-20"
        aria-labelledby="home-hero-title"
      >
        <div className="relative">
          <div className="max-w-4xl lg:max-w-none lg:pr-[32rem] xl:pr-[36rem]">
            <p
              className="eyebrow max-w-[19rem] text-green"
              data-motion-delay="0"
              data-reveal="fade-up"
            >
              Content Creator &
              <br />
              Social Media Manager
            </p>

            <h1
              id="home-hero-title"
              className="mt-12 font-serif text-7xl font-medium leading-[0.82] text-green sm:mt-14 sm:text-8xl md:text-9xl lg:mt-14 lg:text-[9.5rem] xl:text-[10.75rem]"
            >
              <span
                className="block"
                data-motion-delay="1"
                data-reveal="fade-up"
              >
                Kamila
              </span>
              <span
                className="block"
                data-motion-delay="2"
                data-reveal="fade-up"
              >
                Meshaj
              </span>
            </h1>

            <p
              className="mt-8 max-w-xl font-serif text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl lg:mt-9 lg:text-6xl"
              data-motion-delay="3"
              data-reveal="fade-up"
            >
              Visual storytelling
              <br />
              for brands that <em className="font-normal">stand out</em>
            </p>

            <p
              className="body-copy mt-7 max-w-lg text-muted"
              data-motion-delay="4"
              data-reveal="fade-up"
            >
              Social-first content, creative campaigns and brand experiences.
            </p>

            <Link
              href="/work"
              className="editorial-cta eyebrow mt-8 inline-flex w-fit items-center gap-4 border-b border-green pb-2 text-green hover:text-foreground"
              data-motion-delay="5"
              data-reveal="fade-up"
            >
              VIEW MY WORK
              <span className="editorial-cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-[1fr_0.7fr] items-start gap-4 sm:max-w-2xl sm:grid-cols-[1fr_0.74fr_0.62fr] lg:absolute lg:right-0 lg:top-3 lg:mt-0 lg:h-[34rem] lg:w-[32rem] lg:max-w-none xl:h-[38rem] xl:w-[36rem]">
            <MediaFrame
              src="/media/ola-xhari/ola-06.webp"
              alt="Ola Xhari Hair Salon editorial product styling with Olaplex hair care"
              label=""
              className="col-span-2 w-full max-w-[340px] sm:col-span-1 lg:absolute lg:right-28 lg:top-0 lg:w-[320px] xl:w-[340px]"
              motionDelay="2"
              priority
              reveal="home-frame"
              sizes="(min-width: 1024px) 340px, (min-width: 640px) 33vw, 90vw"
            />

            <MediaFrame
              src="/media/laundry-room/laundry-04.webp"
              alt="The Laundry Room storefront with illuminated signage and shop interior"
              label=""
              className="w-full max-w-[230px] translate-y-7 sm:translate-y-12 lg:absolute lg:right-0 lg:top-44 lg:w-[218px] lg:translate-y-0 xl:top-48 xl:w-[230px]"
              motionDelay="3"
              reveal="home-frame"
              sizes="(min-width: 1024px) 230px, (min-width: 640px) 24vw, 42vw"
            />

            <MediaFrame
              src="/media/public-campaigns/public-04.webp"
              alt="Public environmental campaign collage from a community cleanup in Tirana"
              label=""
              className="w-full max-w-[200px] translate-y-2 sm:translate-y-24 lg:absolute lg:right-64 lg:top-64 lg:w-[178px] lg:translate-y-0 xl:right-72 xl:top-72 xl:w-[196px]"
              motionDelay="4"
              reveal="home-frame"
              sizes="(min-width: 1024px) 200px, (min-width: 640px) 20vw, 42vw"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
