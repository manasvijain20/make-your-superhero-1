var canvas = new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_image_x=10;
player_image_y=10;
var player_object = " ";
var block_image = " ";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_image_y,
            left:player_image_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL("get_image", function(Img){
        player_image_object = Img;
        player_image_object.scaleToWidth(150);
        player_image_object.scaleToHeight(140);
        player_image_object.set({
            top:player_image_y,
            left:player_image_x
        });
        canvas.add(player_image_object);
    });
}