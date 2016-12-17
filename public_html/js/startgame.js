/* 
 Stop licensing!1111
 */


function startGame() {
    formHandler.getFirstBall();
    formHandler.getSecondBall();
    formHandler.getGameArea();

    firstBall = new ball(radiusFist, colorFirst, startXFirst, startYFirst, speedXFirst, speedYFirst);
    // firstBall = new ball (30, "red", 31, 31, 5, 5);
    secondBall = new ball(radiusSecond, colorSecond, startXSecond, startYSecond, speedXSecond, speedYSecond);
    myGameArea.start(gameAreaWidth, gameAreaHeight);
    $('#stopButton').show();
    $('#startButton').hide();
}