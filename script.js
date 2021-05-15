// Luxon clock function for top of page
function clockRefresh() {
let clock = document.getElementById("currentDay");
let DateTime = luxon.DateTime;
clock.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}
    // Interval to refresh clock object every second for up to date time of day
let time = setInterval(clockRefresh, 1000);

// Functions to capture user input data in time blocks
$("#save1").on("click", function() {
    let userText = $("#input1").val();
    localStorage.setItem("9AM", userText);
});
    // This line calls on the stored user input data to fill the text inputs
$("#input1").val(localStorage.getItem("9AM"));

$("#save2").on("click", function() {
    let userText = $("#input2").val();
    localStorage.setItem("10AM", userText);
});
$("#input2").val(localStorage.getItem("10AM"));

$("#save3").on("click", function() {
    let userText = $("#input3").val();
    localStorage.setItem("11AM", userText);
});
$("#input3").val(localStorage.getItem("11AM"));

$("#save4").on("click", function() {
    let userText = $("#input4").val();
    localStorage.setItem("12PM", userText);
});
$("#input4").val(localStorage.getItem("12PM"));

$("#save5").on("click", function() {
    let userText = $("#input5").val();
    localStorage.setItem("1PM", userText);
});
$("#input5").val(localStorage.getItem("1PM"));

$("#save6").on("click", function() {
    let userText = $("#input6").val();
    localStorage.setItem("2PM", userText);
});
$("#input6").val(localStorage.getItem("2PM"));

$("#save7").on("click", function() {
    let userText = $("#input7").val();
    localStorage.setItem("3PM", userText);
});
$("#input7").val(localStorage.getItem("3PM"));

$("#save8").on("click", function() {
    let userText = $("#input8").val();
    localStorage.setItem("4PM", userText);
});
$("#input8").val(localStorage.getItem("4PM"));

$("#save9").on("click", function() {
    let userText = $("#input9").val();
    localStorage.setItem("5PM", userText);
});
$("#input9").val(localStorage.getItem("5PM"));

// Color selection filters for hourly user inputs
function colorPicker() {
    // Clock value
    let DateTime = luxon.DateTime;
    // Text input selector variables
    let hour1 = $("#input1");
    let hour2 = $("#input2");
    let hour3 = $("#input3");
    let hour4 = $("#input4");
    let hour5 = $("#input5");
    let hour6 = $("#input6");
    let hour7 = $("#input7");
    let hour8 = $("#input8");
    let hour9 = $("#input9");
    // Sets background colors based on the clock's current hour
    if (DateTime.now().hour < 9) {
        hour1.addClass("future");
    } else if (DateTime.now().hour === 9) {
        hour1.addClass("present");
    } else {
        hour1.addClass("past");
    };

    if (DateTime.now().hour < 10) {
        hour2.addClass("future");
    } else if (DateTime.now().hour === 10) {
        hour2.addClass("present");
    } else {
        hour2.addClass("past");
    };
    
    if (DateTime.now().hour < 11) {
        hour3.addClass("future");
    } else if (DateTime.now().hour === 11) {
        hour3.addClass("present");
    } else {
        hour3.addClass("past");
    };

    if (DateTime.now().hour < 12) {
        hour4.addClass("future");
    } else if (DateTime.now().hour === 12) {
        hour4.addClass("present");
    } else {
        hour4.addClass("past");
    };

    if (DateTime.now().hour < 13) {
        hour5.addClass("future");
    } else if (DateTime.now().hour === 13) {
        hour5.addClass("present");
    } else {
        hour5.addClass("past");
    };

    if (DateTime.now().hour < 14) {
        hour6.addClass("future");
    } else if (DateTime.now().hour === 14) {
        hour6.addClass("present");
    } else {
        hour6.addClass("past");
    };

    if (DateTime.now().hour < 15) {
        hour7.addClass("future");
    } else if (DateTime.now().hour === 15) {
        hour7.addClass("present");
    } else {
        hour7.addClass("past");
    };

    if (DateTime.now().hour < 16) {
        hour8.addClass("future");
    } else if (DateTime.now().hour === 16) {
        hour8.addClass("present");
    } else {
        hour8.addClass("past");
    };

    if (DateTime.now().hour < 17) {
        hour9.addClass("future");
    } else if (DateTime.now().hour === 17) {
        hour9.addClass("present");
    } else {
        hour9.addClass("past");
    };
    return;
};

// Runs the text input color picker on window load
window.onload = colorPicker();