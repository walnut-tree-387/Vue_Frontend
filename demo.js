const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  })
  resp.on('end', () =>{
    try{
      const jsonData = JSON.parse(data);
      cleanJson(jsonData);
      console.log(jsonData);
    }
    catch(err){
      console.log(err);
    }
  })
  // parse json data here...


});
function cleanJson(jsonData) {
  for(const key in jsonData){
    if(jsonData.hasOwnProperty(key)){
      var jsonValue = jsonData[key];
      if(typeof jsonValue === 'object' && !Array.isArray(jsonValue)){
        cleanJson(jsonValue);
      }
      else if(Array.isArray(jsonValue)){
        jsonData[key] = jsonValue.filter((item) => item !== '-' && item !== 'N/A' && item !== '');
      }

      if(jsonValue === '-' || jsonValue === '' || jsonValue === 'N/A') delete jsonData[key];
    }

  }
}