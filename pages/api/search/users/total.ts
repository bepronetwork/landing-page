import { NextApiRequest, NextApiResponse } from "next";
import ApiWebNetwork from "../../../../services/web-network-api";

async function getTotal(req: NextApiRequest, res: NextApiResponse) {
  await ApiWebNetwork.get("/api/search/users/total").then((response) => {
    return res.status(200).json(response.data);
  });
}

export default async function getAll(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method.toLowerCase()) {
    case "get":
      await getTotal(req, res);
      break;

    default:
      res.status(405);
  }

  res.end();
}
