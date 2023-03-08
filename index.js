// $("body").mousemove(eyeball);
let coffeeText = "OFFEE MADE WITH LOVING HANDS";
let i = 0;


let anim = setInterval(() => {
    $("#coffeegreet").append(coffeeText.charAt(i));
    i++;
    (i >= coffeeText.length) ? clearInterval(anim) : null;
}, 70);

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });
    $(window).ready(function () {
        AOS.init({
            duration: 500,
            easing: "ease-in-out",
            once: true,
            mirror: false,
            delay: 0
        });
    });

    $(".loginForm").keyup(check);

    $("#login").click(function () {
        $("#modal-form").fadeIn();
        $("#modal-form").css("display", "flex");
    });
    $(".close").click(function () {
        $("#modal-form").fadeOut()
    })

});

$(".face").append("<div class='mouth'></div>");
// $(document).mousemove(eyeball);
// function eyeball() {
//     var eye = document.querySelectorAll(".eye");

//     eye.forEach(function (eye) {
//         let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
//         let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
//         let radian = Math.atan2(event.pageX - x, event.pageY - y);
//         let rot = (radian * (180 / Math.PI) * -1) + 300;

//         $(eye).css({ "transform": "rotate(" + rot + "deg)" });

//     })
// }
function check() {

    var eye = document.querySelectorAll(".eye");
    if ($("#password").val().length < 8) {
        eye.forEach(function (eye) {
            $(eye).css({ "transform": "rotate(" + 360 + "deg)" });
            $(".mouth").css("height", "6px");
        })
    }
    else {
        eye.forEach(function (eye) {
            $(eye).css({ "transform": "rotate(" + 270 + "deg)" });
            $(".mouth").css("height", "20px");
        })
    }
}
