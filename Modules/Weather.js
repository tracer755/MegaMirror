let weatherdivid = "Weather";
const place = "Denver"; //page will not work if the name of the place is wrong
const key = "e9b4530b132be47b2c2c3d665e43ca50";

var wrapper = document.getElementById(weatherdivid);
wrapper.innerHTML = 
`   
    <h1 style="color: white; font-size: 4.3vw;" id="Placetext"></h1>
    <img width="250px" height="250px" id="weatherimg" src="" style="filter: invert(100%) sepia(37%) saturate(0%) hue-rotate(107deg) brightness(117%) contrast(101%); position: relative; top:-7vw; right:3vw; padding-top:35px; padding-bottom:35px; padding-left:3.2vw;" />
    <h2 style="color: white; position: relative; top:-13vw; right:13vw; text-align: center;" id="weatherdesc"></h2>
    <h1 id="currenttemptext" style="color: white; font-size: 8vw; position: relative; top:-35vw; left:23vw;"></h1>
    <h1 id="maxmintemptext" style="color: white; position: relative; top:-39vw; left:23vw;"></h1>
`;

function refreshweather(){

    var wrapper = document.getElementById(weatherdivid);


    

    wrapper.querySelector("#Placetext").innerHTML = place;

    //get current weather
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}&units=imperial`)
    .then(response => {

        console.log(response.data);
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