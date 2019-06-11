
function createExpense(){
    fn = function(response, status) {
        if('error' in response) {
            alert("{0}: {1}".format(status, response.error.message));
        }
        else {
            alert("Created your expenses");
        }
    }

    var jsonObj = new Object();
    jsonObj.transportation = document.getElementById('transportation').value;
    jsonObj.entertainment = document.getElementById('entertainment').value;
    jsonObj.nutrition = document.getElementById('nutrition').value;

    APIajax("expenses", "POST", fn, jsonObj);
    //APIajax("expenses", "GET", fnget);
}