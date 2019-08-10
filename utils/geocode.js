const request = require('request');
const geoCode = (address,cb) =>{
    const geoCodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoibmFtcmF0YXNpbmdoMjkxMSIsImEiOiJjandkNTQ3N24wNDJoNDNtb2oxcG80bWdpIn0.J6zTzuoOcZrC3g7H5bbe1Q";
    request({url : geoCodeUrl , json: true},(error,response)=>{
        if(error){
            cb("Web Api is not found",undefined);
        }

        else if(response.body.features.length === 0){
            cb("Search Result not applicable",undefined);
        }
        else {
            cb(undefined,{
             latitude : response.body.features[0].center[1],
             longitude :response.body.features[0].center[0],
             location : response.body.features[0].place_name

            })
        
        }
    })
    
}

module.exports = geoCode;