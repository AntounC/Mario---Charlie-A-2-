game.resources = [
    /* Graphics. 
     * @example
     * {name: "example", type:"image", src: "data/img/example.png"},
     */
    {name:"background-tiles", type: "image", src: "data/img/background-tiles.png"},
    /*Sets images to be used for background tiles*/
    {name:"meta-tiles", type: "image", src: "data/img/meta-tiles.png"},
    /*Sets images to be used for meta tiles*/
    {name: "mario", type:"image", src: "data/img/player1.png"},
    /*This code sets the images used for Mario's animation*/
    {name: "title-screen", type:"image", src: "data/img/title-screen.png"}, 
    /*This code sets the title screen of the game to an image*/
    {name: "slime", type:"image", src: "data/img/slime-spritesheet.png"}, 
    
    /* Atlases 
     * @example
     * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
     */

    /* Maps. 
     * @example
     * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
     * {name: "example01", type: "tmx", src: "data/map/example01.json"},
     */
    {name: "level01", type: "tmx", src: "data/map/level04.tmx"},
    {name: "level02", type: "tmx", src: "data/map/level05.tmx"}
    /*This code states what map is going to be loaded by the game*/
    
    /* Background music. 
     * @example
     * {name: "example_bgm", type: "audio", src: "data/bgm/"},
     */

    /* Sound effects. 
     * @example
     * {name: "example_sfx", type: "audio", src: "data/sfx/"}
     */
];
