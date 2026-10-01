import { Container } from "@/components/Container";

const footerItems = [
  {
    label: "Email",
    href: "mailto:kamilameshaj14@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kamila-meshaj-b6743a230",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <Container className="py-[var(--section-space-sm)]">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(280px,0.45fr)] md:items-start">
          <div>
            <p className="eyebrow text-green">Kamila Meshaj</p>
            <p className="heading-md mt-5 max-w-md text-green">
              Content Creator &
              <br />
              Social Media Manager
            </p>
          </div>

          <nav aria-label="Footer links">
            <ul className="grid gap-4 text-sm font-bold uppercase tracking-[0.18em] text-foreground/70">
              {footerItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="footer-link"
                    href={item.href}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    target={item.external ? "_blank" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="small-copy mt-12 border-t border-border-soft pt-6 text-muted">
          Copyright 2026 Kamila Meshaj. Portfolio foundation.
        </p>
      </Container>
    </footer>
  );
}
