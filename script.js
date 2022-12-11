const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
  document.getElementById("main").style.opacity = "0.2";
}

function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("main").style.opacity = "1";
}



//Geo-location

let x = document.getElementById("out");
let y = document.getElementById("weather");

function geolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerText = "Geo Not Supported";
  }
}

function showPosition(data) {
  console.log(data);
  let lat = data.coords.latitude;
  let long = data.coords.longitude;
  // let out = `Latitude is ${lat} & longitude is ${long}`;
  // x.innerText = out;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
  ///api calling
  fetch(url, { method: "GET" })
    //return promise
    .then((res) => res.json())
    //return data
    .then((data) => {
      console.log(data);
      let city = data.city.name;
      let temp = data.list[0].temp.day;
      y.innerText = `detected location is ${city}, ${temp} °C`;
    });
}

//Geo-location