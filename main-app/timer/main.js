
let id = null;

const start = () => {
    let hours = document.getElementById("hours").value
    let minutes = document.getElementById("minutes").value
    let seconds = document.getElementById("seconds").value

    document.getElementById("dhours").innerHTML = hours
    document.getElementById("dminutes").innerHTML = minutes
    document.getElementById("dseconds").innerHTML = seconds

    if (id) {

        hours = document.getElementById("dhours").innerHTML
        minutes = document.getElementById("dminutes").innerHTML
        seconds = document.getElementById("dseconds").innerHTML

    }
    const donwHour = () => {
        if (hours == 0) {
            return false;
        }
        console.log('hour' + hours);
        document.getElementById("dhours").innerHTML = --hours;
        return true;
    }

    const downMinutes = () => {
        if (minutes == 0) {
            if (donwHour()) {
                minutes = 60;
            } else {
                return false;
            }
        }
        console.log('minutes' + minutes);
        document.getElementById("dminutes").innerHTML = --minutes
        return true;
    }

    id = setInterval(() => {
        if (seconds == 0) {
            if (downMinutes()) {
                seconds = 60;
            } else {
                clearInterval(id);
            }
        }
        console.log(seconds);
        document.getElementById("dseconds").innerHTML = seconds--;
    }, 1000);

    console.log('start got clicked');
}

const pause = () => {
    if (id != null) {
        clearInterval(id)
    }
}

function reset () {
    console.log('reset');
    if (id != null) {
        pause();
        document.getElementById("hours").value = 0
        document.getElementById("minutes").value = 0
        document.getElementById("seconds").value = 0
        document.getElementById("dhours").innerHTML = 0
        document.getElementById("dminutes").innerHTML = 0
        document.getElementById("dseconds").innerHTML = 0

    } 
}