const WHATSAPP_NUMBER = "5513991336772";
const WHATSAPP_MESSAGE = "Olá, vim pelo site e gostaria de mais informações";

export const getWhatsAppLink = (message: string = WHATSAPP_MESSAGE): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}