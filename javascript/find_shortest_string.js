function findShortestString(arr) {
  if (arr.length === 0) return 0;

  let minLength = Number.MAX_VALUE;
  let minIndex = -1;
  for (index in arr) {
    if (arr[index].length < minLength) {
      minLength = arr[index].length;
      minIndex = index;
    }
  }

  return arr[minIndex];
}

function benchmark() {
  const beginning = new Date().getTime();

  for (i = 0; i <= 1000; i++) {
    findShortestString(["aaa", "bb", "gg", "h", ""]);
    findShortestString([
      "aaaaaaaaa",
      "bbbb",
      "gg",
      "hklsdjg",
      "",
      "aaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      "bb",
      "gg",
      "h",
      "",
      "aaaasdlkfasn",
      "bbasldkfms",
      "gg",
      "h",
      "",
      "aaa",
      "bb",
      "gg",
      "h",
      "",
      "aaa",
      "bb",
      "gg",
      "h",
      "",
      "aaa",
      "bb",
      "gg",
      "h",
      "",
    ]);
  }

  const ending = new Date().getTime();

  return (beginning - ending) / 2000;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(
    "=>",
    findShortestString(["flower", "juniper", "lily", "dadelion"])
  );

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
