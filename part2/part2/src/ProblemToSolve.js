/**************************************************************************************************************
 * SOFTWARE DEVELOPER JOB APPLICANTS, PLEASE READ:
 * Please complete the code below to compute the desired result based on the requirements in the comments.
 * Afterward, provide the resulting number, the hash, and the completed source code, along with your resume/CV,
 * to be considered for the job application. You can email everything to careers -at- webnames -dot- ca
 * Thank you for your interest!
 **************************************************************************************************************/

var sHash =
  'ObzGcetd4MdM8LuMyA7zvHtKcc3VIjQY8eGxMaIbnPbDTjLTqptLr7Hru3XB3cTsEleQRGEHw1BTzsv9kiHLjz/Ck1EaUR5t7pKEID7+tzh9fRlPTgUcbLg6Kgp17/7qGjAFfw3ZbTh4GfhTmrGe1Xz6xOWlu4SUaUj3c9AYwOuRGifcKdpw7E29Oee8FePE';
var aJaggedArray = [
  50,
  [2, 84, 47],
  109,
  59,
  687,
  [40, [49, 89, 349], 23, 9],
  596,
  23,
  50,
];
var sApplicationCode = sHash + ' ~ ' + getSumOfArrayElements(aJaggedArray);

console.log(
  'Please include the following hash and number in your application: <br/><br/>' +
    sApplicationCode
);

/****************************************************************************************************************
 * This function should return the sum of all integers in a JAGGED array (an array of integers and other arrays.)
 * E.g. getSumOfArrayElements([ 1, [2, 3, 4], 5]) => 15.
 ***************************************************************************************************************/
const getSumOfArrayElements = (array) => {
  array.reduce(
    (sum, x) => sum + (Array.isArray(x) ? getSumOfArrayElement(x) : x),
    0
  );
};
