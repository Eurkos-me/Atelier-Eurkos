import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const server = express();
const port = 3000;

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname)
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});