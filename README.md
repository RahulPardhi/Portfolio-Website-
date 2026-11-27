# Portfolio-Website-

## Contact form deployment

The contact form API is implemented as a Vercel Serverless Function at
`/api/contact`. Deploy the project to Vercel and add these environment variables
in the project's settings for each environment you deploy:

- `SMTP_HOST` (usually `smtp.gmail.com`)
- `SMTP_PORT` (usually `465`)
- `SMTP_SECURE` (`true` when using port `465`)
- `SMTP_USER` (the Gmail account that sends the messages)
- `SMTP_PASS` (a Google App Password, not the account password)
- `CONTACT_RECEIVER_EMAIL` (the inbox that receives contact messages)

Redeploy after changing environment variables. The local `.env` file is not
uploaded with production deployments.
