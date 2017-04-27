let viewer = function(){
    let width, height, renderer;

    let getWidth = function() { return width };
    let getHeight = function() { return height };
    let getRenderer = function(){return renderer};

    function init(){
        width= 1024;
        height = 512;
        renderer = PIXI.autoDetectRenderer(width, height);
    }

    
    return {
        init: init,
        getRenderer: getRenderer,
        getWidth: getWidth,
        getHeight: getHeight
    }
}()