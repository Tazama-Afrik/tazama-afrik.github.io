#!/usr/bin/node
const africanCountriesAPI = require('@babajidemm/african-countries-api');
const countryData = africanCountriesAPI.byName('Nigeria');
console.log(countryData.body.toString());
// const africanCountriesAPI = require('@babajidemm/african-countries-api');
// const countriesByName = africanCountriesAPI.byName('Ghana');
// console.log(countriesByName.body.toString());
