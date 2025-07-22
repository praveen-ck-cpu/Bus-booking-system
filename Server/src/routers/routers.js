const {Router} = require("express");
const route = Router();

const User_route = require("./user.route");
const Admin_route = require("./admin.routes");
const setseat = require("../controllers/setseat.controller");
const setsleeper = require("../controllers/setsleeper.controller");
const cancelticket = require("../controllers/cancelticket.controller");

const routes = [
    {
        path:'/user',
        route:User_route
    },
    {
        path:'/admin',
        route:Admin_route
    },{
        path:"/delticket",
        route:cancelticket
    },{
        path:"/seatdata",
        route:setseat
    },{
        path:"/sleeperdata",
        route:setsleeper
    }
]

routes.forEach((r)=>{
    route.use(r.path,r.route);
})

module.exports = route;