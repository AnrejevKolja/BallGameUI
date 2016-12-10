/* 
 Stop licensing!!111
 */


function startGame() {
    var radiusFirst = parseInt($('#radius1').val());
    var colorFirst = $('#color1').val();
//    var speedXFirst = parseInt($('#speedx1').val());
//    var speedYFirst = parseInt($('#speedy1').val());
//    var startXFirst = parseInt($('#startx1').val());
//    var startYFirst = parseInt($('#starty1').val());
    firstBall = new ball(30, colorFirst, 31, 31, 5, 5);
    secondBall = new ball(31 - 1, "blue", 600 - 31, 31, -5, 5);
    myGameArea.start(600, 400);
    $('#stopButton').show();
    $('#startButton').hide();
}