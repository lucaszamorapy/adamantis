"use client";
import { services, strategys } from "@/app/config/lists";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Start = () => {
  return (
    <section id="inicio">
      <div className="grid lg:grid-cols-[2fr_3fr] grid-cols-1 gap-10 items-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="subheadline">
              O primeiro capítulo começa aqui.
            </span>
            <h1 className="text-4xl">
              <b>Tecnologia</b>, <b>design</b> e <b>estratégia</b> unidos para
              criar experiências digitais que deixam uma marca.
            </h1>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            {services.map((s: string) => {
              return (
                <Badge key={s} variant="secondary">
                  {s}
                </Badge>
              );
            })}
          </div>
          <Link
            href={"#servicos"}
            className="lg:w-93.75 subheadline-variant group relative py-1 transition-colors duration-300 hover:text-foreground"
          >
            Seja o primeiro a construir com a gente. ➝
            <span
              className={cn(
                "absolute -bottom-0.5 left-1/2 h-[1.5px] w-0 -translate-x-1/2 rounded-full bg-primary",
                "transition-all duration-300 ease-out group-hover:w-full",
              )}
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {strategys.map((s, index) => {
            return (
              <Card className="w-full" key={index}>
                <CardHeader>
                  <CardTitle className="text-primary">{s.title}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Start;
