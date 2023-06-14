const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function myFunction() {
    let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        
        hour.textContent = hours;
        minute.textContent = minutes;
        second.textContent = seconds;
}

setInterval(myFunction,1000);