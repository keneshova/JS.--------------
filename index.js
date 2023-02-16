let example1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let example2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];//сос-т из трех элементов

console.log(example1.length);//length-это количество цифр выв-т сколько их
console.log(example2.length);
console.log(example1[2]);
console.log(example2[2]);

console.log(example1[4]);
console.log(example1[7]);

console.log(example2);//выв-т все элементы
console.log(example2[1][1]);

let test = example2[2];
console.log(test[1]);
//выв все эл массива
for(let i = 0; i < example1.length; i++){
  console.log(example1[i]);
}

for(let i = 0; i < example2.length; i++){
  for(let j = 0; j < example2.length; j++){
    console.log(example2[i][j]);
  }
}