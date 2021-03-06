UploadFileToNAV('C:/Users/Jesus/Documents/3Regs.txt');

function UploadFileToNAV(FilePath)
{
    FilePath = 'C:/Users/Jesus/Documents/3Regs.txt'
    var request = require("request");
    auth = require('./ApiKey.json');
    var fs = require('fs');
    content = fs.readFileSync(FilePath,{encoding:'utf8', flag:'r'});
    var transUrl = require('./BaseUri.json').URL + "/Sandbox/ODataV4/NAVBlobFileStorage_LoadFile?Company=CRONUS%20ES"
    var data2 = {"fileType": "EDI-ORDER", "fileName":"ORDER2030.txt",
        "content":Buffer.from(content).toString('base64')};
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
        console.log(body);
    });    
}