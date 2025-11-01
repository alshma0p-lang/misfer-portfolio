import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, purpose, message } = body;

    // Validate required fields
    if (!name || !email || !purpose || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would integrate with Resend or another email service
    // For now, we'll just log the data
    console.log('Contact form submission:', { name, email, purpose, message });

    // If RESEND_API_KEY is set, you can send the email
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      // const { Resend } = require('resend');
      // const resend = new Resend(resendApiKey);
      // await resend.emails.send({
      //   from: 'TeleChic <noreply@telechic.app>',
      //   to: 'support@telechic.app',
      //   subject: `Contact Form: ${purpose}`,
      //   html: `
      //     <h2>New Contact Form Submission</h2>
      //     <p><strong>Name:</strong> ${name}</p>
      //     <p><strong>Email:</strong> ${email}</p>
      //     <p><strong>Purpose:</strong> ${purpose}</p>
      //     <p><strong>Message:</strong></p>
      //     <p>${message}</p>
      //   `,
      // });
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
