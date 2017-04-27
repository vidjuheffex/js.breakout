let blocks = function(){
    const width = 64;
    const height = 32;

    levelsArray = [
`
XXXXXXXXXXXXXXXX
XXXXBXXXXXXBXXXX
XXXXBRRRRRRBXXXX
XXXXBXXXXXXBXXXX
XXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXX
`,
`
XXXXXXXXXXXXXXXX
__XXXXXXXXXXXX__
__XXXXRRRRXXXX__
BBBBBXXXXXXBBBBB
XXXXX_____XXXXXX
XXXXXXXXXXXXXXXX
`,
]

    function getColor(token) {
        let rgb = [0, 0, 0]
        let weightedRandom = Math.abs(1 - Math.random() * .2);
        if (token == 'X') {
            rgb = [.4, .7, weightedRandom]
        }
        if (token == 'B') {
            rgb = [.4, .4, .4]
        }
        if (token == 'R') {
            rgb = [weightedRandom, .4, .7]
        }
        return rgb;
    }

    function create(token, row, column){
        block = new PIXI.Graphics();
        let rgb = getColor(token);
        let rgbasHex = PIXI.utils.rgb2hex(rgb);
        block.beginFill(rgbasHex);
        block.drawRect(0, 0, width, height);
        block.endFill();
        block.x = width * column,
        block.y = height * row;
        block.type = token;
        block.lives = -1;
        if (token == 'X')
            block.lives = 1;
        if (token == 'R')
            block.lives = 2;
        return block;
    }

    function loadBlocks(index, container){
        let levelAsTokenArray = [... levelsArray[index]];   
        let row = 0;
        let column = 0;

        levelAsTokenArray.forEach(function (token, index) {
        if (token != '\n') {
            if (column % 16 == 0 && column != 0) {
                row += 1;
                column = 0;
            }
            let block = blocks.create(token, row, column);
            container.addChild(block);

            column += 1;
        }})
    }

    return {
        create: create,
        loadBlocks: loadBlocks
    }
}()