const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new koa();
const router = require("./router");

app.use(bodyParser());

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
        console.log("Server is up and running on port numner 3000");
    });

