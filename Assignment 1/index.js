var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana", "Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York", "North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
function timerFunction()
{
	timerFunction = stop;
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
		if(time == 0  && !(scoreInt == 50))
		{
			alert("Game Over!");
			clearInterval(interval);
		}
		if(scoreInt == 50)
		{
			alert("You Win!");
			clearInterval(interval);
		}
	}, 1000)
}
function check()
{
	check = stop
	setInterval(function()
	{
		var score = document.getElementById("scoreInt1");
		var scoreInt = parseInt(score.innerHTML);
		var nameOfState = document.getElementById("stateName").value;
		var upperFirstLetter = nameOfState[0].toUpperCase();
		var upperSecondLetter = ""
		var space = 0
		var nameOfStateLower = ""
		var perccomp = document.getElementById('perccomp');

		if (nameOfState.indexOf(" ") >= 0)
		{
			space = nameOfState.indexOf(" ")
		}

		if(space != 0)
		{
			upperSecondLetter = nameOfState[space + 1].toUpperCase()
			nameOfStateLower = upperFirstLetter + nameOfState.substring(1, space + 1) + upperSecondLetter + nameOfState.substring(space + 2, nameOfState.length);
		}
		else
		{
			nameOfStateLower = upperFirstLetter + nameOfState.substring(1, nameOfState.length);
		}

		if(states.indexOf(nameOfState) >= 0 || states.indexOf(nameOfStateLower) >= 0)
		{
			score.innerHTML = scoreInt + 1;
			var x = parseInt(states.indexOf(document.getElementById("stateName").value));
			if(scoreInt == 49)
			{
				document.getElementById("display").innerHTML += " " + nameOfStateLower;
			}
			else
			{
				document.getElementById("display").innerHTML += " " + nameOfStateLower + ",";
			}				
			document.getElementById("stateName").value = "";
			perccomp.setAttribute("style","width:"+Math.round((scoreInt+1)/50*100)+'%');
			perccomp.innerHTML = Math.round((scoreInt+1)/50*100)+"%"			 		
			delete states[x];
		}
	}, 1)
}
function restart()
{
	window.location.reload();
}
function stop()
{

}
