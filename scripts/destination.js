var numb = 0;

fetch("./scripts/data.json")
.then(
    function(resp){
        return resp.json();
    })
    .then(function(data){
        //data.destinations[0];
        document.getElementById("destination").innerHTML = data.destinations[numb].name;
        document.getElementById("destination_image").src = data.destinations[0].images.png;
        document.getElementById("destination_description").innerHTML = data.destinations[numb].description;
        document.getElementById("distance").innerHTML = data.destinations[numb].distance;
        document.getElementById("time").innerHTML = data.destinations[numb].travel;
    })

changedestination = numb =>{
    fetch("./scripts/data.json")
.then(
    function(resp){
        return resp.json();
    })
    .then(function(data){
        //data.destinations[0];
        document.getElementById("destination").innerHTML = data.destinations[numb].name;
        document.getElementById("destination_image").src = data.destinations[numb].images.png;
        document.getElementById("destination_description").innerHTML = data.destinations[numb].description;
        document.getElementById("distance").innerHTML = data.destinations[numb].distance;
        document.getElementById("time").innerHTML = data.destinations[numb].travel;
    })
    var destlinks = document.getElementsByClassName("destlinks");
    for (var i=0; i<destlinks.length; i++){
        if (i==numb){
            destlinks[numb].setAttribute("class", "selected_destination destlinks");
        }else{
            destlinks[i].setAttribute("class", "destlinks");
        }
    }
}

