import { ArrowRightIcon, Badge } from "@/components";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-24 lg:py-32 bg-[url('/food-pattern.svg')]">
      <div className="container flex items-center gap-16">
        <div className="flex flex-col items-center lg:items-start gap-8 lg:w-1/2 text-center lg:text-left">
          <Badge>Akceptujemy zamówienia online</Badge>

          <h1 className="text-5xl lg:text-6xl font-medium">
            Niezrównane Smaki{" "}
            <span className="text-primary-500">Włoskiej Pizzy</span>
          </h1>

          <p className="text-neutral-600">
            Witaj w naszej pizzerii online! Odkryj prawdziwy smak Włoch w
            wygodny sposób. Zamów pizzę z najlepszymi składnikami i poczuj
            radość z jedzenia w każdym kawałku.
          </p>

          <Link className="btn btn-lg" href="/menu">
            Zobacz Menu <ArrowRightIcon />
          </Link>
        </div>

        <div className="relative hidden lg:block w-1/2">
          <div className="relative w-3/4 aspect-square">
            <Image src="/images/hero-pizza-1.png" alt="pizza" fill />
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3/5 aspect-square">
            <Image src="/images/hero-pizza-2.png" alt="pizza" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
