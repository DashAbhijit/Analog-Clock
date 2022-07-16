setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);



setInterval(displayClock, 1000);
    function displayClock() {

        var time = new Date();
        var hrs = time.getHours();
        var min = time.getMinutes();
        var sec = time.getSeconds();
        var t='AM';
        if (hrs>=12){
            t='PM';
        }
        if (hrs >= 12) {
            hrs = hrs - 12;
        }
        if (hrs == 0) {
            hrs = 12;

        }
        if (hrs<10){
            hrs='0'+hrs;
        }
        if (min<10){
            min='0'+min;
        }
        if (sec<10){
            sec='0'+sec;
        }
        
        document.getElementById('clock').textContent = hrs + ':' + min + ':' + sec + ' '+ t;
    }

