const apiKey="1a538e5d3d6fb756970f9e9477ab2df1";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ='block';
        document.querySelector(".weather").style.display ='none'
    }
    else{
    var data = await response.json();
   // console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main == 'Clouds')
    {
weatherIcon.scr ="images/clouds.png"
    }
    else if(data.weather[0].main == 'Drizzle')
    {
        weatherIcon.scr ="images/drizzle.png"
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.scr ="images/mist.png"
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.scr ="images/rain.png"
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.scr ="images/clear.png"
    }
    else{
        weatherIcon.scr ="images/snow.png"
    }

    document.querySelector(".weather").style.display ='block';
    document.querySelector(".error").style.display ='none';
}
}
searchBtn.addEventListener("click" , () =>{
checkWeather(searchBox.value);
})

