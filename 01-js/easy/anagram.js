/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  length1 = str1.length;
  length2 = str2.length;

  for (i = 0; i < length1; i++){
        b = true;
        for (j = 0; j < length2; j++){
            if (str1[i] == str2[j]) {
                b = false;
                break;
            }
        }
        if (b) {
            return false;
        }
    }

    for (i = 0; i < length2; i++) {
        b = true;
        for (j = 0; j < length1; j++) {
            if (str2[i] == str1[j]) {
                b = false;
                break;
            }
        }
        if (b) {
            return false;
        }
    }


    return true;
}

module.exports = isAnagram;
