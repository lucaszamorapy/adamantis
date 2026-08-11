import { projects } from "@/app/config/lists";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projetos" className="flex flex-col gap-5">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="subheadline">Projetos & Modelos.</span>
          <h1 className="text-4xl">Conheça um pouco da nossa vitrine</h1>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-5">
          {projects.map((s, index) => {
            return (
              <Card key={index} className="h-125 w-92.5 overflow-hidden">
                <div className="relative h-125 w-92.5">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="lg:h-60">
                  <CardTitle className="text-primary">{s.title}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link target="_blank" href={s.link}>
                      Visitar
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
