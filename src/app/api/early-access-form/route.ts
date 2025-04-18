import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { Resend } from 'resend';

// TODO: Add imports for Email client libraries

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, company, useCase } = body;

    // --- Input Validation ---
    if (!email || !company || !useCase) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // // --- Google Sheet Update ---
    // const sheetId = process.env.GOOGLE_SHEET_ID;
    // const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    // const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\n/g, '\n');

    // if (!sheetId || !clientEmail || !privateKey) {
    //   console.error("Google Sheets API credentials missing or incomplete in environment variables.");
    //   throw new Error('Server configuration error. Please contact support.');
    // }

    // try {
    //   const auth = new google.auth.GoogleAuth({
    //     credentials: {
    //       client_email: clientEmail,
    //       private_key: privateKey,
    //     },
    //     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    //   });

    //   const sheets = google.sheets({ version: 'v4', auth: auth });

    //   const range = 'Sheet1!A1'; // Target the first sheet, starting at A1
    //   const valueInputOption = 'USER_ENTERED';
    //   const insertDataOption = 'INSERT_ROWS';

    //   const values = [
    //     [new Date().toISOString(), email, company, useCase]
    //   ];

    //   const requestBody = {
    //     values,
    //   };

    //   console.log(`Appending to sheet: ${sheetId}, range: ${range}`);
    //   const result = await sheets.spreadsheets.values.append({
    //     spreadsheetId: sheetId,
    //     range,
    //     valueInputOption,
    //     insertDataOption,
    //     requestBody,
    //   });
    //   console.log('Cells appended:', result.data.updates?.updatedCells);

    // } catch (sheetError: any) {
    //   console.error('Google Sheets API Error:', sheetError.message);
    //   console.error('Error Details:', sheetError.response?.data?.error || sheetError);
    //   throw new Error('Failed to record submission. Please try again later.');
    // }

    // --- Email Sending using Resend ---
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

    if (!resendApiKey || !recipientEmail) {
       console.error("Resend API key or recipient email missing in environment variables.");
       throw new Error('Server configuration error. Notification could not be sent.'); 
    }

    try {
       const resend = new Resend(resendApiKey);
       
       console.log(`Attempting to send email notification to ${recipientEmail}...`);
       
       const { data, error } = await resend.emails.send({
        from: `Somantic Early Access <${fromEmail}>`,
        to: [recipientEmail],
        subject: '🚀 New Somantic Early Access Request',
        html: `
          <h1>New Early Access Request</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Use Case:</strong></p>
          <p>${useCase.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (error) {
        console.error('Resend API Error:', error);
        throw new Error(`Failed to send notification email: ${error.message}`);
      }

      console.log('Email sent successfully:', data?.id);

    } catch (emailError: any) {
      console.error('Email Sending Error:', emailError);
      console.error('Could not send notification email, but proceeding...');
    }

    // --- Success Response ---
    return NextResponse.json({ message: 'Request received successfully!' }, { status: 200 });

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
} 