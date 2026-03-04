import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, company, message } = req.body;

    await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>",
      to: process.env.FOUNDER_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({ error: "Email failed" });
  }
}