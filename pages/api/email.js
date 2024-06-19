//https://nodemailer.com/
//https://resend.com/emails
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
      cc:`${data.email}`,
      replyTo: data.email,
      subject: `${data.name}`,
      react: <EmailTemplate {...data} />,
      html: `<body style="background: #f3f4f6; padding:0 5px;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px 0; font-family:Trebuchet MS;">
      <div style="text-align: center; margin-bottom: 20px;">
       <h1 style="color: #000; text-transform: uppercase; font-size: 30px;">You have news message from  SweetSips</h1>
      </div>
      <div style="padding: 10px; border-radius:5px; background:#fff; -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3); box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);">
          <h2 style="text-align: center; text-transform: uppercase; color: teal;">New message</h2>
          <img src="https://sweetsips.com.tr/assets/images/frozeximages/frozex-logo.png" width='15%' height='15%'></img>
        
          <p style="font-size:1rem;"><strong> New Offer</p> 
          <p style="font-size:1rem;"><strong> Product Name: </strong></p>
         
      
  
  
      
      </div>
      </div>
      
      <footer style="text-align: center; padding: 5px 0; color: #000; font-size: 1rem;">
      <h2>IT PRO MAX</h2>
      <p>© 2024 All rights reserved</p>
      </footer>
      </body>`

    })

    console.log('dataRes', dataRes)
    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}