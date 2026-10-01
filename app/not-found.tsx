import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-[var(--section-space-md)]">
      <section className="min-h-[48vh] border-b border-border-soft pb-14 sm:pb-16">
        <p className="eyebrow text-green">404</p>
        <h1 className="display-lg mt-6 max-w-4xl text-green">
          This page wandered off
        </h1>
        <Link
          href="/"
          className="editorial-cta eyebrow mt-10 inline-flex w-fit items-center gap-4 border-b border-green pb-2 text-green hover:text-foreground"
        >
          BACK HOME
          <span className="editorial-cta-arrow" aria-hidden="true">→</span>
        </Link>
      </section>
    </Container>
  );
}
