
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "mario",
                spritewidth: "128",
                spriteheight: "128",
                width: 128,
                height: 128,
                getShape: function() {
                    return (new me.Rect(0, 0, 30, 128)).toPolygon();
                }

            }]);

        this.renderable.addAnimation("idle", [3]);
        this.renderable.addAnimation("smallWalk", [8, 9, 10, 11, 12, 13], 80);
        //creates an animation for the character walking without powerups
        //the series of numbebrs sets an array for the images used to make up the animation
        //the 80 at the end states that the animation will be ongoing at the rate of 80 miliseconds
        this.renderable.setCurrentAnimation("idle");

        this.body.setVelocity(5, 20);

    },
    update: function(delta) {
        if (me.input.isKeyPressed("right")) {
            //states that if the key is pressed, then mario begins to move right
            this.body.vel.x += this.body.accel.x * me.timer.tick;
            //me.timer tick smooths animations
        } else {
            this.body.vel.x = 0;
        }

        this.body.update(delta);
        me.collision.check(this, true, this.collideHandler.bind(this), true);

        if (this.body.vel.x !== 0) {
            if (!this.renderable.isCurrentAnimation("smallWalk")) {
                this.renderable.setCurrentAnimation("smallWalk");
                this.renderable.setAnimationFrame();
            }
        } else {
            this.renderable.setCurrentAnimation("idle");
        }


        this._super(me.Entity, "update", [delta]);
        return true;

    },
    collideHandler: function(response) {

    }

});


game.LevelTrigger = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, settings]);
        this.body.onCollision = this.onCollision.bind(this);
        //sets what happens when mario colllides with an object
        /*makes the character move into the second level when 
         * the character collides with the level trigger*/
        this.level = settings.level;
        this.xSpawn = settings.xSpawn;
        this.ySpawn = settings.ySpawn;
    },
    onCollision: function() {
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level);
        me.state.current().resetPlayer(this.xSpawn, this.ySpawn);
    }

});

        game.BadGuy = me.Entity.extend({
        init: function(x, y, settings){
        this._super(me.Entity, 'init', [x, y, {             
                image: "slime",
                spritewidth: "60",
                spriteheight: "28",
                width: 60,
                height: 28,
                getShape: function() {
                return (new me.Rect(0, 0, 60, 28)).toPolygon();
                }
      

        }]);
                    
        this.spritewidth = 60;
        x = this.pos.x;
        this.startX = x;    
        this.endX = x + width - this.spritewidth;
        
        },
        
                update: function(delta){

                }
                
    });