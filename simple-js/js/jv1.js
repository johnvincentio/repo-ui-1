function typoCorrector(sourceText, target, value) {
    var re = new RegExp(target, 'g');
    var found = sourceText.match(re);
    console.log("Replacing " + found.length + " instance of '" + target + "' with '" + value + "'");

    var newstr = sourceText.replace(re, value);
    return newstr;
}

// tests

function testTypoCorrector() {
    var sourceText = 'cats dogs cats dogs';
    var target = 'cats';
    var value = 'dogs';
    var expected = 'dogs dogs dogs dogs';
    if (typoCorrector(sourceText, target, value) === expected) {
        console.log('SUCCESS: `typoCorrector` is working');
    } else {
        console.log('FAILURE: `typoCorrector` is not working');
    }
}

testTypoCorrector();
