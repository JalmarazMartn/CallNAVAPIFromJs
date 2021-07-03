var request = require("request");
auth = require('./ApiKey.json');
//var fs = require('fs');
//var FilePath = 'C:/Users/Jesus/Documents/XLIFF.xsd';
//var FilePath = 'C:/Users/Jesus/Documents/Tocho.txt';
//content = fs.readFileSync(FilePath,{encoding:'utf8', flag:'r'});
var transUrl = require('./BaseUri.json').URL + "/Sandbox/ODataV4/NAVBlobFileStorage_GetFileContent?Company=CRONUS%20ES"
var data2 = {"fileType": "EDI-ORDER", "fileName":"ORDER2030.txt"};
request.post(
    {     
        url: transUrl,        
        auth,
        headers:{
        content_type: 'application/json'       
},
        body: JSON.stringify(data2)
      }          
, function (err, response, body) {    
    //console.log(body);
    const fileContent = JSON.parse(body).value;
    console.log(fileContent);
});