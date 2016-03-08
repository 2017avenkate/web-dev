var x = 0;
var y = 0;
var temp;
var numQuestions = 10;
var question;
var questions = ["What is the capital of Alabama?", "What is the state with the capital Cheyenne?", "What is the capital of Hawaii?", "What is the state with the capital Salem?", "What is the capital of Mississippi?", "What is the state with the capital Juneau?", "What is the capital of Arizona?", "What is the state with the capital Charlestown?", "What is the capital of Connecticut?", "What is the state with the capital Lincoln?"];
var answers = ["Montgomery", "Wyoming", "Honolulu", "Oregon", "Jackson", "Alaska", "Phoenix", "West Virginia", "Hartford", "Nebraska"];
var randomizedQuestions;
var randomizedAnswers;
var shuffledStuff;
var leftOver = [];
function timerFunction()
{
	timerFunction = stop();
	var interval = setInterval(function()
	{
		var timer = document.getElementById("timer");
		var time = parseInt(timer.innerHTML);
		var score = document.getElementById("scoreInt1");
		var scoreInt = parseInt(score.innerHTML);
		if(time > 0)
		{
			timer.innerHTML = time - 1;
		}
		if(time == 0  && !(scoreInt == numQuestions))
		{
			document.getElementById("display").innerHTML = "Game Over!";
			clearInterval(interval);
		}
		if(scoreInt == numQuestions)
		{
			clearInterval(interval);
		}
	}, 1000)
}
function check()
{
	check = stop()
	var interval = setInterval(function()
	{
		var score = document.getElementById("scoreInt1");
		var scoreInt = parseInt(score.innerHTML);
		var answerToProblem = document.getElementById("answer");
		var questionToProblem = document.getElementById("display").innerHTML;

		if(randomizedAnswers.indexOf(answerToProblem.value) == randomizedQuestions.indexOf(questionToProblem))
		{
			score.innerHTML = scoreInt + 1;
			var x = parseInt(randomizedAnswers.indexOf(document.getElementById("answer").value));			
			answerToProblem.value = "";
			display();
		}
		scoreInt = parseInt(score.innerHTML);
		if(scoreInt == numQuestions)
		{
			clearInterval(interval);
		}
	}, 1)
}
function display()
{
	if(x < answers.length)
	{
		question = randomizedQuestions[x];
		document.getElementById("display").innerHTML = question;
		x += 1;
	}
	else
	{
		if(leftOver.length == 0)
		{
			document.getElementById("display").innerHTML = "You Win!";
		}
		else
		{
			if(y < leftOver.length)
			{
				question = leftOver[y];
				document.getElementById("display").innerHTML = question;
				y += 1;
			}
			else
			{
				document.getElementById("display").innerHTML = "You Win!";
			}
		}
	}
}

function shuffle(array1, array2)
{
	var newArray1 = [];
	var newArray2 = [];
	for(var x = 0; x < numQuestions; x++)
	{
		newArray1.push(array1[x]);
		newArray2.push(array2[x]);
	}
	for (var i = array1.length - 1; i > 0; i--)
	{
       	var j = Math.floor(Math.random() * (i + 1));
        	var temp1 = newArray1[i];
        	var temp2 = newArray2[i];
        	newArray1[i] = newArray1[j];
        	newArray2[i] = newArray2[j];
        	newArray1[j] = temp1;
        	newArray2[j] = temp2;
    	}
    	return [newArray1, newArray2];
}
function skip()
{
	temp = document.getElementById("display").innerHTML + "";
	leftOver.push(temp);
	display();
}
function play()
{
	shuffledStuff = shuffle(questions, answers)
	randomizedQuestions = shuffledStuff[0];
	randomizedAnswers = shuffledStuff[1];
	timerFunction();
	check();
	display();
}
function restart()
{
	window.location.reload();
}
function stop()
{

}
