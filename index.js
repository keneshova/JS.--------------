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
//это мультиуровневый массив
for(let i = 0; i < example2.length; i++){
  for(let j = 0; j < example2[i].length; j++){
    console.log(example2[i][j]);
  }
}
let example3 = [4, 1, 7, 10, 11, 33];
if (example3.includes(6)) { //includes пров-т сущ ли число в массиве 
  console.log("yes");
}
else{
  console.log("no");
}

let example4 = [5, 4, 1, 55, 1, 0, 2];
let example5 = [3, 11, 4, 15, 1, 2, 77];
for (let i = 0; i < example4.length; i++) {
  if (example4.includes(15[i])) {
    console.log("yes");
  }
}
let example6 = ["a", "c", "f", "d", "b"];
console.log(example6.reverse());//reverse-наоброт .можно вызвать без console

example6.sort();//это сортировка и не раьотает с числами 
console.log(example6);

let example7 = [1, 5, 4, 2, 3, 6];
example7.sort();
console.log(example7);