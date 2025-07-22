const autoroute = () =>{
    let charecters = "1234567890";
    let routeidgenrate = "routeid_";
    for(i=0;i<=3;i++){
        routeidgenrate += charecters.charAt(Math.floor((Math.random()*charecters.length)));
    }
    return routeidgenrate
}
module.exports = autoroute;