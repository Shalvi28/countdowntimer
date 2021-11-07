    var deadline = new Date("Dec 7, 2023 01:36:25").getTime();

    var x = setInterval(function() {
    var now = new Date().getTime();
    var y = deadline - now;

    var days = Math.floor(y / (1000 * 60 * 60 * 24));
    var hours = Math.floor((y % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((y % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((y % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (y < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML = '';
        document.getElementById("hour").innerHTML = '';
        document.getElementById("minute").innerHTML = '';
        document.getElementById("second").innerHTML = '';
        
    }
}, 1000);