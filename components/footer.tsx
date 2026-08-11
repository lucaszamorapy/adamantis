import { socialLinks } from "@/app/config/lists";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container">
      <div className="border-t border-white/10 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs font-medium tracking-wide text-muted-foreground">
            © ADAMANTIS SOLUÇÕES DIGITAIS {new Date().getFullYear()}. TODOS OS
            DIREITOS RESERVADOS.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex size-8 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:text-primary"
              >
                <social.icon size={18} strokeWidth={2} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
