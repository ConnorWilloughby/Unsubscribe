
var width = window.innerWidth
var height = window.innerHeight

var version = "1.0.2"
var versionName = "ctm.reglabs (Live)"
var versionDesc = "Fixed 1"


$(document).ready(function(){
  
    console.log("Width: " + width + " Height: " + height);
    console.log("Version Number: "+version+" | Version Name: "+versionName);
    console.log("Version Description: "+versionDesc);    

});

function regUnsub() {
    window.location.assign("https://ctm.thereglabs.com/Admin/RegUnsub.html");
}

function b2bUnsub() {
    window.location.assign("https://ctm.thereglabs.com/Admin/B2B_Unsub.html");
}