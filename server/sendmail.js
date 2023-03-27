const { google } = require("googleapis");

    //client_id, client_secret, redirect_uri
    const myOAuth2Client = new OAuth2 (
        process.env.GMAIL_CLIENT_ID, 
        process.env.GMAIL_CLIENT_SECRET, 
        process.env.GMAIL_REDIRECT_URI
      )
    //transporter.verify().then(console.log).catch(console.error);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        host: "smtp.gmail.com",
        auth: {
        type: "OAUTH2",
        user: process.env.MAIL_USER,
        clientId: myOAuth2Client._clientId,
        clientSecret: myOAuth2Client._clientSecret,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: myAccessToken //access token variable we defined earlier
        },
        secure: true,
    })

    const mailData = {
        from: 'wild.cloud.beer@gmail.com',
        to: 'wild.cloud.beer@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
    }  

/*
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.log(err)
        res.status(400).json({ data: err })
      }
      else {
        console.log(info)
        smtpTransport.close();
        // Found the name.
        // Sends a HTTP success code
        
      }
    })
    */
   export default function sendMail(){

   }