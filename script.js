if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }


function calc(){

let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let res = document.getElementById('resul');

   // console.log(n1.value)
   // console.log(n2.value)
    console.log(n3.value = Number(n1.value) + Number(n2.value))
}