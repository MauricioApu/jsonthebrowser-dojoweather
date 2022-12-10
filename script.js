function load() {
    alert("Loading weather report...")
}

function dismiss() {
    document.getElementById("cookies").remove();
}

function unit(choice) {
    var max = document.querySelectorAll(".maxtemp");
    var min = document.querySelectorAll(".mintemp");
    var maxtempC=[24,27,21,26];
    var mintempC=[18,19,16,21];
    if(choice=="f") {
        for (var i = 0; i < max.length; i++) {
            max[i].innerText = Math.round(maxtempC[i]*9/5+32)+"°F";
        }
        for (var i = 0; i < max.length; i++) {
            min[i].innerText =Math.round(mintempC[i]*9/5+32)+"°F";
        }
    }else {
        for (var i = 0; i < max.length; i++) {
            max[i].innerText = maxtempC[i]+"°C";
        }
        for (var i = 0; i < max.length; i++) {
            min[i].innerText = mintempC[i]+"°C";
        }
    }
    
}