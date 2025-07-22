const {Router} = require("express");
const route = Router();
const createbusdetails = require("../controllers/busdetails.controller");
const createbusroute = require("../controllers/routedetails.controller");
const { adminlogin } = require("../controllers/adminlogin.controller");
const adminverifylogin = require("../controllers/adminotpverify.controller");
const totalbooking = require("../controllers/totalbooking.controller");
const recentbooking = require("../controllers/recentbooking.controller");
const createbusdata = require("../controllers/createbus.controller");
const approvedbus = require("../controllers/approvedbus.controller");
const nonapprovedbus = require("../controllers/nonapproedbus.controller");
const passengerlist = require("../controllers/passenggerlist.controller");

route.post("/adminlogin",adminlogin);
route.post("/adminlogin-validate",adminverifylogin);
route.post("/createbusdetails",createbusdetails);
route.post("/createroutedetails",createbusroute);
route.get("/totalbooking",totalbooking);
route.get("/recentbook",recentbooking);
route.post("/createbus",createbusdata);
route.get("/approvedbus",approvedbus);
route.get("/nonapprovedbus",nonapprovedbus);
route.get("/passengerlist",passengerlist);


module.exports = route;