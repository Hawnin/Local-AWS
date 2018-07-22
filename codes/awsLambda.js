'use-strict'
const DOMParser = require('xmldom').DOMParser;
const axios = require('axios');
const url = 'http://checkip.amazonaws.com/';
const inputJSON = ("../templates/awsTemplate");
const inputXML = ("../templates/awsTemplate");

exports.handler = function (event, context, callback) {

    var JSONOutput = [];
    var IP;

    getIPcall(
        //just to get  the IP

    ).then(function (resp) {
        /**1/2 Way to create JSON */
        IP = resp.data.trim("\n");
        JSONOutput.push(creatJSON(IP));
        /**2/2 Way to create JSON */
        JSONOutput.push({
            YourIP: IP
        });

        var lambdaresponse = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Success',
                //location: lambdaresponse.data.trim()
                ip: JSONOutput,
                resp: lambdaresponse
            })
        }
        callback(null, lambdaresponse);
    });
}
function call(service) {

}
function getIPcall() {
    return axios.get(url);
}
function creatJSON(IP) {
    var obj = new Object();
    obj.IP = IP;
    return obj;
}