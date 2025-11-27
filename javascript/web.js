// API stands application program inetrface
// API is a set of rules and protocols that allow different software applications to communicate with each other
// browser api
const x = document.getElementById("demo1");

function getLocation(){
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch (error) {
        x.innerHTML = error.message;
    }
}

function showPosition(position){
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

// web storage api
localStorage.setItem("name", "Victor Hopkins");
document.getElementById("demo2").innerHTML = localStorage.getItem("name");
// local storage stores data in the browser and is only accessible by the same origin and will not be deleted when the browser is closed

// session storage
sessionStorage.setItem("name", "Ronald McDonald");
document.getElementById("demo3").innerHTML = sessionStorage.getItem("name");
// session storage stores data in the browser and is only accessible by the same origin and will be deleted when the browser is closed

 