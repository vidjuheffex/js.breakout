let game = function(){
    let stage, activePlayer, activeBlocks, activeBalls;

    function getActivePlayer(){ return activePlayer; }
    function getActiveBalls(){ return activeBalls; }
    function getActiveBlocks(){ return activeBlocks; }

    //states
    function play (){
        //apply players current x velocity to their x position
        activePlayer.x += activePlayer.vx;

        //apply balls current x and y velocity to their x and y position
        activeBalls.children.forEach(function (ball, i) {
            ball.x += ball.vx;
            ball.y += ball.vy;
        });

        physics.checkBoundaryCollision();
        physics.checkPaddleCollision();
        physics.checkBlockCollision();

    }

    function gameLoop (){
        requestAnimationFrame(gameLoop);
        state();
        viewer.getRenderer().render(stage);        
    }

    function setup(){
        //Initializing Stage and Containers
        stage = new PIXI.Container();
        
        //Initializing Player
        activePlayer = players.createPlayer();
        players.setBindings(activePlayer);
        stage.addChild(activePlayer);

        //Initialize Level
        activeBlocks = new PIXI.Container()
        blocks.loadBlocks(0, activeBlocks)
        stage.addChild(activeBlocks)

        //Initialize First Ball
        activeBalls = new PIXI.Container()
        ball = balls.create();
        activeBalls.addChild(ball);

        stage.addChild(activeBalls);

        state = play;
        gameLoop();
    }

    return {
        setup: setup,
        getActiveBalls: getActiveBalls,
        getActivePlayer: getActivePlayer,
        getActiveBlocks: getActiveBlocks
    }

}()

