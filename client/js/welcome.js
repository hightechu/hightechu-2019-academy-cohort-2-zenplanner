
popout = document.querySelector('#popout');
popout.style.display = 'none';

function showMenu(x) {
    x = document.querySelector(x);
    x.classList.toggle("change");
    if (x.style.display === "none") {
        x.style.display = "";
    } else {
        x.style.display = "none";
    }
    //createExpense();
}

/*function createExpense(){
    fn = function(response, status) {
        if('error' in response) {
            alert("{0}: {1}".format(status, response.error.message));
        }
        else {
            for (expense in response) {
                alert(expense.transportation);
            }
            alert("Created the expense");
        }
    }

    fnget = function(response, status) {
        if('error' in response) {
            alert("{0}: {1}".format(status, response.error.message));
        }
        else {
            for (expense in response) {
                alert(expense.transportation);
            }
        }
    }

    var jsonObj = new Object();
    jsonObj.transportation = 8;
    jsonObj.entertainment = 2;
    jsonObj.nutrition = 180;

    APIajax("expenses", "POST", fn, jsonObj);
    APIajax("expenses", "GET", fnget);
}*/