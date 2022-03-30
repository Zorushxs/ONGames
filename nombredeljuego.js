
$( document ).ready(function() {
    console.log( "ready!" );
    var game = new nombredeljuego("no_image.jpg");
    game.OnStart();
});

class nombredeljuego extends Game{
    OnStart()
    {
        var objeto = new GameObject(0,0);
        AddGameObject(null,objeto);
        super.OnStart();
    }
}

class serpiente extends GameObject{
    Update()
    {
        super.Update();
    }
}