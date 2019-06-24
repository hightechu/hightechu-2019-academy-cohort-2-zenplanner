
function updateExpense(){
    fn = function(response, status) {
        if('error' in response) {
            alert("{0}: {1}".format(status, response.error.message));
        }
        else {
            alert("Updated your expenses");
        }
    }

    var jsonObj = new Object();
    jsonObj.transportation = document.getElementById('transportation').value;
    jsonObj.entertainment = document.getElementById('entertainment').value;
    jsonObj.nutrition = document.getElementById('nutrition').value;
    jsonObj.id = 1;

    APIajax("data", "PUT", fn, jsonObj);
    //APIajax("expenses", "GET", fnget);
}