const autobusid = () =>{
    let charecters = "1234567890";
    let busidgenrate = "busid_";
    for(i=0;i<=3;i++){
        busidgenrate += charecters.charAt(Math.floor((Math.random()*charecters.length)));
    }
    return busidgenrate
}
module.exports = autobusid;