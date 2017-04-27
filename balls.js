let balls = function(){

    function create() {
        let ball = new PIXI.Graphics();
        ball.radius = 8;
        ball.beginFill(0x9966FF);
        ball.drawCircle(0, 0, ball.radius);
        ball.endFill();
        ball.x = viewer.getWidth() / 2 - ball.radius;
        ball.y = 420;
        ball.vx = 5;
        ball.vy = -5;
        return ball;
    }


    return {
        create: create
    }
}();