import { sendEmail } from "@/app/actions/contact";
import { IContact } from "@/app/config/types";
import { contact_service } from "@/generated/prisma/enums";
import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const body = await request.json()
    const serviceMap: Record<string, contact_service> = {
      "Landing Pages": "Landing_Pages",
      "Sites Institucionais": "Sites_Institucionais",
      "Sistemas Web": "Sistemas_Web",
      "Identidade Visual": "Identidade_Visual",
    };

    const service = serviceMap[body.service];
    if (!service) {
      throw new Error("Serviço inválido");
    }
    const res = await prisma.contact.create({ data: { ...body, service } })
    if (res.contact_id) {
      await sendEmail(res as IContact);
    }
    return NextResponse.json("E-mail enviado com sucesso!", { status: 201 })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 })
    } else {
      return NextResponse.json(
        { error: "Ocorreu um erro ao enviar o seu contato." },
        { status: 500 })
    }
  }
}

