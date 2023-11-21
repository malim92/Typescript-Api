import express from "express";
import config from "config";
import logger from "./utils/logger";
import connect from "./utils/connect";
import routes from "./utils/routes";

const port = config.get<number>('port');

const app = express();

app.use(express.json());

console.log({})
app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);

    // await connect();

    routes(app);

    console.log('hi1');
})