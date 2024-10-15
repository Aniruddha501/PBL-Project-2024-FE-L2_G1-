document.addEventListener("DOMContentLoaded", function() {

    var to_do_list_2_= document.getElementById("to_do_list_2");
    to_do_list_2_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("To do list");
        window.location.href = "todo.html";
    });

    var stop_watch_2_= document.getElementById("stop_watch_2");
    stop_watch_2_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("Stop Watch");
        window.location.href = "stopwatch.html";
    });

    var timer_2_= document.getElementById("timer_2");
    timer_2_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("Timer");
        window.location.href = "timer.html";
    });

    var calendar_2_= document.getElementById("calendar_2");
    calendar_2_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("Calendar");
        window.location.href = "calender.html";
    });
    
    var to_do_list_= document.getElementById("to_do_list_1");
    to_do_list_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("To do list");
        window.location.href = "todo.html";
    });

    var stop_watch_= document.getElementById("stop_watch_1");
    stop_watch_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("Stop Watch");
        window.location.href = "stopwatch.html";
    });

    var timer_= document.getElementById("timer_1");
    timer_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("Timer");
        window.location.href = "timer.html";
    });

    var calendar_= document.getElementById("calendar_1");
    calendar_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("Calendar");
        window.location.href = "calender.html";
    });

    var logout_b = document.getElementById("logout_b");
    logout_b.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("Logged out!");
        window.location.href = "landing.html";
    });

    var sett_= document.getElementById("setting_1");
    sett_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("Setting page");
        window.location.href = "setting.html";
    });

    var p1_= document.getElementById("password_1");
    p1_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("Password page");
        window.location.href = "password.html";
    });

    var p2_= document.getElementById("profile_1");
    p2_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("Profile page");
        window.location.href = "profile.html";
    });

    var about_us_= document.getElementById("about_us_1");
    about_us_.addEventListener("click", function(event) 
    {
        // Prevent the default behavior of the link
        event.preventDefault();
        alert("ABOUT US");
        window.location.href = "aboutus.html";
    });

}
);