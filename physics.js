let physics = function(){
    function checkBoundaryCollision(){
        game.getActiveBalls().children.forEach(function (ball, i) {
            if (ball.y-ball.radius < 0) {
                ball.y = ball.radius
                ball.vy = ball.vy * -1;
            }
            else if (ball.x + ball.radius >= viewer.getWidth()){
                ball.x = viewer.getWidth() - ball.radius;
                ball.vx = ball.vx * -1;
            }
            else if (ball.x - ball.radius <= 0) {
                ball.x = ball.radius;
                ball.vx = ball.vx * -1;
            }
        })
    }

    function checkPaddleCollision() {
        let player = game.getActivePlayer();
        game.getActiveBalls().children.forEach(function (ball, i) {
            if (ball.y + 8 > player.y && ball.x-8 >= player.x && ball.x+8 <= player.x + 64) {
                ball.y = player.y - 8;
                ball.vy = ball.vy * -1;
                ball.vx = ball.vx + (player.vx * .1);
            }
            if (ball.y - 8 > 508) {
                ball.x = 1024 / 2;
                ball.y = 420;
                ball.vx = 5;
                ball.vy = -5;
            }
        })
    }

    function checkBlockCollision() {
        game.getActiveBalls().children.forEach(function (ball, i) {
            game.getActiveBlocks().children.forEach(function (block, index) {
                let collision = false;
                //if top of ball goes above the bottom of a block, while within the left and right sides of the block, travelling upwards
                if (ball.y - 8 < block.y + 32 && ball.x > block.x && ball.x < block.x + 64 && ball.vy < 0 && ball.y + 8 > block.y + 32) {
                    ball.y = block.y + 32 + 8;
                    ball.vy = ball.vy * -1;
                    collision = true;
                }
                //if left of ball goes past the right edge of a block, while within the top and bottom side of the block, travelling left 
                else if (ball.x - 8 < block.x + 64 && ball.y-8 < block.y + 32 && ball.y + 8 > block.y && ball.vx < 0 && ball.x + 8 > block.x + 64) {
                    ball.x = block.x + 64 + 8;
                    ball.vx = ball.vx * -1;
                    collision = true;
                }
                
                //if right edge of ball goes past the left edge of the block, while within the top and bottom side of the block travelling right.
                else if (ball.x + 8 > block.x && ball.y-8 < block.y + 32 && ball.y + 8 > block.y && ball.vx > 0 && ball.x - 8 < block.x) {
                    ball.x = block.x-8;
                    ball.vx = ball.vx * -1;
                    collision = true;
                }

                //else if bottome of ball goes past top of brickm while within the left and right edges, and travelling down
                else if (ball.y + 8 > block.y && ball.x > block.x && ball.x < block.x + 64 && ball.vy > 0 && ball.y - 8 < block.y - 8) {
                    ball.y = block.y - 20;
                    ball.vy = ball.vy * -1;
                    collision = true;
                }
                if (block.type != 'B' && collision == true) {
                    block.lives -= 1;
                    if (block.lives == 0){
                        if (block.hasPowerup == true){
                            powerup = powerups.createPowerup(block.x + 32, block.y+16);
                            game.getActivePowerups().addChild(powerup);
                        }
                        game.getActiveBlocks().removeChild(block)
                    }
                }
            })
        })
    }

    function checkPowerupCollision(){
        game.getActivePowerups().children.forEach(function(powerup, index){
            if (powerup.y+powerup.radius > viewer.getHeight()) {
                game.getActivePowerups().removeChild(powerup)
            }
        })
    }

    return {
        checkBoundaryCollision: checkBoundaryCollision,
        checkPaddleCollision: checkPaddleCollision,
        checkBlockCollision: checkBlockCollision,
        checkPowerupCollision: checkPowerupCollision
    }
}()

