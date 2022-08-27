function setRotation(element, rotate) {
    element.style.setProperty('--rotation', rotate * 360)
}



function Funk() {
    let hour = document.querySelector('.hour');
    let min = document.querySelector('.min');
    let sec = document.querySelector('.sec');
    let span = document.querySelector('.span');
    let date = new Date()

    let mill = date.getMilliseconds() / 1000;
    let second = date.getSeconds() / 60;
    let minut = (second + date.getMinutes()) / 60;
    let hours = (minut + date.getHours()) / 12;
    setRotation(hour, hours);
    setRotation(min, minut);
    setRotation(sec, second);
    setRotation(span, mill);
}
setInterval(Funk, 1)

Funk()