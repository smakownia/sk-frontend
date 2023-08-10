import Link from "next/link";
import { FacebookIcon, GithubIcon, InstagramIcon, Logo } from "@/components";

export function FooterContent() {
  return (
    <div className="container flex flex-col gap-6 py-8">
      <Logo />
      <p className="max-w-xl text-neutral-600">
        Tworzymy nieodparty smak w każdym kawałku, przynosząc doświadczenie
        pizzerii pod Twoje drzwi!
      </p>
      <ul className="flex gap-4">
        {[
          { Icon: FacebookIcon, href: "/facebook" },
          { Icon: GithubIcon, href: "/github" },
          { Icon: InstagramIcon, href: "/instagram" },
        ].map(({ Icon, href }) => (
          <li key={href}>
            <Link href={href}>
              <Icon
                className={`w-6 h-6 text-primary-500 transition-colors 
                          hover:text-primary-600`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
