const {fetchBreedDescription} = require('./breedFetcher');

const searchTerm = process.argv[2];

const callbackFunc = (error, description) => {

  if (error)  {
    console.log(`Error encountered: ${error}`);
  } else console.log(description);

};



fetchBreedDescription(searchTerm, callbackFunc);


