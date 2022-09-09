let img = document.getElementById('image');
let img2 = document.getElementById('image2');
setInterval(function move(){
   
    img.style.display = ("none")

}
,2000)
setInterval(function move(){

   
    img.style.display = ("block")

}
,3000)
let navslide = document.getElementById('navslide')
function comenav(){
if(navslide.style.visibility=="hidden"){navslide.style.visibility="unset";}else{
    navslide.style.visibility="hidden";
}
}

// ?////////////////?????????
const submit_btn = document.getElementById('weather-btn');
const input_data = document.getElementById('input-data');
const city_name = document.getElementById('c-name');
const degree = document.getElementById('degree');
const weather_status = document.getElementById('status');
let Getinfo = async (event)=>{
    event.preventDefault()
    let input_val = input_data.value;
    if(input_val == ""){
        alert("please enter SOMETHING ...")
    }else{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${input_val}&appid=4d8c966462ce403084d310def37f7cec`;
            const response = await fetch(url);
            const data = await response.json()
            console.log(data)
            let arrdata = [data];
            city_name.innerText =` ${ arrdata[0].name} ${ arrdata[0].sys.country}`;
            degree.innerText = `${arrdata[0].main.temp}`;
           let  status_logo = `${arrdata[0].weather[0].main}`;
            if(status_logo == "Clouds"){
                weather_status.innerText = "☁";
            }else if ( status_logo == "Clear"){ weather_status.innerText = "🌤"
        }else if(status_logo == "Rain"){weather_status.innerText = "🌧"
    }else if( status_logo == "Haze"){weather_status.innerText = "⛅"}else{weather_status.innerText = "☀"}

        }catch{
alert("Please enter Valid city Name !")
        }

    }
}
submit_btn.addEventListener('click',Getinfo);