"use client";
import { getWhatsAppLink } from "@/app/config/global-functions";
import { ourServices } from "@/app/config/lists";
import { IOurServices } from "@/app/config/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useEffect, useState } from "react";

const OurServices = () => {
  const [services, setServices] = useState<IOurServices[]>([]);

  useEffect(() => {
    const initService = () => {
      const servicesFilter = ourServices.filter(
        (service) => service.type === "Landing Pages",
      );
      setServices(servicesFilter);
    };
    initService();
  }, []);

  const handleServiceFilter = (type: string) => {
    const servicesFilter = ourServices.filter(
      (service) => service.type === type,
    );

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
        {services.map((s, index) =>
          s.services.map((i, itemIndex) => {
            return (
              <Card
                key={`${index}-${itemIndex}`}
                className={`
            relative flex flex-col overflow-hidden
            ${i.recommend ? "border-blue-500/50 shadow-lg shadow-blue-500/10" : ""}
          `}
              >
                {i.recommend && (
                  <div className="absolute top-0 right-0">
                    <div
                      className="rounded-bl-xl px-4 py-1.5 text-xs font-semibold text-white"
                      style={{ backgroundColor: i.color }}
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
                        backgroundColor: i.color,
                        boxShadow: `0 0 12px ${i.color}80`,
                      }}
                    />
                    <CardTitle
                      className="text-xl font-semibold"
                      style={{ color: i.color }}
                    >
                      {i.plan}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-muted-foreground">
                      A partir de
                    </span>
                    <span className="text-4xl font-bold tracking-tight">
                      R$ {i.price.toLocaleString("pt-BR")}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 gap-5 flex-col">
                  <div className="h-px w-full bg-border" />
                  <ul className="flex flex-1 flex-col gap-4">
                    {i.items.map((item, itemIdx) => {
                      const isIncluded = item.startsWith("Tudo do");
                      return (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                            style={{
                              backgroundColor: `${i.color}15`,
                              color: i.color,
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

                  <Link
                    href={getWhatsAppLink(
                      `Olá, gostaria de contratar o serviço de ${s.type} do plano ${i.plan}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant={"outline"}
                      style={{
                        borderColor: `${i.color}60`,
                        color: i.color,
                        backgroundColor: `${i.color}08`,
                      }}
                    >
                      Escolher {i.plan}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          }),
        )}
      </div>
    </section>
  );
};

export default OurServices;
