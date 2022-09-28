const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
  apiKey: process.env.API_KEY,
  server: process.env.SERVER,
});

export default function handler(req, res) {
  try {
    const response = mailchimp.lists.addListMember("0933557fe1", {
      email_address: req.body.email,
      status: "subscribed",
    });

    res.status(201).json({ response });
  } catch (error) {
    console.log("ERROR------------------------------==================", {
      error,
    });

    res.status(400).json(error.text);
  }
}
