export default function Footer() {
  return (
    <footer className="border-t border-border mt-8">
      <div className="container-page py-9 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
        <span className="font-display text-sm text-muted-foreground">
          Aamod Sathe
        </span>
        <ul className="flex gap-6 list-none">
          <li>
            <a
              href="https://linkedin.com/in/aamodsathe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aamodsathe2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:aamod.sathe@gmail.com"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
