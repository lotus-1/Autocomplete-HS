var url = require("url");
var data = require("../data.json").stars;

function wordSearch(str) {
  var output = [];
  if (str === "") {
    return (output = []);
  }
  for (var i = 0, l = data.length; i < l && output.length < 10; i++) {
    var word = data[i];
    if (word.indexOf(str) === 0) {
      output.push(word);
    }
  }
  return output;
}

module.exports = wordSearch;
