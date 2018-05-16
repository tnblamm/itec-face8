const request = require("request");

module.exports = (params, callback) => {
    var body = JSON.stringify(params.body) || '';
    var headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(body, "utf8"),
    };
    if(params.headers){
        headers = Object.assign(headers, params.headers); 
    }

    let options = {
        baseUrl: params.baseUrl,
        uri: params.uri,
        headers: headers,
        method: params.method,
        body: body
    }

    request(options, function (error, response, body) {
        if(response.statusCode == 200 || response.statusCode == 202){
            var info = {};
            if (body) {
                info = JSON.parse(body);
            }
            // console.log(info);
            callback(null, info);
        } else {
            console.log('error: '+ response.statusCode);
            callback(error, response);
        }
    });
    // return callback(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         let info = JSON.parse(body);
    //     }
    // }

};