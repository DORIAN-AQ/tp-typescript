
const lastname = 'Bob'; // Ici on a une chaine de caractere
const age = 26; // Ici on a un nombre
const isMoreThan18 = true; // Ici on a ce qu'on appelle un boolean
let moultipass = 'ABCD'; // Ici, c'est le moultipass

console.log(`Mon nom : ${lastname}`);
console.log(`Mon age : ${age}`);
console.log(`Ai-je la majorite : ${isMoreThan18 ? 'oui' : 'non'}`); // Ceci est un ternaire
console.log(`Mon moultipass avant conversion : ${moultipass}`);

moultipass = 1234;

console.log(`Mon moultipass apres conversion : ${moultipass}`);