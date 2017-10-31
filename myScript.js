
function dataValidation() 
    {
        var x = document.forms["contactForm"]["firstname"].value;
        var y = document.forms["contactForm"]["lastname"].value;

        if (!isNaN(x) || x == "")
        {
            alert("Please enter your first name using characters only.")
            return false;
        }

        if (!isNaN(y) || y == "")
        {
            alert("Please enter your last name using characters only.")
            return false;
        }
    }

document.getElementById("date").innerHTML = new Date();