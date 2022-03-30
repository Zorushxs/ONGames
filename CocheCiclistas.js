
$( document ).ready(function() {
    console.log( "ready!" );
    var game = new nombredeljuego("no_image.jpg");
    game.OnStart();
});

class nombredeljuego extends Game{
    OnStart()
    {
        var coche = new GameObject(0,0);
        AddGameObject(null,coche);
        SetSize(50,50, coche);
        SetImage("Img/prova.jpg", coche);
        MoveGameObject(200,100, coche);
        super.OnStart();
    }
}

class serpiente extends GameObject{
    Update()
    {
        super.Update();
        
    }
}