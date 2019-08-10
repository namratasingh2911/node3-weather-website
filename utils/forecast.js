const request = require('request');

const foreCast = (latitude,longitude,cb) => {
    const foreCastUrl="https://api.darksky.net/forecast/3ae62798f55ea542119e5d804707eebe/"+latitude+","+longitude+"?units=si&lang=en";
    request({url : foreCastUrl, json: true},(error,response)=>{
        if(error){
            cb('Web Api not found',undefined)

        }
        else if(response.body.error){
            cb(response.body.error,undefined);
        }

        else {
            cb(undefined,response.body.daily.data[0].summary +'It is currently '+ response.body.currently.temperature + ' degress out. It is ' +response.body.currently.precipProbability + '% chance of rain');
        }

    })

}

module.exports = foreCast;

