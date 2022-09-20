// console.log("BOM");

// console.log(location.search);
var queryParams = location.search;
queryParams = queryParams.replace("?", "");

var queryParamsArray = queryParams.split("&");
// console.log(queryParamsArray);

var searchParams = {};

for (var counter = 0; counter < queryParamsArray.length; counter++) {
    var item = queryParamsArray[counter];
    var itemKeyValuePairs = item.split('=');
    var key = itemKeyValuePairs[0];
    var value = itemKeyValuePairs[1];
    searchParams[key] = value;
    // console.log(itemKeyValuePairs);
}

console.log(searchParams);

console.log(searchParams.email)

if(location.protocol === 'http:') {

} else if (location.protocol === 'https:') {

}

function onPositionReceived(pos) {
    console.log(pos.coords.latitude,pos.coords.longitude);
}

navigator.geolocation.getCurrentPosition(onPositionReceived);