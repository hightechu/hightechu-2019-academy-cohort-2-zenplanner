
test = function() {
    h = document.querySelector('h1');
    fnget = function(response, status) {
        if('error' in response) {
            alert("{0}: {1}".format(status, response.error.message));
        } else {
            for(expense in response) {
                tra = response[expense].transportation;
                ent = response[expense].entertainment;
                nut = response[expense].nutrition;
            }
            h.innerHTML = nut;
        }
    }
    APIajax("expenses", "GET", fnget);
}

del = function(id) {
    fndelete = function(response, status) {
        if('error' in response) {
            alert("{0}: {1}".format(status, response.error.message));
        } else {
            alert("Deleted {0} expenses".format(response.count))
        }
    }
    APIajax("expenses/{0}".format(id), "DELETE", fndelete);
}