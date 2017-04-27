let players = function(){
    let width, height;

    let setBindings = function(player){
        let left = input.keyboard(37);
        let right = input.keyboard(39);
        left.press = function () {
            player.vx = -player.speed;
        };
        left.release = function () {
            if (!right.isDown) {
                player.vx = 0;
            }
        };
        right.press = function () {
            player.vx = player.speed;
        };

        right.release = function () {
            if (!left.isDown) {
                player.vx = 0;
            }
        };
    }

    let createPlayer = function(){
        let player = new PIXI.Graphics();
        width = 64;
        height = 8;
        player.beginFill(0x66CCFF);
        player.drawRect(0, 0, width, height);
        player.endFill();
        player.x = (viewer.getWidth() / 2) - (width / 2);
        player.y = 496;
        player.vx = 0;
        player.speed = 10;
        return player;
    }

   return {
       createPlayer: createPlayer,
       setBindings: setBindings,
   } 
}()