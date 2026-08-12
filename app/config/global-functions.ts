/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
const WHATSAPP_NUMBER = "5513991336772";
const WHATSAPP_MESSAGE = "Olá, vim pelo site e gostaria de mais informações";

export const getWhatsAppLink = (message: string = WHATSAPP_MESSAGE): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const apiFetch = async (url: string, method: "GET" | "POST" | "PUT" | "DELETE", otherOptions?: any): Promise<unknown> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    ...otherOptions,
  })
  const data = await res.json();
  if (!res.ok) {
    throw new Error(typeof data === "string" ? data : data?.error ?? "Erro desconhecido");
  }
  return data;
}

export const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits.replace(/^(\d{0,2})/, "($1");
  }
  if (digits.length <= 6) {
    return digits.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
  }
  if (digits.length <= 10) {
    return digits.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  }
  return digits.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
};

