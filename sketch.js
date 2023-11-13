const horas =  document.getElementById ('horas');
const minutoss =  document.getElementById ('minutos');
const segundos =  document.getElementById ('segundos');

const relogio = setInterval(function time()) {
    let dateToday = new Date();
    let hr = dateToday = dateToday.getHours();
    let min = dateToday = dateToday.getMinutes();
    let seg = dateToday = dateToday.getMilliseconds();

    if(hr < 10) hr = '0' + hr;

    if(min < 10) min = '0' + min;

    if(seg < 10) seg = '0' + seg;

    horas.textContent = hr

    minutos.textContent = min

    segundos.textContent = seg
}