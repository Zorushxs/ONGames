
var width = 1600;
var height = 900;
var background_image;

//percent of the size
var size=70;

//activa la vision de debugador, para ver mas facilmente lo que esta ocurriendo
var debug = true;
function ToggleDebug()
{
    if(debug)
        debug=false;
    else
        debug=true;
}

//clase que opera todo
class Game{
    constructor(background)
    {
        background_image = background;
        GetCanvasElement().css("width",TransformIntoGameScreenSpace(width));
        GetCanvasElement().css("height",TransformIntoGameScreenSpace(height));
        RootGameObject = new GameObject();
        SetSize(width,height,RootGameObject);
    };
    OnStart(){

        setInterval(UpdateScene,16);
        setInterval(DrawScene,16);
        console.log("xd")
    }
    //TO DO, QUE SE EJECUTEN LAS COSAS PERIODICAMENTE (16ms/60FPS)
}

function GetCanvasElement()
{
    return $("canvas.game");
}

var number_of_gameobjects = 0;
var RootGameObject;

class GameObject{
    constructor(_x,_y)
    {
        this.children=[];
        this.id = GetID();
        this.x = _x;
        this.y = _y;

    }

    Update()
    {
        if(this.children != null && this.children.length>0)
        {
            this.children.forEach(child => {
                child.Update();
            });
        }
    };

    Draw(ctx)
    {
        if(this.sprite != null)
            ctx.drawImage(this.sprite,
                TransformIntoGameScreenSpace(this.x),
                TransformIntoGameScreenSpace(this.y),
                TransformIntoGameScreenSpace(this.width),
                TransformIntoGameScreenSpace(this.height));

        if(debug)
            ctx.fillRect(
                TransformIntoGameScreenSpace(this.x),
                TransformIntoGameScreenSpace(this.y),
                TransformIntoGameScreenSpace(this.width),
                TransformIntoGameScreenSpace(this.height));

        if(this.children != null && this.children.length>0)
        {
            this.children.forEach(child => {
                child.Draw(ctx);
            });
        }
    }

}

function ShowHierarchy()
{
    console.log(RootGameObject.children);
}

function GetID()
{
    return number_of_gameobjects++;
}

function AddGameObject(parent,_gameobject)
{
    var new_gameobject = _gameobject;
    var parentGameObj = RootGameObject;
    if(parent != null){
        parentGameObj = parent;
    }
    
    parentGameObj.children.push(new_gameobject);

    return new_gameobject;
}

function SetSize(_width, _height, target)
{
    target.width = _width;
    target.height = _height;
}

function SetImage(_src, target)
{
    target.sprite = new Image();
    target.sprite.src = _src;
}

function SetPosition(_x,_y,target)
{
    target.x = _x;
    target.y = _y;
}

function MoveGameObject(_x,_y,target)
{
    target.x+=_x;
    target.y+=_y;
}

function TransformIntoGameScreenSpace(amount)
{
    return amount*size/100;
}

function DrawScene()
{
    //pillar contexto
    var c = document.getElementById("game");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.globalAlpha = 0.3;

    RootGameObject.Draw(ctx);

}

function UpdateScene()
{
    RootGameObject.Update();
}