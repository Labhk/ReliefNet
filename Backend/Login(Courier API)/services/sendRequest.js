const Courier = require("@trycourier/courier");

const sendRequest = async (content, email, useremail) => {

  const courier = Courier.CourierClient({ authorizationToken: "dk_prod_615SFXFQ61MX1AK61RD0GZXHCB4N" });

  const { requestId } = await courier.send({
    message: {
        
        to: {
            email: email,
        },
    
      
      content: {
        
        title: "!! Relief Help Request !!",
        body: `A user has sent a request for the supplies you registered on ReliefNet. 

                    " ${content} "

                User Contact Email : ${useremail}
               Contact and provide Support to User ASAP. `,
      },
      routing: {
        method: "all",
        channels: ["email"],
      },

    },
  });
  return requestId;
};

module.exports = sendRequest;