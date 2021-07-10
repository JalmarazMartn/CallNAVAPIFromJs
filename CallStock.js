var request = require("request");
auth = require('./ApiKey.json');
var transUrl = require('./BaseUri.json').URL + "/Sandbox/ODataV4/NAVBlobFileStorage_ItemStock?Company=CRONUS%20ES"
var data2 = {"itemNo":"1896-S","locationFilter":""}
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