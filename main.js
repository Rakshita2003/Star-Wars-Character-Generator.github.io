'use strict';
/*
 * returnURLStarWarsAPI takes a baseUrl base on your selection
 * it returns a valid https://akabab.github.io/starwars-api/api URL
 * 
 * @param {string} baseURL - base url to be parsed with an valid option
 * @param {number} numberId - default value 0, returns a URL to all.json
 *                   - if numberId is set , returns the id/{numberId}.json
 * @returns {string} - Retunr a url as a string 
 */
function returnURLStarWarsAPI(baseURL, numberId = 0) {

    let urlFull = new URL(baseURL);

    // parsing the url for a specific id.json
    if (numberId != 0) {
        urlFull.href += `/id/${numberId}.json`
    } else { // parsing the general api url to all.json
        urlFull.href += '/all.json';
    }

    return urlFull.href;
}

/**
 * returnRandomNumber its a function returnig  a random number
 * in range of 1 to range
 * 
 * @param {number} range - its a number definning the upper range
 * @returns  - return a random number betwwen 1-range
 */
const returnRandomNumber = (range) => Math.ceil(Math.random() * range);