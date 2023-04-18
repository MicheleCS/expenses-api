import * as nodemailer from 'nodemailer';


export class SendEmailProvider {
  async execute(to: string, subject: string, text: string): Promise<void>  {
    const transporter = nodemailer.createTransport(
      {
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USERNAME,
          pass: process.env.MAILTRAP_PASSWORD,
        },
    });

    const mailOptions = {
       from: 'Administrador <96f4983cca-5804a7@inbox.mailtrap.io>',
       to,
       subject,
       text,
     };

    await transporter.sendMail(mailOptions);
  }
}
