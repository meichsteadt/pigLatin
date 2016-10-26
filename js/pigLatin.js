var string = "This is youar sql sync a squeal sentence"
var array = string.toLowerCase().split(" ");
var vowels = ["a", "e", "i", "o", "u", "y"];
var vowelIndex = [];
var pigLatin = [];

function compare(stringArray, compareArray) {
	stringArray.forEach(function(string) {
    var preVowels = [];
    var postVowels = [];
    for(var i = 0; i < string.length; i++) {
      compareArray.forEach(function(compareString) {
      if(preVowels.length === 0) {
        if(string.charAt(i) === compareString && string.charAt(0) !== "q"
        	&& string.charAt(0) !== "y") {
          preVowels.push(string.slice(0,i) + "ay");
          postVowels.push(string.slice(i));
          pigLatin.push(fonzi(postVowels, preVowels));
        	}
          else if(string.charAt(i) === compareString && string.charAt(0) === "q"
          && string.charAt(i) !== "u") {
            preVowels.push(string.slice(0,i) + "ay");
            postVowels.push(string.slice(i));
            pigLatin.push(fonzi(postVowels, preVowels));
          }
          else if(string.charAt(i) === compareString && string.charAt(0) === "y"
          && string.charAt(i) !== "y") {
            preVowels.push(string.slice(0,i) + "ay");
            postVowels.push(string.slice(i));
            pigLatin.push(fonzi(postVowels, preVowels));
          }
        }
      });
    }
  });
  return pigLatin.join(' ');
}

function fonzi(array1, array2) {
	return array1[0] + array2[0];
}

console.log(compare(array, vowels));
