canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
img_width = 400;
img_height = 200;

var img_image;

img_x = 200;
img_y = 200;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
   
    if((keyPressed >=97 && keyPressed <=122 )|| (keyPressed >=65 && keyPressed <=90))
    { 
        alphabetkey();
        document.getElementById("myh3").innerHTML="You pressed Alpahabet Key";
        console.log("alphabetkey");
    }
    else
    if(keyPressed >=48 && keyPressed <=57 )
	{
        numberkey();
        document.getElementById("myh3").innerHTML="You pressed Number Key";
        console.log("Numberkey");
    }
    else
	if(keyPressed >=37 && keyPressed <=40 )
	{
        arrowkey();
        document.getElementById("myh3").innerHTML="You pressed Arrow Key";
        console.log("Arrowkey");
    }
    else
	if(keyPressed  ==17 ||  keyPressed ==18 || keyPressed ==27)
	{
        specialkey();
        document.getElementById("myh3").innerHTML="You pressed Special Key";
        console.log("Specialkey");
    }
	else
	{
			otherkey();
			document.getElementById("myh3").innerHTML="You pressed Other Key";
			console.log("Othererkey");
		
	}
}

function alphabetkey()
{
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}

