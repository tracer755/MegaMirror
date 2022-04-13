let weatherdivid = "Weather";
var place = "Denver"; //page will not work if the name of the place is wrong
const key = "e9b4530b132be47b2c2c3d665e43ca50";

var wrapper = document.getElementById(weatherdivid);

var weatherjson;

wrapper.innerHTML = 
`   
    <h1 style="color: white; font-size: 80px; position: absolute;" id="Placetext"></h1>
    <img width="250px" height="250px" id="weatherimg" src="" style="filter: invert(100%) sepia(37%) saturate(0%) hue-rotate(107deg) brightness(117%) contrast(101%); position: absolute; top:140px;" />
    <h2 id="weatherdesc" style="color: white; position: absolute; text-align: center; top:370px; left:95px;"></h2>
    <h1 id="currenttemptext" style="color: white; font-size: 140px; position: absolute; left:250px; top:70px;"></h1>
    <h1 id="maxmintemptext" style="color: white; position: absolute; top:310px; left:270px;"></h1>
`;


function refreshweather(){

    var wrapper = document.getElementById(weatherdivid);


    

    wrapper.querySelector("#Placetext").innerHTML = place;

    //get current weather
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}&units=imperial`)
    .then(response => {
        weatherjson = response.data;
        wrapper.querySelector("#weatherimg").src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${response.data.weather[0]["icon"]}.svg`;
        wrapper.querySelector("#weatherdesc").innerHTML = capitalize(response.data.weather[0].description);
        wrapper.querySelector("#currenttemptext").innerHTML = Math.round(response.data.main.temp) + `<span>&#176;</span>`;
        wrapper.querySelector("#maxmintemptext").innerHTML = Math.round(response.data.main.temp_max) + `<span>&#176;</span>` + " " + Math.round(response.data.main.temp_min) + `<span>&#176;</span>`;
    })


setTimeout(() => {  refreshweather(); }, 30000);
}

function capitalize(input) {  
    var words = input.split(' ');  
    var CapitalizedWords = [];  
    words.forEach(element => {  
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
    });  
    return CapitalizedWords.join(' ');  
} 


axios.get('http://localhost:3000/logmodstart:' + "Weather")
.then(response => {
    
});