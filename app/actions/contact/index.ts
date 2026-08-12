"use server"
import { IContact } from '@/app/config/types';
import nodemailer from 'nodemailer'

export const sendEmail = async (data: IContact) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const subject = `Novo contato pelo site #${data.contact_id}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f4; padding: 20px;">
      <div style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        
        <div style="background-color: #1a1a2e; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Novo Contato pelo Site</h1>
        </div>

        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #666666; font-size: 14px; width: 120px;"><strong>Nome</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #333333; font-size: 14px;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #666666; font-size: 14px;"><strong>E-mail</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #333333; font-size: 14px;">
                <a href="mailto:${data.email}" style="color: #1a1a2e; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #666666; font-size: 14px;"><strong>Celular</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #333333; font-size: 14px;">
                <a href="https://wa.me/55${data.phone.replace(/\D/g, '')}" style="color: #1a1a2e; text-decoration: none;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #666666; font-size: 14px;"><strong>Serviço</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eeeeee; color: #333333; font-size: 14px;">${data.service}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="color: #666666; font-size: 14px; margin: 0 0 8px 0;"><strong>Mensagem</strong></p>
            <p style="color: #333333; font-size: 14px; line-height: 1.6; background-color: #f9f9f9; padding: 16px; border-radius: 6px; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>

        <div style="background-color: #f4f4f4; padding: 16px; text-align: center;">
          <p style="color: #999999; font-size: 12px; margin: 0;">Enviado automaticamente pelo formulário de contato do site</p>
        </div>

      </div>
    </div>
  `

  await transporter.sendMail({
    from: `"Adamantis Soluções Digitais" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: data.email,
    subject: subject,
    html,
  })
}