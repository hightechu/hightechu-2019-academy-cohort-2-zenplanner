
function getExpense() {
    income = document.getElementById('i');
    transportation = document.getElementById('t');
    entertainment = document.getElementById('e');
    nutrition = document.getElementById('n');
    fnget = function(response, status) {
        if('error' in response) {
            alert("{0}: {1}".format(status, response.error.message));
        } else {
            for(expense in response) {
                inc = response[expense].income;
                tra = response[expense].transportation;
                ent = response[expense].entertainment;
                nut = response[expense].nutrition;
            }
            //h.innerHTML = nut;
            income.innerHTML = 'Currently $' + inc;
            transportation.innerHTML = 'Currently $' + tra;
            entertainment.innerHTML = 'Currently $' + ent;
            nutrition.innerHTML = 'Currently $' + nut;
        }
    }
    APIajax("expenses", "GET", fnget);
}

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
    jsonObj.income = document.getElementById('income').value;
    jsonObj.transportation = document.getElementById('transportation').value;
    jsonObj.entertainment = document.getElementById('entertainment').value;
    jsonObj.nutrition = document.getElementById('nutrition').value;
    jsonObj.id = 1;

    APIajax("expenses", "PUT", fn, jsonObj);
    //APIajax("expenses", "GET", fnget);
}