const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
  apiKey: process.env.API_KEY,
  server: process.env.SERVER,
});

export default function handler(req, res) {
  console.log("add user running", req.body);
  console.log("apiKey", process.env.API_KEY);
  console.log("server", process.env.SERVER);
  try {
    const response = mailchimp.lists.addListMember("0933557fe1", {
      email_address: req.body.email,
      status: "subscribed",
    });

    console.log("success!");

    res.status(201).json({ response });
  } catch (error) {
    console.log("whoops", {
      error,
    });

    res.status(400).json(error.text);
  }
}
