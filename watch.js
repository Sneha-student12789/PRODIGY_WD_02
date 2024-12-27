let sec = 0;
let min = 0;
let hour = 0;

let timer = false;

function start() {
    timer = true;
    myFunction();
}
function stop() {
    timer = false;
    myFunction();
}
function reset() {
    location.reload();
}
function laps() {
    let getSec = sec;
    let getMin = Min;
    let getHour = Hour;
    if(sec<10){
        getSec="0"+sec;
    }
    if(min<10){
        getMin="0"+min;
    }
    if(hour<10){
        getHour="0"+hour;
    }

    let lap= document.createElement("p");
    lap.innerHTML= getHour + ":" + getMin + ":" + getSec;
    document.getElementById("laps").appendChild(lap);
    

}

function myFunction(){
    if(timer == true){
        sec = sec + 1;
        if(sec == 60){
            sec = 0;
            min= min + 1;
        }
        if(min == 60){
            min = 0;
            hour = hour + 1;
        }

        let getSec = sec;
        let getMin = min;
        let getHour = hour;

        if(sec < 10){
            getSec = "0"+sec;
        }
        if(min < 10){
            getMin = "0"+min;
        }
        if(hour < 10){
            getHour = "0"+hour;
        }

        setTimeout("myFunction()",10)
        document.getElementById("sec").innerHTML =getSec;
        document.getElementById("min").innerHTML = getMin;
        document.getElementById("hour").innerHTML = getHour;
}
}