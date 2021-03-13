// Array

// Push
num.push(1);

// Sort
num.sort();

let num = [5, 8, 2, 9, 3];
console.log(`Nosso vetor é o ${num}`);

// Length
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

// Percorrendo um Array
for (let pos = 0; pos < num.length; pos++) {
  console.log(num[pos]);
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

// Percorrendo um Array de forma Simplificada
for (pos in num) {
  console.log(num[pos]);
}

// Posição de um valor
let valuePos = num.indexOf(10);
    if (pos == -1) {
        console.log(`O valor não foi encontrado`)
    } else {
        console.log(`O valor de ${num} está na posição ${valuePos}`);
    }
