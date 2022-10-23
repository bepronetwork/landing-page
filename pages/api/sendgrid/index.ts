import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

async function createContact(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    axios
      .put(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          contacts: [{ email: `${req.body.email}` }],
          list_ids: [serverRuntimeConfig.sendgridListId],
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${serverRuntimeConfig.sendgridApiKey}`,
          },
        }
      )
      .then((result) => {
        res.status(200).send({
          message:
            "Your email has been succesfully subscribed",
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            "Oops! Something went wrong, try again later.",
        });
      });
  }
}

export default createContact;
