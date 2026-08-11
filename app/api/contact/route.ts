import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const body = await request.json()
    const res = await prisma.contact.create({ data: body })
    return NextResponse.json(res, { status: 201 })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        new Error(error.message),
        { status: 500 })
    } else {
      return NextResponse.json(
        new Error("Ocorreu um erro ao enviar o seu contato."),
        { status: 500 })
    }
  }
}

