
var width = window.innerWidth
var height = window.innerHeight

var version = "3.1.2";
var versionName = "ctm.reglabs.com Un Integrated";

var emailFrm = $("#EMAIL").val();
var response = $('#response-text2').text();


$(document).ready(function () {
    
    console.log("Width: " + width );
    console.log("Height: " + height);
    console.log("Version Number: " + version + " | Version Name: " + versionName);
   
    (function () {

        var emailURL = str.replace("unsub.thereglabs.com/Home/Submit/", window.location.href);

        if (response = '{"error":"invalid_email"}') { 
            document.getElementById("response-text2").style.color = "#FF0000";
            document.getElementById("response-text2").innerHtml("The email " + emailURL + " was invalid.");

        } else if (response = '{"success":"added"}') {
            document.getElementById("response-text2").style.color = "#007f00";
            document.getElementById("response-text2").innerHtml("The email " + emailURL + " has been addded.");

        } else if (response = '{"success":"existing_email"}') {
            document.getElementById("response-text2").style.color = "#3232ff";
            document.getElementById("response-text2").innerHtml("The email " + emailURL + " already exists in the database.");
        } else {
            document.getElementById("response-text2").innerHtml("The email has been addded.");
        }
    });

});

$(document).keypress(function () {

    var emailFrm = $("#EMAIL").val();

    $('#redirect').attr('value', "unsub.thereglabs.com/Home/Submit/" + emailFrm);

});

$(document).keydown(function () {

    var emailFrm = $("#EMAIL").val();

    $('#redirect').attr('value', "unsub.thereglabs.com/Home/Submit/" + emailFrm);

});


$(document).mousemove(function () {

    var emailFrm = $("#EMAIL").val();

    $('#redirect').attr('value', "unsub.thereglabs.com/Home/Submit/" + emailFrm);

});

