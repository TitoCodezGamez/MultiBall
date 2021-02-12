var ball;

var database, BallPos, Pos;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    BallPos = database.ref('Ball/pos');
    BallPos.on("value", readPosition, showError);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Ball/pos").set({'x': Pos.x+x, 'y': Pos.y+y});
}

function readPosition(data){
    Pos = data.val();
    ball.x = Pos.x;
    ball.y = Pos.y;
}

function writePosition(x,y){
    database.ref("Ball/pos").set({'x': Pos.x+x, 'y': Pos.y+y});
}

function showError(){
    console.log("bad thing happened");
}