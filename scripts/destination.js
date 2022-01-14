fetch("./scripts/data.json")
.then(
    function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data.destinations[0]);
    })