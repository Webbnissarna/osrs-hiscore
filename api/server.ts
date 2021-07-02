import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";

import fetch from "isomorphic-fetch";

import mapData from "./data-structures/osrs-hiscore";

const app = new App();

app
  .use(logger())
  .get("/api", async (req, res) => {
    const { username } = req.query;

    if (!username) {
      return res.status(404).send({ error: "No name in query" });
    }

    const response = await fetch(
      `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${username}`
    );

    if (response.status === 404) {
      return res.status(404).send({
        success: false,
        message: "Failed to fetch with username",
        username: username,
      });
    }

    const data = await response.text();

    return res.status(200).send({
      success: true,
      message: "hiscore-data",
      body: {
        username: username,
        data: mapData(data),
      },
    });
  })
  .listen(3000);
