const {Router} = require("express");
const route = Router();
const searchbus = require("../controllers/searchroute.controller");
const Getdata = require("../controllers/toproutes.controller");
const suggestions = require("../controllers/suggestions.controller");
const seatdata = require("../controllers/seatdata.controller");
const createuser = require("../controllers/createuser.controller");
const getseat = require("../controllers/getseat.controller");
const getsleeper = require("../controllers/getsleeper.controller");
const suggestionsto = require("../controllers/suggestionsto.controller");
const createticket = require("../controllers/ticket.controller");
const showticket = require("../controllers/showticket.controller");
const cancelticket = require("../controllers/cancelticket.controller");
const {userlogin} = require("../controllers/userlogin.controller");
const verifylogin = require("../controllers/userotpverify.controller");



route.get("/search",searchbus);
route.get("/get",Getdata);
route.get("/suggestions",suggestions);
route.get("/suggestionsto",suggestionsto);
route.get("/details",seatdata);
route.post("/userdata",createuser);
route.get("/getseat",getseat);
route.get("/getsleeper",getsleeper);
route.post("/ticket",createticket);
route.get("/showticket",showticket);
route.post("/login",userlogin);
route.post("/login-validate",verifylogin);


module.exports = route;