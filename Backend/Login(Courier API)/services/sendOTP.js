const Courier = require("@trycourier/courier");

const verifyEmail = async (otp, email) => {

  const courier = Courier.CourierClient({ authorizationToken: "dk_prod_615SFXFQ61MX1AK61RD0GZXHCB4N" });

  const { requestId } = await courier.send({
    message: {
      to: {
        email: email,
      },
      content: {
        title: "Verify your email",
        body: ` Hey User ^ v ^
                Your Verification code is ${otp}.`,
      },
      
      routing: {
        method: "all",
        channels: ["email"],
      },
    },
  });
  return requestId;
};

module.exports = verifyEmail;