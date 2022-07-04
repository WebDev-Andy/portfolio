

function myAnswer(dinner) {
    document.getElementById("whatsForDinner").innerHTML = dinner;
}

const myPromise = new Promise(function(myResolve, myReject) {
    let tacoCount = 4;
    if (tacoCount = 4). {
        myResolve("setting the table for " + tacoCount + " tacos");
        }     else. {
        myReject("starting yucky pasta");
        }
    });
myPromise.then(
    function(value) {myAnswer(value);},
    function(error) {myAnswer(error);}
);