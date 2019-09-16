const KoaRouter = require("koa-router");
const router = new KoaRouter();
const Service = require("./service");
const service = new Service();

router.get("/job/:country/:campaign/:type", async (ctx) => {
    try {
        const request = {
            country: ctx.params.country.toUpperCase(),
            campaign: ctx.params.campaign,
            type: ctx.params.type.toUpperCase()
        };
       
        const response = await service.createJob(request);
        console.log("sqs response: ", response);
        ctx.body = response;
    } catch (error) {
        console.log(error);
        ctx.status = 500;
    }

});

module.exports = router;