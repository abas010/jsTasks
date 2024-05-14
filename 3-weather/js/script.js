//بگراند
let $ = document;

//   function loadHandel(){

//     //ادرس تصویر
//     var imgs = [
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-01.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-02.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-03.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-04.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-05.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-06.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-07.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-08.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-09.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-10.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-11.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-12.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-13.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-14.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-15.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-16.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-17.jpg',
//         './imgs/Wallpapers/Ultra HD Wallpaper Pack 407-18.jpg'
//     ]

//     //عکس تصادفی
//     var randomIndex = Math.floor(Math.random() *imgs.length);

//     var imgurl = imgs[randomIndex];
//     $.getElementById('randomimg').src=imgurl;
// }

//
let jsRezalt = $.querySelector(".rezalt");
let textSrch = $.querySelector(".search-bar");

let cityWeather = {
  tehran: {
    city: "Weather in tehran",
    temp: "51°C",
    des: "sunny",
    humidity: "Humidity: 60%",
    windSpeed: "Wind speed: 4.2 km/h",
  },
  qazvin: {
    city: "Weather in qazvin",
    temp: "23°C",
    des: "Windy",
    humidity: "Humidity: 24%",
    windSpeed: "Wind speed: 6.5 km/h",
  },
  shraz: {
    city: "Weather in shraz",
    temp: "65°C",
    des: "sunny",
    humidity: "Humidity: 12%",
    windSpeed: "Wind speed: 1.2 km/h",
  },
  mashhad: {
    city: "Weather in mashhad",
    temp: "12°C",
    des: "Windy",
    humidity: "Humidity: 80%",
    windSpeed: "Wind speed: 3.8 km/h",
  },
};
//توابع برگشتی
(function () {
  //     //ادرس تصویر
  var imgs = [
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-01.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-02.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-03.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-04.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-05.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-06.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-07.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-08.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-09.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-10.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-11.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-12.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-13.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-14.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-15.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-16.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-17.jpg",
    "./imgs/Wallpapers/Ultra HD Wallpaper Pack 407-18.jpg",
  ];

  //     //عکس تصادفی
  var randomIndex = Math.floor(Math.random() * imgs.length);

  var imgurl = imgs[randomIndex];
  $.getElementById("randomimg").src = imgurl;
})();


function clickRezalt() {
    let valtextSrch = textSrch.value;
    let rezaltSerch = cityWeather[valtextSrch];
  
    if (rezaltSerch) {
      $.querySelector(".weather").classList.remove("loading");
      $.querySelector(".city").innerHTML = rezaltSerch.city;
      $.querySelector(".temp").innerHTML = rezaltSerch.temp;
      $.querySelector(".description").innerHTML = rezaltSerch.des;
      $.querySelector(".humidity").innerHTML = rezaltSerch.humidity;
      $.querySelector(".wind").innerHTML = rezaltSerch.windSpeed;
    } else {
      alert("شهر مرد نظر را درست وارد کنید");
    }
}
function enterRezalt(e) {
  if (e.keyCode ===13) {
    let valtextSrch = textSrch.value;
    let rezaltSerch = cityWeather[valtextSrch];
  
    if (rezaltSerch) {
      $.querySelector(".weather").classList.remove("loading");
      $.querySelector(".city").innerHTML = rezaltSerch.city;
      $.querySelector(".temp").innerHTML = rezaltSerch.temp;
      $.querySelector(".description").innerHTML = rezaltSerch.des;
      $.querySelector(".humidity").innerHTML = rezaltSerch.humidity;
      $.querySelector(".wind").innerHTML = rezaltSerch.windSpeed;
    } else {
      alert("شهر مرد نظر را درست وارد کنید");
    }
  }
}


jsRezalt.addEventListener("click", clickRezalt);
textSrch.addEventListener("keyup", enterRezalt);
