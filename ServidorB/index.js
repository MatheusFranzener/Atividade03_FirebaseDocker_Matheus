const express = require('express');

const app = express();
const route = express.Router();
const routes = require('./api/routes');
const port = process.env.PORT || 3001;  // ou vai pegar das variáveis de ambiente ou vai usar a porta 3000

app.use(route);
route.use(express.json());

route.get("/", (req,res) => {
    res.send("Servidor B rodando!");
});

route.use("/api", routes);

app.listen(port, () => console.log("Porta --> ", port));