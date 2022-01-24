var numb = 0;
var w = window.innerWidth;

fetch("./scripts/data.json")
.then(
    function(resp){
        return resp.json();
    })
    .then(function(data){
        //data.destinations[0];
        document.getElementById("topic").innerHTML = data.technology[numb].name;
        document.getElementById("description").innerHTML = data.technology[numb].description;
        if (w<=991){
            document.getElementById("techImage").src = data.technology[numb].images.landscape;
        }
        else{
            document.getElementById("techImage").src = data.technology[numb].images.portrait;
        }
    })

changeInfo = numb =>{
    fetch("./scripts/data.json")
.then(
    function(resp){
        return resp.json();
    })
    .then(function(data){
        //data.destinations[0];
        document.getElementById("topic").innerHTML = data.technology[numb].name;
        document.getElementById("description").innerHTML = data.technology[numb].description;
        if (w<=991){
            document.getElementById("techImage").src = data.technology[numb].images.landscape;
        }
        else{
            document.getElementById("techImage").src = data.technology[numb].images.portrait;
        }
    })
    var dots = document.getElementsByClassName("dot");
    for (var i=0; i<dots.length; i++){
        if (i==numb){
          dots[numb].setAttribute("class", "dot active");
        }else{
          dots[i].setAttribute("class", "dot");
        }
    }
}
