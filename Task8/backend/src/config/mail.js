const { Resend } = require("resend");

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const sendVerificationEmail = async (
  email,
  token
) => {
  const verifyUrl =
    `http://localhost:5000/api/auth/verify/${token}`;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verify Your Email",
      html: `
        <h2>Email Verification</h2>

        <p>Click below link to verify your account</p>

        <a href="${verifyUrl}">
          Verify Email
        </a>
      `,
    });

    console.log("Email Sent");
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendVerificationEmail;