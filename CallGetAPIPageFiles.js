var request = require("request");
auth = require('./ApiKey.json');
var transUrl = require('./BaseUri.json').URL +  "/Sandbox/ODataV4/Company('CRONUS%20ES')/NavBlobFiles"
request.get(
    {     
        url: transUrl,        
        auth,
        headers:{
        content_type: 'application/json'       
}
    }          
, function (err, response, body) {    
    console.log(body);
});