const findOfficesToContact = require('./findOfficesToContact')

const partners = require('./partners.json')

console.log(findOfficesToContact(51.515419, -0.141099, 100, partners))
