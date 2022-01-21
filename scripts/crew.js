var numb = 0;

fetch("./scripts/data.json")
.then(
    function(resp){
        return resp.json();
    })
    .then(function(data){
        //data.destinations[0];
        document.getElementById("role").innerHTML = data.crew[numb].role;
        document.getElementById("name").innerHTML = data.crew[numb].name;
        document.getElementById("crewImage").src = data.crew[numb].images.png;
        document.getElementById("description").innerHTML = data.crew[numb].bio;
    })

changeInfo = numb =>{
    fetch("./scripts/data.json")
.then(
    function(resp){
        return resp.json();
    })
    .then(function(data){
        //data.destinations[0];
        document.getElementById("role").innerHTML = data.crew[numb].role;
        document.getElementById("name").innerHTML = data.crew[numb].name;
        document.getElementById("crewImage").src = data.crew[numb].images.png;
        document.getElementById("description").innerHTML = data.crew[numb].bio;
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
