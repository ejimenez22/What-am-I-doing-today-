// current day is displayed on the top of the calendar
// time blocks are color coded for past present and future
// time block on click can enter and save events/appointments
// appointments saved in localStorage
// saved events DO NOT disappear on reset

var date = moment().format("MMMM Do YYYY, HH:mm");

$("#currentDay").text(date);

function timeStamp() {

var currentHour = moment().hours();
console.log("hour is: ",currentHour);

$(".timeblock").each(function () {
    var times = parseInt($(this).attr("id"));

        if (times < currentHour) {
            $(this).addClass("past")
        } else if (times === currentHour) {
            $(this).addClass("present"); 
            $(this).removeClass("past");
        } else {
            $(this).addClass("future")
            $(this).removeClass("present")
            $(this).removeClass("past")
        }
    })

}

timeStamp();


$(".saveBtn").on("click", function (event) {
    var textarea = $(this).prev();

    var text = textarea.attr("id");

    var appointments = textarea.val();

    event.preventDefault();

    localStorage.setItem(text, appointments);
})