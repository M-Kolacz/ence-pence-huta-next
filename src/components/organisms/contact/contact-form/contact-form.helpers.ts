import { z } from "zod";

export const ContactFormSchema = z.object({
  email: z
    .string({ message: "Adres e-mail jest wymagany." })
    .email({ message: "Podany adres e-mail ma nieprawidłowy format." }),
  topic: z
    .string({ message: "Temat wiadomości jest wymagany." })
    .min(2, "Temat wiadomości musi mieć co najmniej 2 znaki.")
    .max(50, "Temat wiadomości nie może mieć więcej niż 50 znaków."),
  message: z
    .string({ message: "Wiadomość jest wymagana." })
    .min(10, "Wiadomość musi mieć co najmniej 10 znaków.")
    .max(500, "Wiadomość nie może mieć więcej niż 500 znaków."),
});

export const sendEmail = async (data: {
  email: string;
  message: string;
  topic: string;
}) => {
  return await fetch(process.env.EMAIL_API_URL, {
    method: "POST",
    body: JSON.stringify({
      service_id: process.env.EMAIL_SERVICE_ID,
      template_id: process.env.EMAIL_TEMPLATE_ID,
      user_id: process.env.EMAIL_PUBLIC_KEY,
      accessToken: process.env.EMAIL_PRIVATE_KEY,
      template_params: data,
    }),
    headers: { "Content-Type": "application/json" },
  });
};
