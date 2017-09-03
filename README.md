# spidergap

These are the answers to the questiosnposed by Spidergap.

There are two files: 
deepClone is a utility for deep cloning a javascript object.
There is a test file for this that uses the deepClone function on a couple of objects and then compares the original object with the cloned object.

findOfficesToContact is a utility for finding offices for spidergap that are within a given radius of a location.
There is a test file for the findOfficesToContact module that will read the partners.json file from the filesystem and then find offices within 100km of a central London location and console log the offices.
To run this test file you need to run ```node findOfficesToContactTest.js```
