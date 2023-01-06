let umaString= `'Um' "texto"`;

console.log(umaString[7]);
console.log(umaString.charAt(6));
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o',3));
console.log(umaString.lastIndexOf('o',3));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/g));
console.log(umaString.replace('Um','outra'));

console.log(umaString.replace(/t/g,'#'));
console.log(umaString.length);
console.log(umaString.slice(2,6));
console.log(umaString.substring(6,11));

console.log(umaString.split(' '));

console.log(umaString.split('t',3));