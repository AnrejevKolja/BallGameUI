/* 
 Stop licensing!1111
 */


function startGame() {
    //colors
    var colorFirst = $('#color1').val();
    var colorSecond = $('#color2').val();
    //speed X/Y First Ball
    var speedXFirst = parseInt($('#speedx1').val());
    var speedYFirst = parseInt($('#speedy1').val());
    //speed X/Y Second Ball
    var speedXSecond = parseInt($('#speedx2').val());
    var speedYSecond = parseInt($('#speedy2').val());
    //radius
    var radius = parseInt($('#radius1').val());

    firstBall = new ball(radius, colorFirst, 30 + 1, 30 + 1, speedXFirst, speedYFirst);
    secondBall = new ball(31 - 1, colorSecond, 600 - 31, 31, -5, 5);
    myGameArea.start(600, 400);
    $('#stopButton').show();
    $('#startButton').hide();
}