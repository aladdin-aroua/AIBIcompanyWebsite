// app/api/sendEmail/route.ts
import { Resend } from 'resend'

const resend = new Resend("re_5fT82MLg_EA6KDQnfAFUgdqHuD6JyuHhf")

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 })
    }

    await resend.emails.send({
      from: 'Contact Form <no-reply@fpai.ca>',
      to: 'aladdin.aroua@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 })
  } catch (error) {
    console.error('Failed to send email:', error)
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 })
  }
}
