import { FooterContent } from "./footer-content";
import { FooterCopyright } from "./footer-copyright";

export function Footer() {
  return (
    <footer className="border-t border-neutral-50">
      <FooterContent />
      <FooterCopyright />
    </footer>
  );
}
