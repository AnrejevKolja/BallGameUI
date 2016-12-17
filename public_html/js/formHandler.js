var formHandler = {
    getFirstBall: function(){
        radiusFist = parseInt ($('#radius1').val());
        colorFirst = $('#color1').val();
        startXFirst = parseInt ($('#startposx1').val());
        startYFirst = parseInt ($('#startposy1').val());
        speedXFirst = parseInt ($('#speedx1').val());
        speedYFirst = parseInt ($('#speedy1').val());
    },
    getSecondBall: function(){
        radiusSecond = parseInt ($('#radius2').val());
        colorSecond = $('#color2').val();
        startXSecond = parseInt ($('#startposx2').val());
        startYSecond = parseInt ($('#startposy2').val());
        speedXSecond = parseInt ($('#speedx2').val());
        speedYSecond = parseInt ($('#speedy2').val());
    },
    getGameArea: function(){
        gameAreaWidth = parseInt ($('#game_area_width').val());
        gameAreaHeight = parseInt ($('#game_area_height').val());
    }
    
};

