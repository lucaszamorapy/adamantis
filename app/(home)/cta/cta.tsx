import { getWhatsAppLink } from "@/app/config/global-functions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-background px-5 py-10 text-center shadow-lg shadow-black/20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <h2 className="relative text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Tem algum projeto em mente?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
          Conte pra gente sua ideia e descubra como podemos transformá-la em um
          produto digital de verdade.
        </p>
        <Link
          href={getWhatsAppLink(
            `Olá, vim pelo site e gostaria de discutir o projeto que tenho mente com vocês`,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-5"> Fale conosco</Button>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
