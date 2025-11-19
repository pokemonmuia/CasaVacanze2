// src/routes/+page.server.js
import nodemailer from 'nodemailer';
// Import the new variable names
import { SMTP_EMAIL, SMTP_PASSWORD } from '$env/static/private';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const phone = formData.get('user_phone');
        const message = formData.get('user_message');

        // === GMAIL CONFIGURATION ===
const transporter = nodemailer.createTransport({
    service: 'gmail', // Gmail configura tutto in automatico
    auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD
    }
});                                 

        const mailOptions = {
            from: `"${name}" <${SMTP_EMAIL}>`, // Yahoo requires the 'from' address to be YOUR Yahoo address
            to: SMTP_EMAIL, 
            replyTo: email, // This allows you to hit "Reply" and email the guest
            subject: `New Enquiry from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                
                Message:
                ${message}
            `
        };
        console.log("Tentativo invio da:", SMTP_EMAIL);
        try {
            await transporter.sendMail(mailOptions);
            return { success: true };
        } catch (error) {
            console.error(error);
            return { success: false };
        }
    }
};