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