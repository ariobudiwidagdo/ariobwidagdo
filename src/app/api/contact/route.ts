import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Konfigurasi transporter email (ganti dengan data emailmu)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // email kamu
        pass: process.env.EMAIL_PASS, // password/app password
      },
    })

    // Setup email data
    const mailOptions = {
      from: `"${name}" <${email}>`, // dari siapa
      to: process.env.EMAIL_TO, // email penerima (bisa sama atau berbeda)
      subject: `New Contact Message from ${name}`,
      text: `
        You have a new message from your portfolio contact form:

        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    }

    // Kirim email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
