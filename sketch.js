var ball;
var database,position;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database()
    var ballPosition = database.ref('Ball/position')
    ballPosition.on("value", readPOSITION,readError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('Ball/position').set({

        'x' : position.x + x ,
        'y' : position.y + y 
    })
  //  ball.x = ball.x + x;
  //  ball.y = ball.y + y;
}
function readPOSITION(data){
    position = data.val()
    console.log("alola"+position.x,position.y)
ball.x = position.x
ball.y = position.y
}
function readError(){
    console.log("alola")
}