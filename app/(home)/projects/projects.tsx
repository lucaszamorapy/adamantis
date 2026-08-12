"use client";
import { getWhatsAppLink } from "@/app/config/global-functions";
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

const Projects = ({ isMobile }: { isMobile: boolean }) => {
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
              <Card
                key={index}
                className={`${!isMobile ? "h-125 w-92.5" : "h-112.5 w-67.5"} overflow-hidden`}
              >
                {!isMobile ? (
                  <div className="relative h-125 w-92.5">
                    <Link
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover"
                      />
                    </Link>
                  </div>
                ) : (
                  <div className="relative h-112.5 w-67.5">
                    <Link
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={s.imageMobile}
                        alt={s.title}
                        fill
                        className="object-cover"
                      />
                    </Link>
                  </div>
                )}

                <CardHeader className="lg:h-60">
                  <CardTitle className="text-primary">{s.title}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={getWhatsAppLink(
                      `Olá, recentemente vi o projeto ${s.title} da vitrine da Adamantis e gostaria de saber mais inforamações sobre`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full">Saiba mais</Button>
                  </Link>
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
