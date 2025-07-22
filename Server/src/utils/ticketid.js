const autoticketid = () =>{
    let charecters = "1234567890";
    let busidgenrate = "ticketid_";
    for(i=0;i<=6;i++){
        busidgenrate += charecters.charAt(Math.floor((Math.random()*charecters.length)));
    }
    return busidgenrate
}
module.exports = autoticketid;