let varA = 'A';
let varB = 'B';
let varC = 'C';
let tmp = varA;


[varA,varB,varC] = [varB,varC,varA]
/*varA = varB;
varB = varC;
varC = tmp;
*/
console.log(`varA = ${varA}, varB = ${varB}, varC = ${varC}`);