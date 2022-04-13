let datetimedivid = "datetime";

function setdttext(){
var wrapper = document.getElementById(datetimedivid);

var today = new Date();

const day = today.getDay();

var options = { weekday: 'long'};

wrapper.innerHTML = `
<h1 style="color: white; font-size: 90px; text-align: right;" id="daytext"></h1>
<h1 style="color: white; font-size: 90px; text-align: right; position: relative; bottom:60px;" id="datetext"></h1>
<h1 style="color: white; font-size: 140px; text-align: right; position: relative; bottom:140px; letter-spacing: 2px;" id="timetext"></h1>
`;

wrapper.querySelector("#daytext").innerHTML = new Intl.DateTimeFormat('en-US', options).format(today);

options = {
    day: "numeric",
    month: "long", //to display the full name of the month
    year: "numeric"
}

wrapper.querySelector("#datetext").innerHTML = new Intl.DateTimeFormat('en-US', options).format(today);


wrapper.querySelector("#timetext").innerHTML = today.toLocaleString('en-US', { hour: 'numeric', minute:'numeric' , hour12: true });
setTimeout(() => {  setdttext(); }, 1000);
}

axios.get('http://localhost:3000/logmodstart:' + "DateTime")
.then(response => {
    
});