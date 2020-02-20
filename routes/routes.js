const userRoutes=require('./users')
class allRoutes{
    initRoutes(router) {
       
        userRoutes.initRoutes(router);

    }
}
module.exports = new allRoutes;
