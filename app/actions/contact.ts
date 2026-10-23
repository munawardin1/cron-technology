"use server";

// Server Action for the "Let's build something" form: emails the visitor's address to the team.
// Runs only on the server, so the Resend API key never reaches the browser.

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  email?: string;
  submittedAt?: number;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactEmail(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const email = String(formData.get("email") ?? "").trim();
  const honeypot = String(formData.get("company") ?? "");
  const submittedAt = Date.now();

  // Bots fill in the hidden "company" field; pretend it worked and send nothing.
  if (honeypot) {
    return { status: "success", message: "Thanks! We'll reply within 24 hours.", submittedAt };
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { status: "error", message: "Please enter a valid email address.", email, submittedAt };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Cron Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return { status: "error", message: "Sorry, something went wrong. Please try again later.", email, submittedAt };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New project enquiry from ${email}`,
        text: [
          "Someone dropped their email on the Cron Technologies website.",
          "",
          `Email: ${email}`,
          `Received: ${new Date(submittedAt).toUTCString()}`,
          "",
          "Reply to this email to answer them directly.",
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Contact form: Resend returned", response.status, await response.text());
      return { status: "error", message: "Sorry, something went wrong. Please try again.", email, submittedAt };
    }
  } catch (error) {
    console.error("Contact form: could not reach Resend", error);
    return { status: "error", message: "Sorry, something went wrong. Please try again.", email, submittedAt };
  }

  return { status: "success", message: "Thanks! We'll reply within 24 hours.", submittedAt };
}
