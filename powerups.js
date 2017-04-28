let powerups = function(){
    function createPowerup(x ,y){
        let powerup = new PIXI.Graphics();
        powerup.radius = 8;
        powerup.beginFill(0xFF0000);
        powerup.drawCircle(0, 0, ball.radius);
        powerup.endFill();
        powerup.x = x;
        powerup.y = y;

        powerup.vy = 3;
        return powerup;
    }

    return {
        createPowerup: createPowerup
    }
}()