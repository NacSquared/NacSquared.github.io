var image = document.getElementById("redStopLight");
var greenCar = document.getElementById("greenCar");
var redCar = document.getElementById("redCar");
var winningCar = document.getElementById("WinningCar");
winningCar.style.display = 'none';
var number = Math.random() * 100;
var number2 = Math.random() * 100;
var raceStarted = false;

function changeLight()
{
    image.src = "Images/greenStopLight.png";
}

function startRace()
{
    raceStarted = true;

    setTimeout(function () {
        var newNumber = (Math.random() * 100) + number;
        var newNumber2 = (Math.random() * 100) + number2;
        
        greenCar.style.marginLeft = newNumber + 'px';
                
        redCar.style.marginLeft = newNumber2 + 'px';
        
        number = newNumber;
        number2 = newNumber2;
        
        var greenDistance = greenCar.style.marginLeft.slice(0, -2);
        var redDistance = redCar.style.marginLeft.slice(0, -2);

        var width = screen.width;

        if (greenDistance >= width - 150)
        {
            winningCar.style.display = 'inline';
            window.alert("The green car won!");
        }
        else if (redDistance >= width - 150)
        {           
            document.getElementById("winningCarID").src = "Images/redCar.png";
            winningCar.style.display = 'inline';
            window.alert("The red car won!");                  
        }
        else
        {
            startRace();
        }       
    }, 500);       
}

function reset()
{
    image.src = "Images/redStopLight.png";
    winningCar.style.display = 'none';
    greenCar.style.marginLeft = 0;
    redCar.style.marginLeft = 0;
    greenDistance = 0;
    redDistance = 0;
    newNumber = 0;
    newNumber2 = 0;
    number = 0;
    number2 = 0;
}