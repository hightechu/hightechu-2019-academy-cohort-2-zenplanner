function addExpense() {
    fn = function (response, status) {
        if('error' in response) {
            alert("{0}: {1}".format(status, response.error.message));
        }
        else {
            setCookie("userAuth", response.id, response.ttl)
            setCookie("userId", response.userId, response.ttl)
            loadDoc("data.html");
        }
    }

    var jsonObj = new Object();
    jsonObj.email = document.getElementById("nutrition").value;
    jsonObj.password = document.getElementById("transportation").value;
    jsonObj.ttl = 180;
    
    APIajax("users/login", "POST", fn, jsonObj);
}