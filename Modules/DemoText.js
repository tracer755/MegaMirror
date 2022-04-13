let divid = "demotext";
var changetime = 5;

var jsonresponse;


var morningStartTime = 4;
var morningEndTime = 12;
var afternoonStartTime = 12;
var afternoonEndTime = 17;



axios.get('http://localhost:3000/textdemo')
.then(response => {
    console.log(response.data);
    jsonresponse = response.data;
});


var wrapper = document.getElementById(divid); 
wrapper.innerHTML = `<h1 class="" style="color: white; font-size: 3.7vw;" id="demomsgtext">Hey there sexy!</h1>`;

function startdemotext(){
    setTimeout(() => { fadeout(); }, changetime * 1000);
}

function changedemotext(){
    var today = new Date();

    document.getElementById("demomsgtext").style.display = "none";
    var wrapper = document.getElementById(divid); 

    wrapper.querySelector("#demomsgtext").innerHTML = generatePosibleMsgArray();

    fadein();
}

function fadeout(){
    var wrapper = document.getElementById(divid);
    wrapper.querySelector("#demomsgtext").classList.add('fade-out');
    wrapper.querySelector("#demomsgtext").classList.remove('fade-in');
    setTimeout(() => { changedemotext(); }, 5000);
}

function fadein(){
    var wrapper = document.getElementById(divid);
    document.getElementById("demomsgtext").style.display = "block";
    wrapper.querySelector("#demomsgtext").classList.add('fade-in');
    wrapper.querySelector("#demomsgtext").classList.remove('fade-out');
    setTimeout(() => { startdemotext(); }, 5000);
}

function generatePosibleMsgArray(){
    var today = new Date();
    var hour = today.getHours();
    var posiblemsgs = [];

    var arrayLength = jsonresponse.anytime.length;
    for (var i = 0; i < arrayLength; i++) {
        posiblemsgs.push(jsonresponse.anytime[i]);
    }

    //check times
    if(hour >= morningStartTime && hour < morningEndTime){
        console.log('morning');
        var arrayLength = jsonresponse.morning.length;
        for (var i = 0; i < arrayLength; i++) {
            posiblemsgs.push(jsonresponse.morning[i]);
        }
    }
    if(hour >= afternoonStartTime && hour < afternoonEndTime){
        console.log('afternoon');
        var arrayLength = jsonresponse.afternoon.length;
        for (var i = 0; i < arrayLength; i++) {
            posiblemsgs.push(jsonresponse.afternoon[i]);
        }
    }
    if(hour >= afternoonEndTime && hour > morningStartTime){
        console.log('evening');
        var arrayLength = jsonresponse.evening.length;
        for (var i = 0; i < arrayLength; i++) {
            posiblemsgs.push(jsonresponse.evening[i]);
        }
    }

    return(posiblemsgs[Math.floor(Math.random()*posiblemsgs.length)]);
}
