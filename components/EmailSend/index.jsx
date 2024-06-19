import { Html } from '@react-email/html';

export default function EmailTemplate(props) {
  const { name, email, message ,phone  ,subject , title,emailimage,html } = props

  return (
    <Html>
      <ul>
        <li><strong>Title:</strong>{title}</li>
        <li><strong>Name:</strong>{' '}{name}</li>
        <li><strong>Email:</strong>{' '}{email}</li>
        <li><strong>PhoneNumber:</strong>{' '}{phone}</li>
        <li><strong>Subject:</strong>{' '}{subject}</li>
        <li><strong>Message:</strong>{' '}{message}</li>
        <li><strong>Images:</strong>{' '}{emailimage}</li>
      </ul>
    </Html>
  )
}