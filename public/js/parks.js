var dat
var quail = {
    open: "6-8",
    dogs: 1,
    fishing: false,
    hiking: true,
    Horseback_Riding: true,
    Mountain_Biking: false,
    kayaking: false
}
$.get('/park', quail, function success(data, textStatus) {
    var newdata = filterParks(data)
    dat = newdata;
    console.log(newdata)
    console.log(textStatus)
});

function filterParks(input) {
    var data = JSON.parse(input)
    var value
    var newvalue
    var thirdvalue
    var name
    for (var i = 0; i <= data.length; i++) {
        name = data[i].park_name;
        if (name == "HEATHERWOOD PARK") {
            value = (data[i].the_geom.coordinates);
            newvalue = value[0]
            break;
        }
    }
    return newvalue[0];
}
