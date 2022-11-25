const request = require('request');



const fetchBreedDescription = function(breedName, callback) {

  // callback('siberian', 'siamese');


  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    // if (response.statusCode >= 400) {
    // console.log(`Error reached, status code ${response.statusCode}`);
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    if (data.length < 1) {
      callback('Error! Breed not found!', null);

      return;
    }

    if (!error) {
      callback(null, data[0].description);
    }

  });

};

module.exports = { fetchBreedDescription };


