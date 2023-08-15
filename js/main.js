
//nav icon
$('#ic').click(function () {
    $('nav').animate({ left: "0" }, 400)
    $('#ic').animate({ marginLeft: "250px" })
})
$('#close').click(function () {
    $('nav').animate({ left: "-230px" }, 400)
    $('#ic').animate({ marginLeft: "15px" })

})






//detail part
$("#detail>div p").not("#singer").slideUp(500);
$("#detail>div").click(function () {
    let x = $(this).find('p');
    $(x).slideToggle(500);
    $("#detail div p").not(x).slideUp(500);
    console.log('1');
})


//duration part
var countDownDate = new Date("february 1, 2024 01:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('#days').text(days + " d ");
    $('#hours').text(hours + " h");
    $('#minutes').text(minutes + " m");
    $('#sec').text(seconds + " s");

}, 1000);












//contact text temainig part
$('textarea').keyup(function () {

    let nums = $('textarea').val().length;
    let remaining = 100 - nums
    $('span').removeClass("d-none");
    if (remaining <= 0) {

        $("h5").text("your available character finished");

    } else {
        $("h5").text(remaining);
    }
})