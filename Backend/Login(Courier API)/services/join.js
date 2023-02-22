const Courier = require("@trycourier/courier");

const Join = async (email) => {

  const courier = Courier.CourierClient({ authorizationToken: "dk_prod_615SFXFQ61MX1AK61RD0GZXHCB4N" });

  const { requestId } = await courier.send({
    message: {
        
        to: {
            email: email,
        },
        template: "NS1TN8C793MKRHGP7R8TKRMFS2SG",
        brand_id: "3SVA7S2AMQMWC7G632KJ2C2NWHD5",
      routing: {
        method: "all",
        channels: ["email"],
      },

    },
  });
  return requestId;
};

module.exports = Join;