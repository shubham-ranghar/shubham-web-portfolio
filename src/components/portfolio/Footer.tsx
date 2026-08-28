import { navLinks, profile } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
          {navLinks.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() =>
                document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm text-muted-foreground hover-smooth hover:text-primary"
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
