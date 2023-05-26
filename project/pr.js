let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    mouse = { x: 0, y: 0 },
    draw = false;
let p = document.getElementById("pr");
let rec = document.getElementById("rec");
context.strokeStyle = "green";
context.lineWidth = "20px";
context.fillStyle = "white";
context.font = "50px Verdana";
context.fillText(".", 600, 300);
let procent = 100;
let a = 0;
let d = 100;
let t = true;

function counttime() {
    var seconds = 10;
    var timer = setInterval(function() {
        seconds--;
        if (seconds <= 0) {
            alert("Too slow");
            t = false;

        }
    }, 1000);
}

canvas.addEventListener("mousedown", function(e) {


    let ClientRect = this.getBoundingClientRect();
    mouse.x = e.clientX - ClientRect.left;
    mouse.y = e.clientY - ClientRect.top;

    draw = true;
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);

    if (mouse.x >= 595 && mouse.x <= 602 && mouse.y >= 295 && mouse.y <= 302) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = "white";
        context.font = "50px Verdana";
        context.fillText(".", 600, 300);
        p.innerHTML = "xxx";
        alert("Слишком близко");

    }

});
canvas.addEventListener("mousemove", function(e) {


    if (draw === true) {

        let ClientRect = this.getBoundingClientRect();



        mouse.x = e.clientX - ClientRect.left;
        mouse.y = e.clientY - ClientRect.top;

        context.lineTo(mouse.x, mouse.y);
        context.stroke();

        if (t == true) {
            counttime();
        }





        let rd = Math.sqrt(Math.pow(e.clientX - 600, 2) + Math.pow(300 - e.clientY, 2));

        let s = 3.14 * rd * rd;
        let qual = (a / s) * 100;
        d = (qual + procent) / 2;




        a = s;
        procent = qual;
        if (mouse.x >= 590 && mouse.x <= 610 && mouse.y >= 290 && mouse.y <= 310) {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            context.fillStyle = "white";
            context.font = "50px Verdana";
            context.fillText(".", 600, 300);
            p.innerHTML = "xxx";
            alert("Слишком близко");

        }






        if (d > 100) {
            d = 100 - (d - 100);
        }
        p.innerHTML = Math.round(d);
        p.innerHTML = String(p.innerHTML) + "%";

        if (d >= 85) {
            context.strokeStyle = "green";


        } else if (d < 85 && d >= 65) {
            context.strokeStyle = "orange";

        } else if (d < 65 && d >= 45) {
            context.strokeStyle = "yellow";

        } else {
            context.strokeStyle = "red";

        }






    }
});
canvas.addEventListener("mouseup", function(e) {

    let ClientRect = this.getBoundingClientRect();
    mouse.x = e.clientX - ClientRect.left;
    mouse.y = e.clientY - ClientRect.top;
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
    context.closePath();
    draw = false;
    if (rec.innerHTML < p.innerHTML) {
        rec.innerHTML = p.innerHTML;
    }
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "white";
    context.font = "50px Verdana";
    context.fillText(".", 600, 300);
    p.innerHTML = "xxx";



});