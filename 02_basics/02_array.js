/* If we have a two array then combine the one array then we using the "conacate() and spread-Operator"
method. */
let marvel_heros = ["Thor","Ironman","Batman"]
let dc_heros = ["Krissh","Shaktiman","Spiderman"]
let all_Heros = marvel_heros.concat(dc_heros)
//console.log(all_Heros);
//Using Sperad operator
let allnew_heros= [...marvel_heros,...dc_heros];
console.log(allnew_heros);
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
