var ball1,database,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";

    var ball1position=database.ref("ball/position");
    //listener
    ball1position.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}}
//ball.x=ball.x+1
/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}*/

function readPosition(data)
{
position=data.val();
ball1.x=position.x;
ball1.y=position.y;
}

function writePosition(x,y)
{
database.ref("ball/position").set({
    x:position.x+x,
    y:position.y+y
})
}

function showError()
{
console.log("Hi Mautik,error in db");
}
