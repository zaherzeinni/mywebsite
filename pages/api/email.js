import nodemailer from "nodemailer";



const email = "noreply.springworthbooks@gmail.com";
const passw = "bbvh hors bgbq pxjm";


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,// Use SSL `true` for port 465, `false` for all other ports
  auth: {

    user: email, // generated ethereal user
    pass: passw, // generated ethereal password
  },
});



// async..await is not allowed in global scope, must use a wrapper
async function sendEmail({ title,name, email, phone, message, subject, emailimage,cart,getTotalPrice}) {


  // send mail with defined transport object
  const emailOptions = {
    from: 'itpromax2024@gmail.com', // sender address
    to: `${email}`, // list of receivers
    bcc: 'itpromax2024@gmail.com', // list of receivers
    subject: `${title}` + " ITPROMAX", // Subject line
    text: `${subject}`, // plain text body
    html: ` 
  <h2 style="font-size: 3rem; color: #F20F38; background-color: #110B10; padding: 20px; text-align: center;">Your invoice from ITPROMAX.</h2>
    
    <div style="text-align: center;">
    <a href='itpromax.com' rel="noreferrer" traget='_blank'>
    <img src="https://www.simpleimageresizer.com/_uploads/photos/ac00de88/iconlogo_2.jpg" width="50" height="50" alt='icon' />
    </a>
    </div>
     <table style="border-collapse: collapse; width: 100%; border-spacing: unset;">
        <thead style="background-color: #E8F0EB; color: #F20F38;">
            <tr style="border: 1px solid #F20F38;">
                <th style="border: none; padding: 8px; text-align: left;">Name of Product</th>
                <th style="border: none; padding: 8px; text-align: left;">Image of Product</th>
                <th style="border: none; padding: 8px; text-align: left;">Item Price </th>
               
            </tr>
        </thead>
        <tbody style="background-color: #E8F0EB;">
            ${cart
              .map(
                (item) => `
            <tr style="border: 1px solid #E8F0EB;">
                <td style="border: none; padding: 8px;">${item.title}</td>
                <td style="border: none; padding: 8px;"><img src=${item.images[0]} alt=img width="100" height="110" /></td>
                <td style="border: none; padding: 8px;">$ ${item.price}</td>
                
             
              
            </tr>
            `
              )
              .join("")}
        </tbody>

                
            <tr style="border: 1px solid #F20F38;">
                <thead style="background-color: #E8F0EB; color: #F20F38;">
                <th style="border: none; padding: 8px; text-align: left;">Subtotal</th>
                <th style="border: none; padding: 8px; text-align: left;"></th>
                <th style="border: none; padding: 8px; text-align: left;">$ ${getTotalPrice}</th>
               
            </tr>
        </thead>

    </table>

    
    <ul>
        <li><h3 style=" color: #110B10;">Name:</h3> <span>${name}</span></li>
        <li><h3 style=" color: #110B10;">Email:</h3> <span>${email}</span></li>
        <li><h3 style=" color: #110B10;">Phone:</h3> <span>${phone}</span></li>
        <li><h3 style=" color: #110B10;">Message:</h3> <span>${message}</span></li>
        <li><h3 style=" color: #110B10;">Pictures of Device:</h3> <span>${emailimage} </span></li>
        <li><h3 style=" color: #110B10;">Subject:</h3> <span>${subject}</span></li>
    </ul>
   
   
    <h2>Thank you for your order from IT PRO MAX  ,  شكرا لطلبكم</h2>
`,

  };

  return transporter.sendMail(emailOptions);
  
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("DATA-,", req.body);
    const emailRes = await sendEmail(req.body);
    if (emailRes.messageId) {
      return res.status(200).json({ message: `Email sent successfuly` });
    }

    return res.status(400).json({ message: "Error sending email" });
  }

  return res
    .status(400)
    .json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}
