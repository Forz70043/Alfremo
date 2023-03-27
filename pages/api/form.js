const { google } = require("googleapis");


export default async function handler(req, res) {
    //Init OAuth from Google lib.
    //const OAuth2 = google.auth.OAuth2;
    // Get data submitted in request's body.
    const body = req.body
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    //client_id, client_secret, redirect_uri
    /*const myOAuth2Client = new OAuth2 (
      process.env.GMAIL_CLIENT_ID, 
      process.env.GMAIL_CLIENT_SECRET, 
      process.env.GMAIL_REDIRECT_URI
    )*/
        
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.email || !body.password || !body.firstname || !body.lastname) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Email or Text or name empty' })
    }
  
    //myOAuth2Client.setCredentials({refresh_token:process.env.GMAIL_REFRESH_TOKEN});
    //const myAccessToken = await myOAuth2Client.getAccessToken().token
    //console.log("XX", myOAuth2Client)
    //console.log("XX", myOAuth2Client._clientSecret)
    //console.log("XX", myAccessToken)
    
    res.status(200).json({ data: "Message Send!"/*`${body.email} ${body.message}`*/ })
}