import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailSend';

const resend = new Resend('re_aUoYNp6c_HVepFLqRG9UBMrWWJtcg82qY');

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    console.log('data', data)

 const dataRes =   await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to:'itpromax2024@gmail.com',
      // cc:`${data.email}`,
      replyTo: data.email,
      subject: `${data.name} `,
      react: <EmailTemplate {...data} />,
    })

    console.log('dataRes', dataRes)
    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}