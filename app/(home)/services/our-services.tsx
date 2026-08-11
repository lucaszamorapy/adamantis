"use client";
import { ourServices } from "@/app/config/lists";
import { IItemService } from "@/app/config/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardAction,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const OurServices = () => {
  const [services, setServices] = useState<IItemService[]>(
    ourServices[0].services,
  );

  const handleServiceFilter = (type: string) => {
    const servicesFilter = ourServices
      .filter((service) => service.type === type)
      .flatMap((e) => {
        return e.services;
      });
    setServices(servicesFilter);
  };

  return (
    <section id="servicos" className="flex flex-col gap-10">
      <div className="grid lg:grid-cols-[2fr_3fr] grid-cols-1 gap-10 items-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="subheadline">Nosso serviços.</span>
            <h1 className="text-4xl">O que nós oferecemos</h1>
          </div>
        </div>
        <span>
          Oferecemos soluções digitais completas, desenvolvidas para ajudar sua
          empresa a crescer de forma mais inteligente. Unimos criatividade e
          tecnologia para gerar impacto real. Seja para lançar um novo produto
          ou renovar sua marca, nossa equipe está aqui para transformar sua
          visão em vida — com eficiência, beleza e propósito.
        </span>
      </div>
      <Select onValueChange={handleServiceFilter} defaultValue="Landing Pages">
        <SelectTrigger className="w-full md:max-w-72">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Serviços</SelectLabel>
            {ourServices.map((e, index) => {
              return (
                <SelectItem key={index} value={e.type}>
                  {e.type}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {services.map((s, index) => {
          return (
            <Card
              key={index}
              className={`
          relative flex flex-col overflow-hidden
          ${s.recommend ? "border-blue-500/50 shadow-lg shadow-blue-500/10" : ""}
        `}
            >
              {s.recommend && (
                <div className="absolute top-0 right-0">
                  <div
                    className="rounded-bl-xl px-4 py-1.5 text-xs font-semibold text-white"
                    style={{ backgroundColor: s.color }}
                  >
                    Recomendado
                  </div>
                </div>
              )}

              <CardHeader className="gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full shadow-sm"
                    style={{
                      backgroundColor: s.color,
                      boxShadow: `0 0 12px ${s.color}80`,
                    }}
                  />
                  <CardTitle
                    className="text-xl font-semibold"
                    style={{ color: s.color }}
                  >
                    {s.plan}
                  </CardTitle>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-muted-foreground">
                    A partir de
                  </span>
                  <span className="text-4xl font-bold tracking-tight">
                    R$ {s.price.toLocaleString("pt-BR")}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 gap-5 flex-col">
                <div className="h-px w-full bg-border" />
                <ul className="flex flex-1 flex-col gap-4">
                  {s.items.map((item, itemIndex) => {
                    const isIncluded = item.startsWith("Tudo do");
                    return (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{
                            backgroundColor: `${s.color}15`,
                            color: s.color,
                          }}
                        >
                          ✓
                        </span>

                        <span
                          className={
                            isIncluded ? "font-medium text-foreground" : ""
                          }
                        >
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <Button
                  variant={"outline"}
                  style={{
                    borderColor: `${s.color}60`,
                    color: s.color,
                    backgroundColor: `${s.color}08`,
                  }}
                >
                  Escolher {s.plan}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;
