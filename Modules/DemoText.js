let divid = "demotext";
var changetime = 5;

var UseDemoBackend = false;

var textitems = ["Good morning, handsome!", "Hey there sexy!", "How was your sleep?", "Enjoy your day!", "You look sexy!", "Hello, beauty!", "Looking good today!", "You look nice!", "Wow, you look hot!"];

var wrapper = document.getElementById(divid); 
wrapper.innerHTML = `<h1 class="" style="color: white; font-size: 3.7vw;" id="demomsgtext">Hey there sexy!</h1>`;

function startdemotext(){
    setTimeout(() => { fadeout(); }, changetime * 1000);
}

function changedemotext(){
    document.getElementById("demomsgtext").style.display = "none";
    var wrapper = document.getElementById(divid); 

    if(!UseDemoBackend){
    wrapper.querySelector("#demomsgtext").innerHTML = textitems[Math.floor(Math.random()*textitems.length)];
    }
    else if(UseDemoBackend){
        axios.get(`http://localhost:3000/textdemo`)
    .then(response => {
        wrapper.querySelector("#demomsgtext").innerHTML = response.data;
    })
    }

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