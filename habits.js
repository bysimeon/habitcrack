function selectHabit(value) {
    document.getElementById("habname").innerHTML = value;
    var habitnumber = localStorage.getItem("sethabits");
    if (habitnumber == 0) {
        localStorage.setItem("habit1", value);
    }
    if (habitnumber == 1) {
        localStorage.setItem("habit2", value);
    }
    if (habitnumber == 2) {
        localStorage.setItem("habit3", value);
    }
}

function message1() {
    value = document.getElementById('remessage').innerHTML;
    localStorage.setItem("message", value);
}

function showDaysMessage(value) {
    document.getElementById("numDays").innerHTML = value + ' Days';
}

function showHoursMessage(value) {
    document.getElementById("numHours").innerHTML = value;
}

function submit() {
    location.href = 'home.html';
    var habitnumber = localStorage.getItem("sethabits");
    if (habitnumber == 0) {
        localStorage.setItem("sethabits", 1);
    }
    if (habitnumber == 1) {
        localStorage.setItem("sethabits", 2);
    }
    if (habitnumber == 2) {
        localStorage.setItem("sethabits", 3);
    } else {

    }
}