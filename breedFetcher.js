const request = require('request');

const searchTerm = process.argv[2];
console.log(`You searched for: ${searchTerm}`);

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, (error, response, body) => {
  if (error) {
    console.error('Error! Breed not found!', error);
    console.log("Error is ", error);
    return;
  }

  if (response.statusCode >= 400) {

    console.log(`Error reached, status code ${response.statusCode}`);
    return;
  }


  if (!error) {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }

});


