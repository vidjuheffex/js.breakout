let core=function(){
    function init(){
        viewer.init()
        document.body.appendChild(viewer.getRenderer().view);
        game.setup()
    };
    
    return {
        init, init
    }
}();

core.init()


