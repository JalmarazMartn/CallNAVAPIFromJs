var request = require("request");
auth = require('./ApiKey.json');
//var fs = require('fs');
//var FilePath = 'C:/Users/Jesus/Documents/XLIFF.xsd';
//var FilePath = 'C:/Users/Jesus/Documents/Tocho.txt';
//content = fs.readFileSync(FilePath,{encoding:'utf8', flag:'r'});
var transUrl = require('./BaseUri.json').URL +  "/Sandbox/ODataV4/NAVBlobFileStorage_GetFileList?Company=CRONUS%20ES"
var data2 = {"fileType": "EDI-ORDER"};
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
    const FileList = JSON.parse(JSON.parse(body).value);
    console.log(FileList);
	for (var i = 0; i < FileList.length; i++) {
		var element = FileList[i];
        console.log(element.name);
		}    
});