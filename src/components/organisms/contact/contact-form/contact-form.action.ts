"use server";
import { ContactFormSchema, sendEmail } from "./contact-form.helpers";
import { parseWithZod } from "@conform-to/zod";

export const sendEmailServerAction = async (
  prevState: unknown,
  formData: FormData
) => {
  const submission = parseWithZod(formData, {
    schema: ContactFormSchema,
  });

  if (submission.status !== "success") {
    return {
      result: submission.reply(),
    };
  }

  const response = await sendEmail(submission.value).catch((error) => {
    console.error("🛑 Error occured while sending email", error);
    return { ok: false };
  });

  if (!response.ok) {
    return {
      status: "email-failed",
      result: submission.reply({
        formErrors: ["Nie udało się wysłać Twojej wiadomości"],
      }),
    } as const;
  }

  return {
    status: "email-sent",
  } as const;
};
