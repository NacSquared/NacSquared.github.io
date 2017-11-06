
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

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.matches(".dropbtn")){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}



document.getElementById("date").innerHTML = new Date();