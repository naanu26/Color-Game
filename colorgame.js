var numSquares=6;

var colors=generateRandomColors(numSquares);

var squares= document.querySelectorAll(".square");

var pickedColor=pickColor();

var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;

var messageDisplay=document.querySelector("#message");

var h1=document.querySelector("h1");

var resetButton= document.querySelector("#reset");

var easyBtn=document.querySelector("#easyBtn");

var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
		
	}

});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
		
		
	}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors=generateRandomColors(numSquares);

	//pick a new random color from array
	pickedColor=pickColor();

	//change the color display as of the picked color
	colorDisplay.textContent=pickedColor;
	this.textContent="NEW COLORS"

	messageDisplay.textContent=" ";
	//change the colors of the square
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";

});


for(var i=0; i<squares.length; i++)
{
	//add initial colors to squares
	squares[i].style.backgroundColor= colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab the clicked color
		var clickedColor = this.style.backgroundColor;
		//compare the color
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent="CORRECT";
			resetButton.textContent="PLAY AGAIN?";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else
		{
			this.style.backgroundColor= "#232323";
			messageDisplay.textContent="TRY AGAIN";
		}
	});
}


function changeColors(color)
{
	//loop through the squares
	for(var i=0; i<squares.length; i++)
	{
		//change each square color 
		squares[i].style.backgroundColor = color;
	}
}


function pickColor()
{
	//Math.random() generates a random number;Math.floor cuts the float numbers and gives us the decimal number
	var random=Math.floor(Math.random() * colors.length); 
	return colors[random];
}

function generateRandomColors(num)
{
	//make an array
	var arr=[];

	for(var i=0; i<num; i++)
	{
		arr.push(randomColor());
	}

	return arr;
}

function randomColor()
{
	//pick a red from 0-255
	var r=Math.floor(Math.random()*256);

	//pick a red from 0-255
	var g=Math.floor(Math.random()*256);

	//pick a red from 0-255
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}