function selectHabit (value) {
  document.getElementById("habname").innerHTML = value;
  localStorage.setItem("habit", value);
}

function showDaysMessage (value) {
  document.getElementById("numDays").innerHTML = value + ' Days';
}

  function showHoursMessage (value) {
    document.getElementById("numHours").innerHTML = value;

}
