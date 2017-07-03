
function test(s1, s2) {
    return s2.search(s1);
}

function test1(s1, s2) {
    return s2.search(s1);
}


function test3(s1, s2) {
    return s2.toLowerCase().indexOf(s1) > -1;
}

/*
console.log(test('b', 'abc'));
console.log(test('b', 'aBc'));
console.log(test1('b', 'aBc'));
*/

console.log(test3('b', 'abc'));
console.log(test3('b', 'aBc'));
console.log(test3('d', 'abc'));


// console.log(test('cd', 'abcd'));


/*
function test2() {
var str = "Visit W3Schools!"; 
var n = str.search("W3Schools");
console.log("n "+n);
}
test2();

function test3(find) {
var str = "Visit W3Schools!"; 
var n = str.search(find);
console.log("(3) n "+n);
}
test3('W3Schools');

function test4(find, str) {
var n = str.search(find);
console.log("(4) n "+n);
}
test4('W3Schools', "Visit W3Schools!");

function test5(find, str) {
var n = str.search(find);
console.log("(5) n "+n);
return n;
}
var a1 = test5('W3Schools', "Visit W3Schools!");
console.log("a1 "+a1);

function test6(find, str) {
return str.search(find);
}
var a2 = test6('W3Schools', "Visit W3Schools!");
console.log("a2 "+a2);
*/

/*
var str = "Visit W3Schools!"; 
var n = str.search("W3Schools");
console.log("n "+n);
*/


