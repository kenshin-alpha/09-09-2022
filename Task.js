


var slider = document.getElementById("myRange");
var output = document.getElementById("count");
var resul = document.getElementById("result");



output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  
}

function myfunc() {
    if(document.getElementById("Science").checked == true) {
        var cost = 400 
    }
    else if(document.getElementById("Comics").checked == true) {
        var cost = 300
    }
    else {
        var cost = 0
    }
    var discount = 0
    if(slider.value <= 250 && cost == 400) {
        discount = 5
    }
    else if(slider.value > 250 && cost == 400) {
        discount = 7
    }
    else if(slider.value <= 250 && cost == 300) {
        discount = 3
    }
    else if(slider.value > 250 && cost == 300) {
        discount = 4
    }

    var result = (cost * slider.value) - ((discount/100)*(cost * slider.value))

    resul.innerHTML = result
}