canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
player_object="";
block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
             left:player_x,
             top:player_y
        });
        canvas.add(player_object);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(img){
        block_object=img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
             left:player_x,
             top:player_y
        });
        canvas.add(block_object);
    })
}