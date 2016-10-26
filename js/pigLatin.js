var vowels = ["a", "e", "i", "o", "u", "y"];

function stringToArray(string) {
	return string.toLowerCase().split(" ");
}

function onlyLetters(string) {
	return (/[^a-z + \s]/gi).test(string);
}

function noVowels(string, vowelsArray) {
  for(var j = 0; j<vowelsArray.length;j++) {
    for(var i = 0; i < string.length; i++) {
			if(string.charAt(i) === vowelsArray[j]) {
        return true;
			}
		}
	};
  return false;
}


function combineWordParts(array1, array2) {
	return array1[0] + array2[0];
}

function compare(string, compareArray) {
	if(onlyLetters(string)) {
  	return "Please enter only letters.";
  }
  else {
		var pigLatin = [];
		var stringArray = stringToArray(string);
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
            pigLatin.push(combineWordParts(postVowels, preVowels));
            }
            else if(string.charAt(i) === compareString && string.charAt(0) === "q"
            && string.charAt(i) !== "u") {
              preVowels.push(string.slice(0,i) + "ay");
              postVowels.push(string.slice(i));
              pigLatin.push(combineWordParts(postVowels, preVowels));
            }
            else if(string.charAt(i) === compareString && string.charAt(0) === "y"
            && string.charAt(i) !== "y") {
              preVowels.push(string.slice(0,i) + "ay");
              postVowels.push(string.slice(i));
              pigLatin.push(combineWordParts(postVowels, preVowels));
            }
          }
        });
      }
			// if(preVowels.length === 0) {
			// 	pigLatin.push(string + "ay");
			if(!(noVowels(string, vowels))) {
				pigLatin.push("Thats not a word!");
			}
			// }
    });
    return pigLatin.join(' ');
  }
}

$(function(){
$("form").submit(function(event) {
	event.preventDefault();
	var userSentence = $("#userSentence").val();
	var sentenceToPig = stringToArray(userSentence);
	$('.pigLatin').text(compare(userSentence, vowels));
	$("#userSentence").val('');
	});
});
