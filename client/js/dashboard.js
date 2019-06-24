var income,
    out;

window.onload = function () {

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
            income = inc;
            out = parseInt(tra) + parseInt(ent) + parseInt(nut);
        }
        showData(income, out);
    }
    APIajax("expenses", "GET", fnget);
}

function showData(income, out) {
    console.log(out);
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Progress"
        },
        axisX: {
            valueFormatString: "DD MMM,YY"
        },
        axisY: {
            title: "Finance(in CAD)",
            includeZero: false,
            suffix: "$"
        },
        legend:{
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries
        },
        toolTip:{
            shared: true
        },
        data: [{
            name: "Money in",
            type: "spline",
            yValueFormatString: "#0.## $",
            showInLegend: true,
            dataPoints: [
                { x: new Date(), y: income },
                { x: new Date() - 20, y: income}
            ]
        },
        {
            name: "Money out",
            type: "spline",
            yValueFormatString: "#0.## $",
            showInLegend: true,
            dataPoints: [
            { x: new Date(), y: out },
            { x: new Date() - 20, y: out}
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }
}