
var width = window.innerWidth
var height = window.innerHeight
var email = ""

var version = "1.1.1"
var versionName = "Starting Point"


$(document).ready(function(){

    console.log(width);
    console.log(height);    
    console.log(version+" "+versionName);    

});


$("#submit").click(function(){

    var email = $("#email").val()

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("xml","https://europe7.fivecrm.com/509399/api.php?mode=import&hash=<5bfd194daaaf9be8f691a5c91fd93c93>");

    var xmlDoc;

    xmlhttp.onreadystatechange = function() {
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        
                xmlDoc = xmlhttp.responseXML;
                console.log(xmlDoc);
                
            }
        };
    };
        
    var xml = '<?xml version="1.0"?><frame name="mainFrame" src="https://europe7.fivecrm.com/509399/api.php"><head></head><importdata><area>007</area><data><notify>connor.willoughby@callthemarket.com</notify><account><field table="TELRCM" field="COMPANY">API Submission</field></account><company><field table="CONT" field="EMAIL">'+(email)+'</field></company></data></area></importdata></frame>';
    xmlhttp.send(xml);     
   
    console.log(email);

});

/*
<?xml version="1.0"?><importdata><area>007</area><data><notify>connor.willoughby@callthemarket.com</notify><account><field table="TELRCM" field="COMPANY">API Submission</field></account><company><field table="CONT" field="EMAIL">"(email)"</field></company></data></area></importdata>
*/


// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("EMAIL","email");

// var xmlDoc;

// xmlhttp.onreadystatechange = function() {
//     xmlhttp.onreadystatechange = function() {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    
//             xmlDoc = xmlhttp.responseXML;
            
//         }
//     };
// };

// var xml = '<?xml version="1.0"?><importdata><area>007</area><data><notify>connor.willoughby@callthemarket.com</notify><account><field table="TELRCM" field="COMPANY">API Submission</field></account><company><field table="CONT" field="EMAIL">'+(email)+'</field></company></data></area></importdata>';
// xmlhttp.send(xml);
     