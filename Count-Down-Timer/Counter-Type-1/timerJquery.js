// Js (Jquery) Script Counter Timer

// Counter Function
function countTimer() {
    const getDate = $("div.countdown").attr("data-date");
    const finalDate = new Date(getDate).getTime();
    const intDate = new Date().getTime();

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor((finalDate - intDate) / days);
    let h = Math.floor(((finalDate - intDate) % days) / hours);
    let m = Math.floor(((finalDate - intDate) % hours) / minutes);
    let s = Math.floor(((finalDate - intDate) % minutes) / seconds);

    d = d < 10 ? `0${d}` : d;
    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    $("#day").text(d);
    $("#hour").text(h);
    $("#minute").text(m);
    $("#second").text(s);
}

// Call Counter Function
setInterval(function () {
    countTimer();
}, 1000);
