import { Resend } from 'resend'
// const resend = new Resend(process.env.RESEND_API_KEY)
import EmailTemplate from '../../Components/EmailSend/index'

const resend = new Resend(
  // 're_YMAgPoJ1_2yYWdyAKQ1Pc5ZZX9LYYDYKn'
  're_jhGVNK2T_EgPNdPTWoNkZtd71cDk7m2yV'
  );

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    console.log('data', data)

 const dataRes =   await resend.sendEmail({
      from: 'onboarding@resend.dev',
     // to: 'majdgome@gmail.com',
     to:'itpromax2024@gmail.com',
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